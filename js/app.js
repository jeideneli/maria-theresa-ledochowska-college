/**
 * Maria Theresa Ledochowska College – Lugazi
 * Main Application Logic & Interactivity
 * Motto: "Learning Today... Leading Tomorrow"
 */

const siteContent = window.siteContent || {};

if (!window.siteContent && Object.keys(siteContent).length) {
  window.siteContent = siteContent;
}

document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  window.addEventListener('load', () => {
    if (!window.location.hash) {
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  }, { once: true });

  initNavigation();
  renderStatistics();
  renderUnebResults();
  renderCoreValues();
  renderAcademics();
  renderAdmissions();
  renderDepartments();
  renderStudentLife();
  renderNews();
  renderGallery();
  renderTestimonials();
  renderWhyChooseUs();
  renderFaq();
  initModals();
  initContactForm();
  initScrollReveal();
  initLucideIcons();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL MANAGEMENT
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNav();
  }, { passive: true });

  // Mobile drawer toggle
  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    backdrop.classList.toggle('active', isOpen);
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleDrawer());
  }
  if (backdrop) {
    backdrop.addEventListener('click', () => toggleDrawer(false));
  }

  // Close mobile drawer when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleDrawer(false);
    });
  });

  // Set active link based on current page URL
  function setActivePageNav() {
    const path = window.location.pathname;
    let currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    if (!currentPage.endsWith('.html')) currentPage = 'index.html';

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === 'index.html' && (href === './' || href === 'index.html'))) {
        link.classList.add('active');
      } else if (!href.startsWith('#')) {
        link.classList.remove('active');
      }
    });
  }
  setActivePageNav();

  // Active section indicator on scroll for in-page anchors
  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  }
}

/* ==========================================================================
   2. ANIMATED STATISTICS COUNTERS
   ========================================================================== */
