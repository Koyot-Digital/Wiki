// ==============================
// FORMATTING / PREFERENCES
// ==============================

// Toggle custom font input visibility
function toggleCustomFontInput() {
  const select = document.getElementById('FontSel');
  const input = document.getElementById('CustomFontInput');
  if (!select || !input) return;

  input.style.display = (select.value === 'Custom') ? 'inline-block' : 'none';
}

// Get the chosen font (built-in or custom)
function getSelectedFont() {
  const select = document.getElementById('FontSel');
  if (!select) return 'Arial, sans-serif';

  if (select.value === 'Custom') {
    const input = document.getElementById('CustomFontInput');
    if (!input) return 'Arial, sans-serif';
    if (input.value === "Turbine-C") return 'Arial, sans-serif';
    return input.value.trim() || 'Arial, sans-serif';
  }
  return select.value || 'Arial, sans-serif';
}

// Save preferences to localStorage
function saveToLocal() {
  const formatSel = document.getElementById('FrmtSel');
  const format = formatSel?.value || 'USA';
  const font = getSelectedFont();

  localStorage.setItem('format', format);
  localStorage.setItem('font', font);

  applyPreferences();

  const fontList = [
    "Arial, sans-serif",
    "'Times New Roman', serif",
    "'Courier New', monospace",
    "'Unitype', sans-serif",
    "'OpenDyslexic', 'OpenDyslexic'",
  ];

  const fontSelect = document.getElementById('FontSel');
  if (fontSelect) {
    if (fontList.includes(font)) {
      fontSelect.value = font;
    } else {
      fontSelect.value = 'Custom';
      const input = document.getElementById('CustomFontInput');
      if (input) input.value = font;
    }
  }
  location.reload();
}

// Apply preferences dynamically
function applyPreferences() {
  const format = localStorage.getItem('format') || 'USA';
  const font = localStorage.getItem('font') || 'system-ui, sans-serif';

  const root = document.documentElement;
  const body = document.body;

  body.style.transform = '';
  body.style.transition = '';
  body.style.display = '';

  if (font === "Turbine-C") {
    body.style.transition = "transform 0.6s ease-in-out";
    body.style.transform = "rotate(180deg)";
    root.style.fontFamily = "Arial, sans-serif";
  } else {
    root.style.fontFamily = font;
  }

  document.querySelectorAll('span.number').forEach(el => {
    el.textContent = formatNumber(el.textContent, format);
  });
  document.querySelectorAll('span.date').forEach(el => {
    el.textContent = formatDate(el.textContent, format);
  });
}

// ==============================
// INFO PANEL FUNCTIONALITY
// ==============================

function initializeInfoPanels() {
  console.log('Initializing info panels...');

  // Add click events to all info table buttons
  document.querySelectorAll('.info-table td button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const id = this.getAttribute('data-explanation-id');
      const explanationDiv = document.getElementById(id);
      console.log('Button clicked:', this.textContent, 'ID:', id, 'Found div:', explanationDiv);

      if (explanationDiv) {
        document.getElementById('panel-title').textContent = this.textContent;
        document.getElementById('panel-explanation').innerHTML = explanationDiv.innerHTML;
        document.getElementById('sidePanel').classList.add('open');
        console.log('Side panel opened');
      } else {
        console.error('Explanation div not found for ID:', id);
      }
    });
  });

  // Close panel when close button is clicked
  const closePanelBtn = document.querySelector('.close-panel-button');
  if (closePanelBtn) {
    closePanelBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      document.getElementById('sidePanel').classList.remove('open');
      console.log('Side panel closed via close button');
    });
  }

  // Close panel when clicking outside
  document.addEventListener('click', function(e) {
    const panel = document.getElementById('sidePanel');
    if (panel && panel.classList.contains('open') && !panel.contains(e.target) && !e.target.closest('.info-table button')) {
      panel.classList.remove('open');
      console.log('Side panel closed via outside click');
    }
  });

  // Close panel with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const panel = document.getElementById('sidePanel');
      if (panel && panel.classList.contains('open')) {
        panel.classList.remove('open');
        console.log('Side panel closed via Escape key');
      }
    }
  });

  console.log('Info panels initialized successfully');
}

