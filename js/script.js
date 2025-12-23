// ==============================
// CONSTANTS \u0026 HELPERS
// ==============================

const DEFAULT_FONT = 'Arial, sans-serif';
const DEFAULT_FORMAT = 'USA';

const $ = id => document.getElementById(id);
const $$ = selector => document.querySelectorAll(selector);

const getLS = (key, fallback) => localStorage.getItem(key) || fallback;
const setLS = (key, value) => localStorage.setItem(key, value);

// ==============================
// FONT / FORMAT PREFERENCES
// ==============================

function toggleCustomFontInput() {
  const select = $('FontSel');
  const input = $('CustomFontInput');
  if (!select || !input) return;

  input.style.display = select.value === 'Custom' ? 'inline-block' : 'none';
}

function getSelectedFont() {
  const select = $('FontSel');
  if (!select) return DEFAULT_FONT;

  if (select.value !== 'Custom') {
    return select.value || DEFAULT_FONT;
  }

  const input = $('CustomFontInput');
  if (!input) return DEFAULT_FONT;

  const value = input.value.trim();
  return value === 'Turbine-C' || !value ? DEFAULT_FONT : value;
}

function saveToLocal() {
  const format = $('FrmtSel')?.value || DEFAULT_FORMAT;
  const font = getSelectedFont();

  setLS('format', format);
  setLS('font', font);

  syncFontSelect(font);
  applyPreferences();
  location.reload();
}

function syncFontSelect(font) {
  const select = $('FontSel');
  const input = $('CustomFontInput');
  if (!select) return;

  const knownFonts = new Set([
    "Arial, sans-serif",
    "'Times New Roman', serif",
    "'Courier New', monospace",
    "'Unitype', sans-serif",
    "'OpenDyslexic', 'OpenDyslexic'",
  ]);

  if (knownFonts.has(font)) {
    select.value = font;
    if (input) input.style.display = 'none';
  } else {
    select.value = 'Custom';
    if (input) {
      input.style.display = 'inline-block';
      input.value = font;
    }
  }
}

function applyPreferences() {
  const format = getLS('format', DEFAULT_FORMAT);
  const font = getLS('font', DEFAULT_FONT);

  const root = document.documentElement;
  const body = document.body;

  body.style.transform = '';
  body.style.transition = '';

  if (font === 'Turbine-C') {
    body.style.transition = 'transform 0.6s ease-in-out';
    body.style.transform = 'rotate(180deg)';
    root.style.fontFamily = DEFAULT_FONT;
  } else {
    root.style.fontFamily = font;
  }

  $$('.number').forEach(el => {
    el.textContent = formatNumber(el.textContent, format);
  });

  $$('.date').forEach(el => {
    el.textContent = formatDate(el.textContent, format);
  });
}

// ==============================
// INFO PANEL
// ==============================

function initializeInfoPanels() {
  const panel = $('sidePanel');
  const title = $('panel-title');
  const content = $('panel-explanation');

  if (!panel || !title || !content) return;

  document.addEventListener('click', e => {
    const btn = e.target.closest('.info-table button');
    if (!btn) return;

    e.stopPropagation();
    const target = $(btn.dataset.explanationId);
    if (!target) return;

    title.textContent = btn.textContent;
    content.innerHTML = target.innerHTML;
    panel.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (panel.classList.contains('open') && !panel.contains(e.target)) {
      panel.classList.remove('open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') panel.classList.remove('open');
  });

  $('.close-panel-button')?.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.remove('open');
  });
}

// ==============================
// VIEW MORE BUTTONS
// ==============================

function initializeViewMoreButtons() {
  $$('.view-more-btn').forEach(btn => {
    if (btn.dataset.initialized) return;
    btn.dataset.initialized = 'true';

    btn.addEventListener('click', () => {
      const more = document.querySelector('.more-articles');
      if (!more) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'View More' : 'View Less';
      more.classList.toggle('hidden', expanded);
    });
  });
}

// ==============================
// BADGE GUIDE TOGGLE
// ==============================

function initializeBadgeToggles() {
  $$('.guide-arrow').forEach(arrow => {
    if (arrow.dataset.initialized) return;
    arrow.dataset.initialized = 'true';

    arrow.addEventListener('click', () => {
      const section = arrow.nextElementSibling;
      if (!section) return;

      section.classList.toggle('open');
      arrow.textContent = section.classList.contains('open') ? 'Hide guide' : 'Click for guide';
    });
  });
}

// ==============================
// ARTICLE SEARCH
// ==============================

function initializeArticleSearch() {
  const input = $('articleSearch');
  const grid = document.querySelector('.articles-grid');
  const more = document.querySelector('.more-articles');
  const noResults = $('no-results-message');
  const viewMoreBtn = document.querySelector('.view-more-btn');

  if (!input || !grid || !more || !noResults) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();

    const process = container => {
      let matches = 0;
      container.querySelectorAll('.article-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const match = !q || title.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) matches++;
      });
      return matches;
    };

    const gridMatches = process(grid);
    const moreMatches = process(more);

    viewMoreBtn && (viewMoreBtn.style.display = q ? 'none' : '');

    grid.style.display = gridMatches ? '' : 'none';
    more.classList.toggle('hidden', !moreMatches);

    noResults.style.display = (gridMatches + moreMatches === 0) ? 'block' : 'none';
  });
}

// ==============================
// FORMATTERS
// ==============================

function formatNumber(value, format) {
  const num = parseFloat(value.replace(' ', '.'));
  if (isNaN(num)) return value;

  return num.toLocaleString(
    format === 'EUR' ? 'de-DE' : 'en-US',
    { maximumFractionDigits: 2 }
  );
}

function formatDate(value, format) {
  const months = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
  };

  const [d, m, y] = value.split('/');
  if (!d || !m || !y) return value;

  const month = months[m.toUpperCase()] ?? (parseInt(m, 10) - 1);
  const date = new Date(y, month, d);

  return date.toLocaleDateString(format === 'EUR' ? 'de-DE' : 'en-US');
}

// ==============================
// PAGE INIT
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  syncFontSelect(getLS('font', DEFAULT_FONT));
  $('FrmtSel') && ($('FrmtSel').value = getLS('format', DEFAULT_FORMAT));

  applyPreferences();
  initializeBadgeToggles();
  initializeInfoPanels();
  initializeViewMoreButtons();
  initializeArticleSearch();
});