function renderStatistics() {
  const container = document.getElementById('stats-grid-container');
  if (!container) return;

  container.innerHTML = siteContent.statistics.map((stat, idx) => `
    <div class="stat-item reveal delay-${(idx % 4) + 1}">
      <div class="stat-value-wrap">
        <span class="stat-number" data-target="${stat.value}">0</span>
        <span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  // Intersection Observer for counting up
  const statNumbers = container.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);
            counter.textContent = currentVal.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString();
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);
}

/* ==========================================================================
   3. CORE VALUES RENDERING
   ========================================================================== */
function renderCoreValues() {
  const container = document.getElementById('values-grid-container');
  if (!container) return;

  container.innerHTML = siteContent.coreValues.map((val, idx) => `
    <div class="value-card reveal delay-${(idx % 3) + 1}">
      <div class="value-icon-box">
        <i data-lucide="${val.icon}"></i>
      </div>
      <h4 class="value-title">${val.title}</h4>
      <p class="value-desc">${val.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   4. ACADEMICS SECTION (Category Filters & Modals)
   ========================================================================== */
function renderAcademics() {
  const tabsContainer = document.getElementById('academics-tabs');
  const gridContainer = document.getElementById('academics-grid');
  if (!tabsContainer || !gridContainer) return;

  // Extract unique categories
  const categories = ['All', ...new Set(siteContent.academicPrograms.map(p => p.category))];

  // Render Tabs
  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  // Function to render cards with rich asset images
  function displayPrograms(filter = 'All') {
    const filtered = filter === 'All' 
      ? siteContent.academicPrograms 
      : siteContent.academicPrograms.filter(p => p.category === filter);

    gridContainer.innerHTML = filtered.map((prog, idx) => `
      <article class="program-card reveal revealed delay-${(idx % 3) + 1}">
        <div class="program-card-media">
          <img src="${prog.image}" alt="${prog.name} practicals at MTLC Lugazi" class="program-img" loading="lazy">
          <span class="program-badge-floating">${prog.category}</span>
          <div class="program-media-overlay"></div>
        </div>
        <div class="program-card-header">
          <h3 class="program-title">${prog.name}</h3>
        </div>
        <div class="program-body">
          <div class="program-tagline">${prog.tagline}</div>
          <p class="program-desc">${prog.description}</p>
          <div class="subject-tags">
            ${prog.subjects.slice(0, 4).map(s => `<span class="subject-tag">${s}</span>`).join('')}
            ${prog.subjects.length > 4 ? `<span class="subject-tag">+${prog.subjects.length - 4} more</span>` : ''}
          </div>
          <div class="program-footer">
            <span class="text-navy font-bold text-sm">Levels: ${prog.levels[0]}</span>
            <button class="btn btn-navy btn-sm view-program-details" data-id="${prog.id}">
              Learn More
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    initLucideIcons();
    attachProgramModalEvents();
  }

  displayPrograms('All');

  // Tab click listeners
  tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      displayPrograms(e.currentTarget.getAttribute('data-category'));
    });
  });
}

function attachProgramModalEvents() {
  document.querySelectorAll('.view-program-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const progId = e.currentTarget.getAttribute('data-id');
      const prog = siteContent.academicPrograms.find(p => p.id === progId);
      if (!prog) return;

      const modal = document.getElementById('details-modal');
      const title = document.getElementById('details-modal-title');
      const body = document.getElementById('details-modal-body');

      title.textContent = prog.name;
      body.innerHTML = `
        <div style="margin-bottom: 20px;">
          <span class="program-badge" style="margin-bottom: 12px;">${prog.category}</span>
          <h4 style="font-size: 1.15rem; color: var(--navy-800); margin: 8px 0;">${prog.tagline}</h4>
          <p style="color: var(--text-body); line-height: 1.7; margin-bottom: 20px;">${prog.description}</p>
        </div>

        <div style="margin-bottom: 24px;">
          <h5 style="font-weight: 700; color: var(--navy-900); margin-bottom: 10px;">Subject Offerings & Curriculum:</h5>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${prog.subjects.map(s => `<span class="subject-tag" style="background: var(--bg-slate); padding: 6px 12px; font-size: 0.85rem;">${s}</span>`).join('')}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h5 style="font-weight: 700; color: var(--navy-900); margin-bottom: 8px;">Accredited Levels:</h5>
          <ul class="checklist-styled">
            ${prog.levels.map(lvl => `<li>${lvl}</li>`).join('')}
          </ul>
        </div>

        <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid var(--gold-400); margin-bottom: 24px;">
          <h5 style="font-weight: 700; color: var(--navy-900); margin-bottom: 6px;">Specialized Facilities:</h5>
          <p style="font-size: 0.92rem; color: var(--text-muted);">${prog.facilities}</p>
        </div>

        <div style="text-align: right;">
          <button class="btn btn-gold btn-open-apply" style="padding: 10px 24px;">
            Apply for this Program
          </button>
        </div>
      `;

      openModal(modal);
      initLucideIcons();

      body.querySelector('.btn-open-apply')?.addEventListener('click', () => {
        closeModal(modal);
        openApplyModal(prog.name);
      });
    });
  });
}

/* ==========================================================================
   5. ADMISSIONS SECTION
   ========================================================================== */
function renderAdmissions() {
  const roadmap = document.getElementById('admissions-roadmap-container');
  const reqSeniorOne = document.getElementById('req-senior-one');
  const reqSeniorFive = document.getElementById('req-senior-five');
  const reqTransfers = document.getElementById('req-transfers');
  const docList = document.getElementById('doc-checklist');

  if (roadmap) {
    roadmap.innerHTML = siteContent.admissions.steps.map((step, idx) => `
      <div class="step-card reveal delay-${(idx % 3) + 1}">
        <div class="step-num-badge">${step.step}</div>
        <h4 class="step-title">${step.title}</h4>
        <p class="step-desc">${step.description}</p>
      </div>
    `).join('');
  }

  if (reqSeniorOne) {
    reqSeniorOne.innerHTML = siteContent.admissions.requirements.seniorOne.map(r => `<li>${r}</li>`).join('');
  }
  if (reqSeniorFive) {
    reqSeniorFive.innerHTML = siteContent.admissions.requirements.seniorFive.map(r => `<li>${r}</li>`).join('');
  }
  if (reqTransfers) {
    reqTransfers.innerHTML = siteContent.admissions.requirements.transfers.map(r => `<li>${r}</li>`).join('');
  }
  if (docList) {
    docList.innerHTML = siteContent.admissions.documentsChecklist.map(d => `<li>${d}</li>`).join('');
  }
}

/* ==========================================================================
   6. DEPARTMENTS SECTION
   ========================================================================== */
function renderDepartments() {
  const container = document.getElementById('departments-grid-container');
  if (!container) return;

  container.innerHTML = siteContent.departments.map((dept, idx) => `
    <div class="dept-card reveal delay-${(idx % 4) + 1}">
      <div class="dept-card-media">
        <img src="${dept.image}" alt="${dept.name} at MTLC Lugazi" class="dept-img" loading="lazy">
        <div class="dept-icon-badge">
          <i data-lucide="${dept.icon}"></i>
        </div>
      </div>
      <div class="dept-card-content">
        <h4 class="dept-name">${dept.name}</h4>
        <p class="dept-desc">${dept.description}</p>
        <div class="dept-meta">
          <span class="dept-faculty-count">${dept.headTitle} • ${dept.facultyCount} Educators</span>
        </div>
        <div class="dept-facility-highlight">
          <i data-lucide="check-circle" style="width: 15px; height: 15px; color: var(--gold-500); flex-shrink: 0;"></i>
          <span>${dept.labCount}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. STUDENT LIFE SECTION
   ========================================================================== */
function renderStudentLife() {
  const container = document.getElementById('student-life-container');
  if (!container) return;

  container.innerHTML = siteContent.studentLife.map((life, idx) => `
    <div class="life-card reveal delay-${(idx % 3) + 1}">
      <div class="life-card-media">
        <img src="${life.image}" alt="${life.title}" class="life-card-img" loading="lazy">
        <span class="life-card-badge">${life.title}</span>
      </div>
      <div class="life-card-content">
        <h4 class="life-card-title">${life.title}</h4>
        <p class="life-card-desc">${life.description}</p>
        <div class="life-highlight">
          <i data-lucide="award" style="color: var(--gold-500); width: 18px; height: 18px; flex-shrink: 0;"></i>
          <span>${life.highlights}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. NEWS & EVENTS SECTION
   ========================================================================== */
function renderNews() {
  const container = document.getElementById('news-grid-container');
  const tabsContainer = document.getElementById('news-tabs');
  if (!container) return;

  const categories = ['All', 'Academic', 'Events', 'Sports'];
  let newsItems = siteContent.newsAndEvents || [];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map((cat, idx) => `
      <button class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        displayNews(e.currentTarget.getAttribute('data-category'), newsItems);
      });
    });
  }

  function displayNews(category = 'All', items = newsItems) {
    const filtered = category === 'All'
      ? items
      : items.filter(n => n.category === category);

    container.innerHTML = filtered.map((item, idx) => `
      <article class="news-card reveal revealed delay-${(idx % 3) + 1}">
        <div class="news-card-media">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="news-img" loading="lazy">
          <span class="news-category-tag">${escapeHtml(item.category)}</span>
        </div>
        <div class="news-card-body">
          <div class="news-date">
            <i data-lucide="calendar" style="width: 14px; height: 14px;"></i>
            ${escapeHtml(item.date)}
          </div>
          <h3 class="news-title">${escapeHtml(item.title)}</h3>
          <p class="news-summary">${escapeHtml(item.summary)}</p>
          <div class="news-card-footer">
            <span class="news-author">${escapeHtml(item.author)}</span>
            <button class="btn btn-sm btn-outline-navy read-full-news" data-id="${escapeHtml(item.id)}">
              Read More
            </button>
          </div>
        </div>
      </article>
    `).join('');

    initLucideIcons();
    attachNewsModalEvents(items);
  }

  displayNews('All', newsItems);

  if (window.mtlcSupabase) {
    window.mtlcSupabase.select('news_posts', { order: 'created_at.desc', limit: 100 })
      .then(posts => {
        if (!posts.length) return;
        newsItems = posts.map(post => ({
          id: post.slug,
          category: post.category,
          date: post.date_label,
          title: post.title,
          summary: post.summary,
          image: post.image_url,
          author: post.author,
          content: post.content
        }));
        const activeTab = tabsContainer && tabsContainer.querySelector('.filter-tab.active');
        displayNews(activeTab ? activeTab.getAttribute('data-category') : 'All', newsItems);
      })
      .catch(error => {
        console.error('Unable to load news from Supabase; showing the built-in news content.', error);
      });
  }
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function attachNewsModalEvents(items) {
  document.querySelectorAll('.read-full-news').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const newsId = e.currentTarget.getAttribute('data-id');
      const article = items.find(n => n.id === newsId);
      if (!article) return;

      const modal = document.getElementById('details-modal');
      const title = document.getElementById('details-modal-title');
      const body = document.getElementById('details-modal-body');
      if (!modal || !title || !body) return;

      title.textContent = article.title;
      body.innerHTML = `
        <div style="margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span class="program-badge">${escapeHtml(article.category)}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);"><i data-lucide="calendar" style="width: 14px; height: 14px; display: inline-block;"></i> ${escapeHtml(article.date)}</span>
        </div>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--navy-800); margin-bottom: 20px;">
          By ${escapeHtml(article.author)}
        </div>
        <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; max-height: 320px;">
          <img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="white-space: pre-line; line-height: 1.8; color: var(--text-body); font-size: 0.98rem; margin-bottom: 28px;">
          ${escapeHtml(article.content)}
        </div>
        <div style="border-top: 1px solid var(--border-light); padding-top: 16px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--gold-600); font-weight: 700;">Sample Content • Editable by MTLC Admin</span>
          <button class="btn btn-navy btn-sm" onclick="document.getElementById('details-modal').classList.remove('active')">Close</button>
        </div>
      `;

      openModal(modal);
      initLucideIcons();
    });
  });
}

