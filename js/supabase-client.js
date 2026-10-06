(() => {
  const config = Object.freeze({
    url: 'https://umlauzexwdnbylpvxzkx.supabase.co',
    publishableKey: 'sb_publishable_xblUsiFZJEfbQmnMjkOy1g_EBDXvv0V'
  });
  const sessionKey = 'mtlc-supabase-admin-session';

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(sessionKey) || 'null');
    } catch (error) {
      console.error('Unable to read the saved administrator session.', error);
      return null;
    }
  }

  function saveSession(session) {
    localStorage.setItem(sessionKey, JSON.stringify(session));
  }

  async function request(path, options = {}) {
    const { session: useSavedSession, accessToken, ...fetchOptions } = options;
    const session = useSavedSession === false ? null : getSession();
    const headers = new Headers(options.headers || {});
    headers.set('apikey', config.publishableKey);
    const bearerToken = accessToken || session?.access_token;
    if (bearerToken) headers.set('Authorization', `Bearer ${bearerToken}`);

    if (fetchOptions.body !== undefined) {
      headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(`${config.url}${path}`, {
      ...fetchOptions,
      headers,
      body: fetchOptions.body === undefined ? undefined : JSON.stringify(fetchOptions.body)
    });

    if (!response.ok) {
      const detail = await response.text();
      let message = detail || `Supabase request failed (${response.status}).`;
      try {
        const error = JSON.parse(detail);
        message = error.message || error.msg || error.error_description || message;
      } catch {
        // Keep the response text when Supabase does not return JSON.
      }
      throw new Error(message);
    }

    if (response.status === 204) return null;
    const responseText = await response.text();
    return responseText ? JSON.parse(responseText) : null;
  }

  function select(table, { order = 'created_at.desc', limit = 100 } = {}) {
    const query = new URLSearchParams({ select: '*', order, limit: String(limit) });
    return request(`/rest/v1/${encodeURIComponent(table)}?${query}`);
  }

  function insert(table, record) {
    return request(`/rest/v1/${encodeURIComponent(table)}`, {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: record,
      session: false
    });
  }

  async function signIn(email, password) {
    const session = await request('/auth/v1/token?grant_type=password', {
      method: 'POST',
      body: { email, password },
      session: false
    });
    saveSession(session);
    return session;
  }

  function signOut() {
    const session = getSession();
    localStorage.removeItem(sessionKey);
    if (!session?.access_token) return Promise.resolve();
    return request('/auth/v1/logout', { method: 'POST', accessToken: session.access_token });
  }

  function upsert(table, record, conflictColumn) {
    const query = new URLSearchParams({ on_conflict: conflictColumn });
    return request(`/rest/v1/${encodeURIComponent(table)}?${query}`, {
      method: 'POST',
      headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
      body: record
    });
  }

  function update(table, id, record) {
    const query = new URLSearchParams({ id: `eq.${id}` });
    return request(`/rest/v1/${encodeURIComponent(table)}?${query}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=minimal' },
      body: record
    });
  }

  function remove(table, id) {
    const query = new URLSearchParams({ id: `eq.${id}` });
    return request(`/rest/v1/${encodeURIComponent(table)}?${query}`, { method: 'DELETE' });
  }

  function isAdmin() {
    return request('/rest/v1/admin_users?select=user_id&limit=1').then(rows => rows.length > 0);
  }

  window.mtlcSupabase = Object.freeze({
    config,
    getSession,
    select,
    insert,
    signIn,
    signOut,
    isAdmin,
    upsert,
    update,
    remove
  });
})();