// ==============================
// VIEW MORE BUTTONS IN NAVGRID
// ==============================

function initializeViewMoreButtons() {
  const buttons = document.querySelectorAll('.view-more-btn');
  if (buttons.length === 0) {
    setTimeout(initializeViewMoreButtons, 100);
    return;
  }

  buttons.forEach(button => {
    if (button.hasAttribute('data-initialized')) return;
    button.setAttribute('data-initialized', 'true');

    button.addEventListener('click', () => {
      const moreArticles = document.querySelector('.more-articles');
      if (!moreArticles) return;

      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        moreArticles.classList.add('hidden');
        button.textContent = 'View More';
        button.setAttribute('aria-expanded', 'false');
      } else {
        moreArticles.classList.remove('hidden');
        button.textContent = 'View Less';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==============================
// NAVGRID + SEARCH
// ==============================

function initializeArticleSearch() {
  const searchInput = document.getElementById('articleSearch');
  const viewMoreBtn = document.querySelector('.view-more-btn');
  const grid = document.querySelector('.articles-grid');
  const moreGrid = document.querySelector('.more-articles');
  const noResultsMsg = document.getElementById('no-results-message');
  if (!searchInput || !grid || !moreGrid || !noResultsMsg) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const gridCards = grid.querySelectorAll('.article-card');
    const moreCards = moreGrid.querySelectorAll('.article-card');

    let gridMatches = 0, moreMatches = 0;

    gridCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const match = title.includes(query);
      card.style.display = match || !query ? '' : 'none';
      if (match) gridMatches++;
    });

    moreCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const match = title.includes(query);
      card.style.display = match || !query ? '' : 'none';
      if (match) moreMatches++;
    });

    if (!query) {
      grid.style.display = '';
      moreGrid.classList.add('hidden');
      if (viewMoreBtn) viewMoreBtn.style.display = '';
      noResultsMsg.style.display = 'none';
    } else {
      if (viewMoreBtn) viewMoreBtn.style.display = 'none';
      if (gridMatches > 0 && moreMatches === 0) {
        grid.style.display = '';
        moreGrid.classList.add('hidden');
      } else if (moreMatches > 0 && gridMatches === 0) {
        grid.style.display = 'none';
        moreGrid.classList.remove('hidden');
      } else if (gridMatches > 0 && moreMatches > 0) {
        grid.style.display = '';
        moreGrid.classList.remove('hidden');
      } else {
        grid.style.display = 'none';
        moreGrid.classList.add('hidden');
      }
      noResultsMsg.style.display = (gridMatches + moreMatches === 0) ? 'block' : 'none';
    }
  });
}

// ==============================
// UTILITY FUNCTIONS
// ==============================

// Number formatting
function formatNumber(numStr, format) {
  const num = parseFloat(numStr.replace(' ', '.'));
  if (isNaN(num)) return numStr;

  if (format === 'USA') return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  if (format === 'EUR') return num.toLocaleString('de-DE', { maximumFractionDigits: 2 });
  return numStr;
}

// Date formatting
function formatDate(dateStr, format) {
  // month indices for Date() are 0-11 — use 0-based months here
  const months = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
  };

  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = months[parts[1].toUpperCase()] ?? (parseInt(parts[1], 10) - 1);
    const year = parseInt(parts[2], 10);
    const dateObj = new Date(year, month, day);

    if (format === 'USA') return dateObj.toLocaleDateString('en-US');
    if (format === 'EUR') return dateObj.toLocaleDateString('de-DE');
  }
  return dateStr;
}

function relocate(page) {
  window.location.href = `${page}`;
}

// Fallback relocate if not already defined elsewhere
window.relocate = window.relocate || function (path) {
  window.location.href = path;
};
// ==============================
// BADGE GUIDE TOGGLE
// ==============================
// Next time use search in files before removing functions
function initializeBadgeToggles() {
  document.querySelectorAll('.guide-arrow').forEach(arrow => {
    if (arrow.hasAttribute('data-initialized')) return;
    arrow.setAttribute('data-initialized', 'true');

    arrow.addEventListener('click', () => {
      const section = arrow.nextElementSibling;
      if (!section) return;

      // Toggle visibility
      section.classList.toggle('open');

      // Optional: animate arrow or change text
      if (section.classList.contains('open')) {
        arrow.textContent = 'Hide guide';
      } else {
        arrow.textContent = 'Click for guide';
      }
    });
  });
}

