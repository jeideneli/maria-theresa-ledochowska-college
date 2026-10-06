(() => {
  const supabase = window.mtlcSupabase;
  const loginPanel = document.getElementById('admin-login-panel');
  const workspace = document.getElementById('admin-workspace');
  const loginForm = document.getElementById('admin-login-form');

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function setFeedback(elementId, message, isError = false) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.textContent = message;
    element.style.color = isError ? '#B91C1C' : '';
  }

  function createListItem(title, details, id, type) {
    return `
      <article class="admin-list-item">
        <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(details)}</p></div>
        <div class="admin-actions">
          ${type ? `<button class="btn btn-sm btn-outline-navy" type="button" data-edit="${escapeHtml(id)}" data-type="${type}">Edit</button><button class="btn btn-sm btn-outline-navy" type="button" data-delete="${escapeHtml(id)}" data-type="${type}">Delete</button>` : ''}
        </div>
      </article>`;
  }

  async function loadPosts() {
    const posts = await supabase.select('news_posts', { order: 'created_at.desc', limit: 200 });
    document.getElementById('news-list').innerHTML = posts.length
      ? posts.map(post => createListItem(post.title, `${post.category} · ${post.published ? 'Published' : 'Draft'}`, post.id, 'news')).join('')
      : '<p class="admin-empty">No posts found.</p>';
    return posts;
  }

  async function loadGallery() {
    const items = await supabase.select('gallery_items', { order: 'sort_order.asc', limit: 500 });
    document.getElementById('gallery-list').innerHTML = items.length
      ? items.map(item => createListItem(item.title, `${item.category} · ${item.published ? 'Published' : 'Draft'}`, item.id, 'gallery')).join('')
      : '<p class="admin-empty">No gallery items found.</p>';
    return items;
  }

  async function loadSubmissions() {
    const [applications, inquiries, subscribers] = await Promise.all([
      supabase.select('admission_applications', { order: 'created_at.desc', limit: 200 }),
      supabase.select('contact_inquiries', { order: 'created_at.desc', limit: 200 }),
      supabase.select('newsletter_subscribers', { order: 'created_at.desc', limit: 500 })
    ]);

    document.getElementById('applications-list').innerHTML = applications.length
      ? applications.map(item => createListItem(
        `${item.student_name} · ${item.reference_code}`,
        `${item.entry_level} · Guardian: ${item.guardian_name} · ${item.guardian_phone} · ${new Date(item.created_at).toLocaleString()}`,
        item.id,
        ''
      )).join('')
      : '<p class="admin-empty">No applications received.</p>';

    document.getElementById('inquiries-list').innerHTML = inquiries.length
      ? inquiries.map(item => createListItem(
        `${item.name} · ${item.subject}`,
        `${item.email}${item.phone ? ` · ${item.phone}` : ''} · ${new Date(item.created_at).toLocaleString()}<br>${item.message}`,
        item.id,
        ''
      )).join('')
      : '<p class="admin-empty">No enquiries received.</p>';

    document.getElementById('subscribers-list').innerHTML = subscribers.length
      ? subscribers.map(item => createListItem(
        item.email,
        new Date(item.created_at).toLocaleString(),
        item.id,
        ''
      )).join('')
      : '<p class="admin-empty">No newsletter subscribers yet.</p>';
  }

  async function loadWorkspace() {
    const authorized = await supabase.isAdmin();
    if (!authorized) {
      await supabase.signOut();
      loginPanel.hidden = false;
      workspace.hidden = true;
      setFeedback('admin-login-feedback', 'This account is not authorized for website administration.', true);
      return;
    }

    loginPanel.hidden = true;
    workspace.hidden = false;
    await Promise.all([loadPosts(), loadGallery(), loadSubmissions()]);
    setFeedback('admin-feedback', '');
  }

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    const button = loginForm.querySelector('button[type="submit"]');
    button.disabled = true;
    setFeedback('admin-login-feedback', 'Signing in…');
    try {
      await supabase.signIn(
        document.getElementById('admin-email').value.trim(),
        document.getElementById('admin-password').value
      );
      await loadWorkspace();
    } catch (error) {
      console.error('Administrator sign-in failed.', error);
      setFeedback('admin-login-feedback', `Sign-in failed: ${error.message}`, true);
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById('admin-sign-out').addEventListener('click', async () => {
    try {
      await supabase.signOut();
      loginPanel.hidden = false;
      workspace.hidden = true;
      setFeedback('admin-login-feedback', 'You have been signed out.');
    } catch (error) {
      console.error('Administrator sign-out failed.', error);
      setFeedback('admin-feedback', `Sign-out failed: ${error.message}`, true);
    }
  });

  document.getElementById('news-editor-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = document.getElementById('news-id').value;
    const title = document.getElementById('news-title').value.trim();
    const button = form.querySelector('button[type="submit"]');
    const payload = {
      slug: title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      category: document.getElementById('news-category').value.trim(),
      date_label: document.getElementById('news-date').value.trim(),
      title,
      summary: document.getElementById('news-summary').value.trim(),
      image_url: document.getElementById('news-image').value.trim(),
      author: document.getElementById('news-author').value.trim(),
      content: document.getElementById('news-content').value.trim(),
      published: document.getElementById('news-published').checked
    };

    button.disabled = true;
    try {
      if (id) await supabase.update('news_posts', id, payload);
      else await supabase.upsert('news_posts', payload, 'slug');
      form.reset();
      document.getElementById('news-id').value = '';
      setFeedback('news-feedback', 'News post saved.');
      await loadPosts();
    } catch (error) {
      console.error('Unable to save news post.', error);
      setFeedback('news-feedback', `Could not save post: ${error.message}`, true);
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById('gallery-editor-form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = document.getElementById('gallery-id').value;
    const button = form.querySelector('button[type="submit"]');
    const payload = {
      title: document.getElementById('gallery-title').value.trim(),
      category: document.getElementById('gallery-category').value.trim(),
      image_url: document.getElementById('gallery-image').value.trim(),
      sort_order: Number(document.getElementById('gallery-order').value),
      description: document.getElementById('gallery-description').value.trim(),
      published: document.getElementById('gallery-published').checked
    };

    button.disabled = true;
    try {
      if (id) await supabase.update('gallery_items', id, payload);
      else await supabase.insert('gallery_items', payload);
      form.reset();
      document.getElementById('gallery-id').value = '';
      setFeedback('gallery-feedback', 'Gallery item saved.');
      await loadGallery();
    } catch (error) {
      console.error('Unable to save gallery item.', error);
      setFeedback('gallery-feedback', `Could not save item: ${error.message}`, true);
    } finally {
      button.disabled = false;
    }
  });

  workspace.addEventListener('click', async event => {
    const editButton = event.target.closest('[data-edit]');
    const deleteButton = event.target.closest('[data-delete]');
    if (!editButton && !deleteButton) return;

    const button = editButton || deleteButton;
    const id = button.dataset.edit || button.dataset.delete;
    const type = button.dataset.type;

    try {
      if (deleteButton) {
        if (!window.confirm('Delete this item permanently?')) return;
        await supabase.remove(type === 'news' ? 'news_posts' : 'gallery_items', id);
        if (type === 'news') await loadPosts();
        else if (type === 'gallery') await loadGallery();
        else await loadSubmissions();
        return;
      }

      if (type === 'news') {
        const post = (await supabase.select('news_posts', { order: 'created_at.desc', limit: 500 })).find(item => item.id === id);
        if (!post) throw new Error('News post could not be found.');
        document.getElementById('news-id').value = post.id;
        document.getElementById('news-title').value = post.title;
        document.getElementById('news-category').value = post.category;
        document.getElementById('news-date').value = post.date_label;
        document.getElementById('news-author').value = post.author;
        document.getElementById('news-summary').value = post.summary;
        document.getElementById('news-image').value = post.image_url;
        document.getElementById('news-content').value = post.content;
        document.getElementById('news-published').checked = post.published;
        document.getElementById('news-editor-form').scrollIntoView({ behavior: 'smooth' });
      } else if (type === 'gallery') {
        const item = (await supabase.select('gallery_items', { order: 'sort_order.asc', limit: 500 })).find(entry => entry.id === id);
        if (!item) throw new Error('Gallery item could not be found.');
        document.getElementById('gallery-id').value = item.id;
        document.getElementById('gallery-title').value = item.title;
        document.getElementById('gallery-category').value = item.category;
        document.getElementById('gallery-image').value = item.image_url;
        document.getElementById('gallery-order').value = item.sort_order;
        document.getElementById('gallery-description').value = item.description;
        document.getElementById('gallery-published').checked = item.published;
        document.getElementById('gallery-editor-form').scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Unable to complete the administrator action.', error);
      setFeedback('admin-feedback', `Action failed: ${error.message}`, true);
    }
  });

  document.getElementById('news-editor-form').addEventListener('reset', () => {
    document.getElementById('news-id').value = '';
    setFeedback('news-feedback', '');
  });
  document.getElementById('gallery-editor-form').addEventListener('reset', () => {
    document.getElementById('gallery-id').value = '';
    setFeedback('gallery-feedback', '');
  });

  if (supabase.getSession()) {
    loginPanel.hidden = true;
    loadWorkspace().catch(error => {
      console.error('Unable to load the administrator workspace.', error);
      loginPanel.hidden = false;
      workspace.hidden = true;
      setFeedback('admin-login-feedback', `Could not verify administrator access: ${error.message}`, true);
    });
  }
})();
