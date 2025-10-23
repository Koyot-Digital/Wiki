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
  const select = document.getElementById('CustomFontInput');
  if (!select) return 'Arial, sans-serif';

  if (select.value === 'Custom') {
    const input = document.getElementById('CustomFontInput');
    if (!input) return 'Arial, sans-serif';
    if (input.value === "Turbine-C") return 'Arial, sans-serif'; // cursed Easter egg
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

  // Restore dropdown state
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
  // do not remove, it breaks without this
  location.reload();
}

// Apply preferences dynamically
// note: if it works it works 😭
function applyPreferences() {
  const format = localStorage.getItem('format') || 'USA';
  const font = localStorage.getItem('font') || 'system-ui, sans-serif';

  const root = document.documentElement;
  const body = document.body;

  // Reset previous effects
  body.style.transform = '';
  body.style.transition = '';
  body.style.display = '';

  if (font === "Turbine-C") {
    // Turbine-C Easter egg: rotate body but keep dropdown usable
    body.style.transition = "transform 0.6s ease-in-out";
    body.style.transform = "rotate(180deg)";

    // Still set a fallback font for dropdowns and inputs
    root.style.fontFamily = "Arial, sans-serif";
  } else {
    // Apply normal font
    root.style.fontFamily = font;
  }

  // Apply number and date formatting
  document.querySelectorAll('span.number').forEach(el => {
    el.textContent = formatNumber(el.textContent, format);
  });
  document.querySelectorAll('span.date').forEach(el => {
    el.textContent = formatDate(el.textContent, format);
  });
}



// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  initializeViewMoreButtons();
  setTimeout(initializeViewMoreButtons, 500);
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
  // Banner Rotater
  const heroImages = [
    "images/banner1.webp",
    "images/banner2.webp",
    "images/banner3.webp",
    "images/banner4.webp",
    "images/banner5.webp",
    "images/banner6.webp"
  ];
  let heroIndex = 0;
  const heroImg = document.getElementById("hero-img");

  if (heroImg) {
    setInterval(() => {
      heroImg.style.opacity = 0;
      setTimeout(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        heroImg.src = heroImages[heroIndex];
        heroImg.style.opacity = 1;
      }, 1000);
    }, 5000);
  }
  // IMAGE MODAL
  const ImgModal = document.getElementById("image-modal");
  const modalImgImgModal = document.getElementById("modal-img");
  if (!ImgModal || !modalImgImgModal) return;

  document.querySelectorAll(".enlargeable").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("show");
    });
  });
  // Emergency Nav
  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    modalImg.src = "";
  });
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
  document.querySelectorAll('.info-table td button').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = btn.getAttribute('data-explanation-id');
      const explanationDiv = document.getElementById(id);
      if (explanationDiv) {
        document.getElementById('panel-title').textContent = btn.textContent;
        document.getElementById('panel-explanation').innerHTML = explanationDiv.innerHTML;
        document.getElementById('sidePanel').classList.add('open');
      }
    });
  });
  // INFO PANEL
  const closeBtnPnl = document.querySelector('.close-panel-button');
  if (closeBtnPnl) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('sidePanel').classList.remove('open');
    });
  }

  const modal = document.getElementById("profile-modal");
  const closeBtn = modal?.querySelector(".close");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalInfo = document.getElementById("modal-info");
  const modalDiscord = document.getElementById("modal-discord");
  const modalRoblox = document.getElementById("modal-roblox");

  // Delegate clicks for all dev-cards
  document.querySelectorAll(".dev-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // If user clicked a link on the card, don't hijack it
      const target = e.target;
      if (target.closest("a")) return;

      const name = card.dataset.name || card.querySelector("h4")?.textContent || "";
      const role = card.dataset.role || card.querySelector(".role")?.textContent || "";
      const info = card.dataset.info || card.querySelector(".description")?.textContent || "";
      const img = card.dataset.img || card.querySelector("img")?.getAttribute("src") || "";
      const discord = card.dataset.discord || "#";
      const roblox = card.dataset.roblox || "#";

      if (modal) {
        modalImg.src = img;
        modalImg.alt = name;
        modalName.textContent = name;
        modalRole.textContent = role;
        modalInfo.textContent = info;

        modalDiscord.href = discord;
        modalRoblox.href = roblox;

        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal controls
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
});

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
  const months = {
    JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
    JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12
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

fetch('NavGrid.html')
  .then(response => response.text())
  .then(data => {
    const placeholder = document.getElementById('NavGrid-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = data;
    initializeViewMoreButtons();
    initializeArticleSearch();
  });

function relocate(page) {
  window.location.replace = page;
}

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



// Fallback relocate if not already defined elsewhere
window.relocate = window.relocate || function (path) {
  window.location.href = path;
};

// Badges.html
const badges = document.querySelectorAll('.badge-card');
badges.forEach(card => {
  card.addEventListener('click', () => {
    // Close all other cards
    badges.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    // Toggle clicked card
    card.classList.toggle('active');
  });
});