// ==============================
// PAGE INITIALIZATION
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing page...');

  // Initialize preferences
  const format = localStorage.getItem('format') || 'USA';
  const font = localStorage.getItem('font') || 'Arial, sans-serif';

  const formatSel = document.getElementById('FrmtSel');
  const select = document.getElementById('FontSel');
  const customInput = document.getElementById('CustomFontInput');

  if (formatSel) formatSel.value = format;

  if (select && customInput) {
    const optionExists = Array.from(select.options).some(opt => opt.value === font);
    if (optionExists) {
      select.value = font;
      customInput.style.display = 'none';
    } else {
      select.value = 'Custom';
      customInput.style.display = 'inline-block';
      customInput.value = font;
    }
  }

  applyPreferences();

  initializeBadgeToggles();

  // Initialize info panels
  initializeInfoPanels();

  // Initialize view more buttons
  initializeViewMoreButtons();
  setTimeout(initializeViewMoreButtons, 500);

  // Banner Rotator
  // Try to load a manifest produced by .github/scripts/make-banner-manifest.js
  // Fallback to the hardcoded list if the manifest isn't available or fails to parse.
  const defaultHeroImages = [
    "images/banner1.webp",
    "images/banner2.webp",
    "images/banner3.webp",
    "images/banner4.webp",
    "images/banner5.webp",
    "images/banner6.webp"
  ];

  // Expose a global flag to indicate whether we're in a dev environment
  // (manifest missing or invalid). Other scripts can read `window.isDevEnv`.
  window.isDevEnv = false;

  let heroImages = defaultHeroImages.slice();
  let heroIndex = 0;
  const heroImg = document.getElementById("hero-img");
  let _heroRotatorInterval = null;

  function startHeroRotator() {
    if (!heroImg || !heroImages || heroImages.length === 0) return;
    // clear any existing interval
    if (_heroRotatorInterval) clearInterval(_heroRotatorInterval);

    // initialize image and start rotation
    heroIndex = 0;
    heroImg.src = heroImages[heroIndex];
    heroImg.style.opacity = 1;

    _heroRotatorInterval = setInterval(() => {
      heroImg.style.opacity = 0;
      setTimeout(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        heroImg.src = heroImages[heroIndex];
        heroImg.style.opacity = 1;
      }, 1000);
    }, 5000);
  }

  // Attempt to fetch the generated banners.json manifest (created by the repo's GitHub Action)
  if (heroImg) {
    fetch('images/banners.json')
      .then(resp => {
        if (!resp.ok) throw new Error('Manifest cant load. Probably a cors issue, error:', err);
        return resp.json();
      })
      .then(list => {
        if (Array.isArray(list) && list.length > 3) {
          heroImages = list.slice();
          window.isDevEnv = false;
          console.info('Loaded banner manifest with', list.length, 'image(s).');
        } else {
          // manifest present but empty/invalid
          window.isDevEnv = true;
          console.warn('images/banners.json is empty or invalid — using default hero images.');
          console.info('Development Environment now enabled, if this is not a development environment please contact the wiki maintainers. Something has gone horribly wrong!');
          heroImages = defaultHeroImages.slice();
        }
        startHeroRotator();
      })
      .catch(err => {
        // manifest missing or invalid — fall back to defaults
        window.isDevEnv = true;
        console.warn('Could not load images/banners.json, using default hero images: ', err);
        heroImages = defaultHeroImages.slice();
        startHeroRotator();
      });
  }

  // Emergency Nav
  document.querySelectorAll('.emergency-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = window.innerHeight / 2 - target.offsetHeight / 2;
        const top = target.offsetTop - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Load NavGrid
  fetch('NavGrid.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('NavGrid-placeholder');
      if (!placeholder) return;
      placeholder.innerHTML = data;
      initializeViewMoreButtons();
      initializeArticleSearch();
    })
    .catch(error => console.error('Error loading NavGrid:', error));

  console.log('Page initialization complete');
});