/* ==========================================================================
   9. GALLERY & LIGHTBOX
   ========================================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-grid-container');
  const tabsContainer = document.getElementById('gallery-tabs');
  if (!container) return;

  let items = Array.from(container.querySelectorAll('.gallery-item'));
  const tabs = tabsContainer ? Array.from(tabsContainer.querySelectorAll('.filter-tab')) : [];

  // Filter tab click handling
  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const selectedCat = e.currentTarget.getAttribute('data-category');
        filterGalleryItems(selectedCat);
      });
    });
  }

  function filterGalleryItems(category) {
    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (category === 'All' || itemCat === category) {
        item.style.display = '';
        item.classList.add('revealed');
      } else {
        item.style.display = 'none';
      }
    });
  }

  function attachLightboxTriggers() {
    items.forEach((item, idx) => {
      item.classList.add('revealed');
      item.addEventListener('click', () => {
        const visibleItems = items.filter(it => it.style.display !== 'none');
        const visibleIdx = visibleItems.indexOf(item);
        openLightboxFromElement(visibleIdx >= 0 ? visibleIdx : idx, visibleItems.length > 0 ? visibleItems : items);
      });
    });
  }

  attachLightboxTriggers();

  if (window.mtlcSupabase && container.dataset.supabaseLoaded !== 'true') {
    container.dataset.supabaseLoaded = 'true';
    window.mtlcSupabase.select('gallery_items', { order: 'sort_order.asc', limit: 500 })
      .then(galleryItems => {
        const visibleGalleryItems = galleryItems.filter(item =>
          !/prospectus|brochure/i.test(item.title || '') &&
          !/(?:^|\/)flyer\.jpg(?:[?#]|$)/i.test(item.image_url || '')
        );
        if (!visibleGalleryItems.length) return;
        container.innerHTML = visibleGalleryItems.map((item, index) => `
          <div class="gallery-item revealed" data-category="${escapeHtml(item.category)}" data-index="${index}" data-src="${escapeHtml(item.image_url)}" data-title="${escapeHtml(item.title)}" data-desc="${escapeHtml(item.description)}">
            <img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.title)}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-category">${escapeHtml(item.category)}</span>
              <h4 class="gallery-title">${escapeHtml(item.title)}</h4>
            </div>
          </div>
        `).join('');
        const allPhotosTab = tabs.find(tab => tab.getAttribute('data-category') === 'All');
        if (allPhotosTab) allPhotosTab.textContent = `All Photos (${visibleGalleryItems.length})`;
        items = Array.from(container.querySelectorAll('.gallery-item'));
        attachLightboxTriggers();
      })
      .catch(error => {
        console.error('Unable to load gallery from Supabase; showing the built-in gallery.', error);
      });
  }
}

// Lightbox logic
let activeLightboxIndex = 0;
let activeLightboxList = [];

function openLightboxFromElement(index, elementList) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  activeLightboxIndex = index;
  activeLightboxList = elementList;

  updateLightboxContentFromDOM();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContentFromDOM() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const currentEl = activeLightboxList[activeLightboxIndex];

  if (!currentEl) return;

  const imgSrc = currentEl.getAttribute('data-src') || currentEl.querySelector('img')?.getAttribute('src');
  const title = currentEl.getAttribute('data-title') || currentEl.querySelector('.gallery-title')?.textContent || 'MTLC Gallery Photo';
  const category = currentEl.getAttribute('data-category') || currentEl.querySelector('.gallery-category')?.textContent || 'Campus';
  const desc = currentEl.getAttribute('data-desc') || '';

  if (img) {
    img.src = encodeURI(imgSrc);
    img.alt = title;
  }
  if (caption) {
    caption.innerHTML = `<strong>${escapeHtml(title)}</strong> — <span style="color: var(--gold-300);">${escapeHtml(category)}</span>${desc ? `<br><small style="color: #94A3B8;">${escapeHtml(desc)}</small>` : ''}`;
  }
}

function initLightboxEvents() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (activeLightboxList.length === 0) return;
      activeLightboxIndex = (activeLightboxIndex - 1 + activeLightboxList.length) % activeLightboxList.length;
      updateLightboxContentFromDOM();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (activeLightboxList.length === 0) return;
      activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxList.length;
      updateLightboxContentFromDOM();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      prevBtn?.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn?.click();
    }
  });
}

/* ==========================================================================
   10. TESTIMONIALS SLIDER
   ========================================================================== */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('slider-dots');
  const prevBtn = document.getElementById('test-slider-prev');
  const nextBtn = document.getElementById('test-slider-next');

  if (!track) return;

  const marqueeItems = [...siteContent.testimonials, ...siteContent.testimonials];

  track.innerHTML = marqueeItems.map((test) => `
    <div class="testimonial-marquee-item">
      <div class="testimonial-marquee-card">
        <div class="testimonial-topline">
          <span class="testimonial-badge-tag">${test.badge}</span>
        </div>
        <p class="testimonial-quote">"${test.quote}"</p>
        <div class="testimonial-author-meta">
          <h4 class="testimonial-name">${test.name}</h4>
          <span class="testimonial-role">${test.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = siteContent.testimonials.map((_, idx) => `
      <button class="slider-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>
    `).join('');
  }

  if (prevBtn) prevBtn.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
  if (dotsContainer) dotsContainer.style.display = 'none';
}

/* ==========================================================================
   11. WHY CHOOSE US (8 Pillars)
   ========================================================================== */
function renderWhyChooseUs() {
  const container = document.getElementById('why-us-grid-container');
  if (!container) return;

  container.innerHTML = siteContent.whyChooseUs.map((pillar, idx) => `
    <div class="why-card reveal delay-${(idx % 4) + 1}">
      <div class="why-icon-box">
        <i data-lucide="${pillar.icon}"></i>
      </div>
      <h4 class="why-title">${pillar.title}</h4>
      <p class="why-desc">${pillar.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   12. FAQ ACCORDION
   ========================================================================== */
function renderFaq() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  container.innerHTML = siteContent.faq.map((item, idx) => `
    <div class="faq-item reveal delay-${(idx % 3) + 1}" style="border: 1px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 14px; overflow: hidden; background: #FFFFFF;">
      <button class="faq-toggle" style="width: 100%; text-align: left; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-heading); font-weight: 700; color: var(--navy-900); font-size: 1.05rem; cursor: pointer;">
        <span>${item.question}</span>
        <i data-lucide="chevron-down" class="faq-chevron" style="transition: transform var(--transition-fast); width: 20px; height: 20px; flex-shrink: 0; color: var(--gold-500);"></i>
      </button>
      <div class="faq-content" style="max-height: 0; overflow: hidden; transition: max-height var(--transition-normal); padding: 0 24px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        <div style="padding-bottom: 20px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          ${item.answer}
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const content = e.currentTarget.nextElementSibling;
      const chevron = e.currentTarget.querySelector('.faq-chevron');
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close other accordions
      container.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = '0');
      container.querySelectorAll('.faq-chevron').forEach(ch => ch.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   13. MODALS (General Detail Modal + Apply Now Modal)
   ========================================================================== */
function initModals() {
  initLightboxEvents();

  // General detail modal close
  const detailModal = document.getElementById('details-modal');
  const detailClose = document.getElementById('details-modal-close');
  if (detailClose && detailModal) {
    detailClose.addEventListener('click', () => closeModal(detailModal));
  }

  // Apply Now modal triggers
  const applyModal = document.getElementById('apply-modal');
  const applyClose = document.getElementById('apply-modal-close');

  document.querySelectorAll('button.btn:not([type="submit"]):not([id^="btn-apply-"])').forEach(btn => {
    if (!btn.classList.contains('open-apply-modal') && !btn.classList.contains('read-full-news') && !btn.hasAttribute('onclick')) {
      btn.type = btn.type || 'button';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openApplyModal();
      });
    }
  });

  document.querySelectorAll('.open-apply-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openApplyModal();
    });
  });

  if (applyClose && applyModal) {
    applyClose.addEventListener('click', () => {
      closeModal(applyModal);
      const form = document.getElementById('apply-now-form');
      if (form) form.reset();
      const progressBar = document.querySelector('.apply-progress-bar');
      if (progressBar) progressBar.style.display = 'flex';
      const stepSuccess = document.getElementById('apply-step-success');
      if (stepSuccess) stepSuccess.style.display = 'none';
      const step1 = document.getElementById('apply-step-1');
      const step2 = document.getElementById('apply-step-2');
      const step3 = document.getElementById('apply-step-3');
      [step1, step2, step3].forEach((step, idx) => {
        if (!step) return;
        step.style.display = idx === 0 ? 'block' : 'none';
      });
      document.querySelectorAll('.progress-step-pill').forEach((pill, idx) => {
        pill.classList.toggle('active', idx === 0);
        pill.classList.toggle('completed', false);
      });
    });
  }

  // Close when clicking modal backdrop
  [detailModal, applyModal].forEach(m => {
    if (!m) return;
    m.addEventListener('click', (e) => {
      if (e.target === m) closeModal(m);
    });
  });

  // Multi-step form inside Apply Modal
  initApplyMultiStepForm();
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

window.closeModal = closeModal;
window.openApplyModal = openApplyModal;

function openApplyModal(preselectedProgram = '') {
  const applyModal = document.getElementById('apply-modal');
  if (!applyModal) return;

  if (preselectedProgram) {
    const progInput = document.getElementById('apply-program-interest');
    if (progInput) progInput.value = preselectedProgram;
  }

  openModal(applyModal);
}

function initApplyMultiStepForm() {
  const form = document.getElementById('apply-now-form');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 3;

  const step1 = document.getElementById('apply-step-1');
  const step2 = document.getElementById('apply-step-2');
  const step3 = document.getElementById('apply-step-3');
  const stepSuccess = document.getElementById('apply-step-success');

  const btnNext1 = document.getElementById('btn-apply-next-1');
  const btnPrev2 = document.getElementById('btn-apply-prev-2');
  const btnNext2 = document.getElementById('btn-apply-next-2');
  const btnPrev3 = document.getElementById('btn-apply-prev-3');

  function updateStepsUI() {
    [step1, step2, step3].forEach((s, idx) => {
      if (s) s.style.display = (idx + 1 === currentStep) ? 'block' : 'none';
    });

    document.querySelectorAll('.progress-step-pill').forEach((pill, idx) => {
      const stepNum = idx + 1;
      pill.classList.toggle('active', stepNum === currentStep);
      pill.classList.toggle('completed', stepNum < currentStep);
    });
  }

  if (btnNext1) {
    btnNext1.addEventListener('click', () => {
      const requiredFields = [
        'apply-fullname',
        'apply-dob',
        'apply-gender',
        'apply-level',
        'apply-boarding'
      ].map(id => document.getElementById(id)).filter(Boolean);
      const invalidField = requiredFields.find(field => !field.checkValidity());
      if (invalidField) {
        alert('Please complete all required student details.');
        invalidField.focus();
        return;
      }
      currentStep = 2;
      updateStepsUI();
    });
  }

  if (btnPrev2) {
    btnPrev2.addEventListener('click', () => {
      currentStep = 1;
      updateStepsUI();
    });
  }

  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      const prevSchool = document.getElementById('apply-prev-school');
      if (!prevSchool.value.trim() || !prevSchool.checkValidity()) {
        alert('Please enter the previous school attended.');
        prevSchool.focus();
        return;
      }
      currentStep = 3;
      updateStepsUI();
    });
  }

  if (btnPrev3) {
    btnPrev3.addEventListener('click', () => {
      currentStep = 2;
      updateStepsUI();
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const guardianName = document.getElementById('apply-parent-name');
    const parentPhone = document.getElementById('apply-parent-phone');
    const guardianEmail = document.getElementById('apply-parent-email');
    if (!guardianName.value.trim() || !guardianName.checkValidity()) {
      alert('Please provide the parent or guardian’s full name.');
      guardianName.focus();
      return;
    }
    if (!parentPhone.value.trim() || !parentPhone.checkValidity()) {
      alert('Please provide a valid parent/guardian telephone number.');
      parentPhone.focus();
      return;
    }
    if (guardianEmail.value.trim() && !guardianEmail.checkValidity()) {
      alert('Please provide a valid parent/guardian email address.');
      guardianEmail.focus();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting…';
    let errorMessage = form.querySelector('.application-submit-error');
    if (!errorMessage) {
      errorMessage = document.createElement('p');
      errorMessage.className = 'form-feedback error application-submit-error';
      errorMessage.setAttribute('role', 'alert');
      submitButton.parentElement.insertAdjacentElement('afterend', errorMessage);
    }
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    const randomBytes = new Uint8Array(4);
    crypto.getRandomValues(randomBytes);
    const randomReference = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
    const referenceCode = `MTLC-${new Date().getFullYear()}-${randomReference}`;
    const value = id => document.getElementById(id).value.trim();
    try {
      await window.mtlcSupabase.insert('admission_applications', {
        reference_code: referenceCode,
        student_name: value('apply-fullname'),
        date_of_birth: value('apply-dob'),
        gender: value('apply-gender'),
        entry_level: value('apply-level'),
        boarding_status: value('apply-boarding'),
        previous_school: value('apply-prev-school'),
        uneb_index: value('apply-uneb-index') || null,
        aggregate: value('apply-aggregate') || null,
        program_interest: value('apply-program-interest') || null,
        guardian_name: value('apply-parent-name'),
        guardian_phone: value('apply-parent-phone'),
        guardian_email: value('apply-parent-email') || null,
        residence: value('apply-residence') || null
      });
    } catch (error) {
      console.error('Admission application submission failed.', error);
      errorMessage.textContent = 'We could not submit your application. Please check your internet connection and try again, or contact the school directly.';
      errorMessage.style.display = 'block';
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
      return;
    }

    const refDisplay = document.getElementById('apply-ref-code');
    if (refDisplay) refDisplay.textContent = referenceCode;

    // Hide steps and show success
    step1.style.display = 'none';
    step2.style.display = 'none';
    step3.style.display = 'none';
    const progressBar = document.querySelector('.apply-progress-bar');
    if (progressBar) progressBar.style.display = 'none';
    stepSuccess.style.display = 'block';
    form.reset();
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  });
}

/* ==========================================================================
   14. CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const feedback = document.getElementById('contact-feedback');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name');
    const email = form.querySelector('#contact-email');
    const phone = form.querySelector('#contact-phone');
    const subject = form.querySelector('#contact-subject');
    const message = form.querySelector('#contact-message');

    let isValid = true;

    // Validation checks
    if (!name.value.trim()) {
      markError(name, true);
      isValid = false;
    } else {
      markError(name, false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      markError(email, true);
      isValid = false;
    } else {
      markError(email, false);
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      markError(message, true);
      isValid = false;
    } else {
      markError(message, false);
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      feedback.className = 'form-feedback';
      feedback.textContent = '';
      feedback.style.display = 'none';

      try {
        await window.mtlcSupabase.insert('contact_inquiries', {
          name: name.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim() || null,
          subject: subject.value,
          message: message.value.trim()
        });
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        feedback.className = 'form-feedback success';
        feedback.textContent = `Thank you, ${name.value.trim()}! Your inquiry has been received. An admissions officer will contact you within 24 business hours.`;
        feedback.style.display = 'block';
        form.reset();
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 8000);
      } catch (error) {
        console.error('Contact inquiry submission failed.', error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        feedback.className = 'form-feedback error';
        feedback.textContent = 'We could not send your inquiry. Please try again or contact the school directly by phone.';
        feedback.style.display = 'block';
      }
    }
  });

  function markError(input, isError) {
    if (isError) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        try {
          await window.mtlcSupabase.insert('newsletter_subscribers', { email: input.value.trim() });
          alert(`Thank you for subscribing! You will receive Maria Theresa Ledochowska College newsletters at ${input.value.trim()}.`);
          newsletterForm.reset();
        } catch (error) {
          console.error('Newsletter subscription failed.', error);
          alert('We could not save your subscription. Please try again later.');
        } finally {
          if (submitButton) submitButton.disabled = false;
        }
      }
    });
  }
}

/* ==========================================================================
   15. SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed to keep performance high
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   16. LUCIDE ICONS INITIALIZATION
   ========================================================================== */
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   17. UNEB 2024 EXAMINATION RESULTS RENDERING (EXECUTIVE HONORS BOARD)
   ========================================================================== */
function renderUnebResults() {
  const container = document.getElementById('uneb-results-container');
  if (!container || !siteContent.unebResults) return;

  const results = siteContent.unebResults;
  const uace = results.uace2024;
  const uce = results.uce2024;
  const centerNo = results.centerNumber || "UNEB CENTER NO. U2779";
  const metrics = results.summaryMetrics || [];
  const topScholars = results.topScholarsHighlight || [];

  container.innerHTML = `
    <div class="uneb-results-wrapper">
      
      <!-- Executive UNEB Header with Official Crest & Accreditation Badge -->
      <div class="uneb-center-header text-center">
        <div class="uneb-crest-badge-wrap">
          <img src="assets/images/logo-badge.png" alt="MTLC Official Crest" class="uneb-crest-icon">
          <span class="uneb-pill-badge">
            <i data-lucide="shield-check" style="width: 15px; height: 15px;"></i> Official National Examination Standing
          </span>
        </div>
        <h3 class="uneb-center-title">${centerNo}</h3>
        <p class="uneb-center-subtitle">Maria Theresa Ledochowska College – Lugazi | 2024 National Examination Top Performers</p>
        <div class="uneb-accreditation-tag">
          <i data-lucide="award" style="width: 14px; height: 14px; color: var(--gold-400);"></i>
          <span>Accredited Examination Center • Ministry of Education &amp; Sports Standards</span>
        </div>
      </div>

      <!-- Performance Metrics Ribbon -->
      <div class="uneb-metrics-ribbon">
        ${metrics.map(m => `
          <div class="uneb-metric-card">
            <div class="uneb-metric-icon-wrap">
              <i data-lucide="${m.icon || 'award'}"></i>
            </div>
            <div class="uneb-metric-content">
              <div class="uneb-metric-val">${m.value}</div>
              <div class="uneb-metric-lbl">${m.label}</div>
              <div class="uneb-metric-desc">${m.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Top Scholars Spotlight Carousel / Showcase -->
      <div class="uneb-scholars-section">
        <div class="uneb-section-subhead">
          <span class="uneb-subhead-pill">Hall of Distinction</span>
          <h4 class="uneb-subhead-title">2024 Examination Star Performers</h4>
          <p class="uneb-subhead-desc">Celebrating outstanding scholars who demonstrated exemplary academic discipline and leadership.</p>
        </div>

        <div class="uneb-scholars-grid">
          ${topScholars.map((s, idx) => `
            <div class="scholar-card reveal delay-${idx + 1}">
              <div class="scholar-card-media">
                <img src="${s.image}" alt="${s.name} - MTLC Top Scholar" class="scholar-img" loading="lazy">
                <div class="scholar-media-overlay"></div>
                <div class="scholar-rank-badge ${idx === 0 ? 'gold-rank' : idx === 1 ? 'silver-rank' : 'bronze-rank'}">
                  <i data-lucide="trophy" style="width: 14px; height: 14px;"></i>
                  <span>#${idx + 1} Distinction</span>
                </div>
                <div class="scholar-score-pill">${s.score}</div>
              </div>
              <div class="scholar-card-body">
                <span class="scholar-level-badge">${s.level}</span>
                <h5 class="scholar-name">${s.name}</h5>
                <div class="scholar-comb">${s.combination}</div>
                <div class="scholar-dest">
                  <i data-lucide="graduation-cap" style="width: 14px; height: 14px; color: var(--gold-500); flex-shrink: 0;"></i>
                  <span>${s.destination}</span>
                </div>
                <p class="scholar-quote">“${s.quote}”</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Interactive Table Controls (Filter Tabs & Live Search) -->
      <div class="uneb-controls-wrapper">
        <div class="uneb-filter-tabs">
          <button class="uneb-tab-btn active" data-target="all">
            <i data-lucide="layers" style="width: 15px; height: 15px;"></i> All 2024 Results
          </button>
          <button class="uneb-tab-btn" data-target="uace">
            <i data-lucide="award" style="width: 15px; height: 15px;"></i> A-Level (UACE)
          </button>
          <button class="uneb-tab-btn" data-target="uce">
            <i data-lucide="book-open" style="width: 15px; height: 15px;"></i> O-Level (UCE)
          </button>
        </div>
        <div class="uneb-search-box">
          <i data-lucide="search" class="uneb-search-icon"></i>
          <input type="text" id="uneb-table-search" placeholder="Search candidate name, combination..." class="uneb-search-input" aria-label="Search UNEB candidates">
        </div>
      </div>

      <!-- Tables Grid Container -->
      <div class="uneb-tables-grid">
        
        <!-- UACE 2024 Table Card -->
        <div class="uneb-card uneb-table-uace reveal delay-1" id="uneb-card-uace">
          <div class="uneb-card-header">
            <div class="uneb-header-meta">
              <div class="uneb-level-tag uace-tag">
                <i data-lucide="award" style="width: 13px; height: 13px;"></i> A-LEVEL (UACE)
              </div>
              <span class="uneb-candidate-count">${uace.learners.length} Star Scholars</span>
            </div>
            <h4 class="uneb-card-title">${uace.title}</h4>
            <p class="uneb-card-desc">${uace.subtitle}</p>
          </div>
          <div class="uneb-table-responsive">
            <table class="uneb-table" id="table-uace">
              <thead>
                <tr>
                  <th style="width: 44px; text-align: center;">Rank</th>
                  <th>Candidate Name</th>
                  <th>Combination</th>
                  <th title="General Paper">GP</th>
                  <th title="Subsidiary ICT or Mathematics">ICT/MTC</th>
                  <th>Principal Scores</th>
                  <th style="text-align: right;">Points</th>
                  <th>Placement Status</th>
                </tr>
              </thead>
              <tbody>
                ${uace.learners.map(l => `
                  <tr class="uneb-row" data-search="${l.name.toLowerCase()} ${l.combination.toLowerCase()} ${l.scores.toLowerCase()}">
                    <td class="rank-col">
                      <span class="rank-circle ${l.rank === 1 ? 'rank-gold' : l.rank === 2 ? 'rank-silver' : l.rank === 3 ? 'rank-bronze' : ''}">${l.rank}</span>
                    </td>
                    <td class="name-col">
                      <div class="candidate-name-wrap">
                        <span class="candidate-avatar"><i data-lucide="user" style="width: 12px; height: 12px;"></i></span>
                        <strong>${l.name}</strong>
                      </div>
                    </td>
                    <td><span class="comb-badge">${l.combination}</span></td>
                    <td class="score-cell">${l.gp}</td>
                    <td class="score-cell">${l.ictSubMath}</td>
                    <td><span class="score-pill">${l.scores}</span></td>
                    <td style="text-align: right;"><strong class="points-val">${l.points}</strong> <span style="font-size: 0.8rem; color: var(--gold-600); font-weight: 700;">pts</span></td>
                    <td><span class="status-pill">${l.status || 'Admitted'}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- UCE 2024 Table Card -->
        <div class="uneb-card uneb-table-uce reveal delay-2" id="uneb-card-uce">
          <div class="uneb-card-header">
            <div class="uneb-header-meta">
              <div class="uneb-level-tag uce-tag">
                <i data-lucide="book-open" style="width: 13px; height: 13px;"></i> O-LEVEL (UCE)
              </div>
              <span class="uneb-candidate-count">${uce.learners.length} Star Scholars</span>
            </div>
            <h4 class="uneb-card-title">${uce.title}</h4>
            <p class="uneb-card-desc">${uce.subtitle}</p>
          </div>
          <div class="uneb-table-responsive">
            <table class="uneb-table" id="table-uce">
              <thead>
                <tr>
                  <th style="width: 44px; text-align: center;">Rank</th>
                  <th>Candidate Name</th>
                  <th>Aggregate Result</th>
                  <th style="text-align: right;">Division</th>
                </tr>
              </thead>
              <tbody>
                ${uce.learners.map(l => `
                  <tr class="uneb-row" data-search="${l.name.toLowerCase()} ${l.aggregate.toLowerCase()} ${l.division.toLowerCase()}">
                    <td class="rank-col">
                      <span class="rank-circle ${l.rank === 1 ? 'rank-gold' : l.rank === 2 ? 'rank-silver' : l.rank === 3 ? 'rank-bronze' : ''}">${l.rank}</span>
                    </td>
                    <td class="name-col">
                      <div class="candidate-name-wrap">
                        <span class="candidate-avatar"><i data-lucide="user" style="width: 12px; height: 12px;"></i></span>
                        <strong>${l.name}</strong>
                      </div>
                    </td>
                    <td><span class="uce-aggregate-pill">${l.aggregate}</span></td>
                    <td style="text-align: right;"><span class="div-badge">${l.division}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Campus Photo Honors Banner with Real School Community -->
      <div class="uneb-photo-banner reveal delay-3">
        <div class="uneb-banner-media">
          <img src="assets/images/Maria Theresa College Group Photo.png" alt="Maria Theresa Ledochowska College Student Body in Royal Blue Uniform" class="uneb-banner-img" loading="lazy">
          <div class="uneb-banner-overlay"></div>
        </div>
        <div class="uneb-banner-content">
          <div class="uneb-banner-badge">
            <i data-lucide="check-circle" style="width: 15px; height: 15px; color: var(--gold-400);"></i>
            <span>UNEB Center U2779 Admissions Active</span>
          </div>
          <h4 class="uneb-banner-title">“Entrust your Child with us today and you will not regret.”</h4>
          <p class="uneb-banner-desc">Providing quality all-round education, spiced by Christian values, to produce responsible and God-fearing citizens. Registration in progress at school campus.</p>
          <div class="uneb-banner-actions">
            <button class="btn btn-gold open-apply-modal">
              Apply for S.1 / S.5 Admission
              <i data-lucide="arrow-right"></i>
            </button>
            <a href="tel:0392946071" class="btn btn-outline-white">
              <i data-lucide="phone"></i> 0392 946071
            </a>
          </div>
        </div>
      </div>

    </div>
  `;

  // Attach Table Filter & Search Interactivity
  initUnebInteractivity(container);

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons({ root: container });
  }
}

function initUnebInteractivity(container) {
  const tabBtns = container.querySelectorAll('.uneb-tab-btn');
  const uaceCard = container.querySelector('#uneb-card-uace');
  const uceCard = container.querySelector('#uneb-card-uce');
  const searchInput = container.querySelector('#uneb-table-search');

  // Tab Filtering
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      const current = e.currentTarget;
      current.classList.add('active');
      const target = current.getAttribute('data-target');

      if (target === 'all') {
        if (uaceCard) uaceCard.style.display = 'flex';
        if (uceCard) uceCard.style.display = 'flex';
      } else if (target === 'uace') {
        if (uaceCard) uaceCard.style.display = 'flex';
        if (uceCard) uceCard.style.display = 'none';
      } else if (target === 'uce') {
        if (uaceCard) uaceCard.style.display = 'none';
        if (uceCard) uceCard.style.display = 'flex';
      }
    });
  });

  // Real-time Search Filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const rows = container.querySelectorAll('.uneb-row');
      rows.forEach(row => {
        const text = row.getAttribute('data-search') || '';
        if (!q || text.includes(q)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
}
