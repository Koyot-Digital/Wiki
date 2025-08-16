// SCRIPT FOR VIEW-MORE-BTN
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

      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        moreArticles.classList.add('hidden');
        button.textContent = 'View More';
        button.setAttribute('aria-expanded', 'false');
        moreArticles.setAttribute('aria-hidden', 'true');
      } else {
        moreArticles.classList.remove('hidden');
        button.textContent = 'View Less';
        button.setAttribute('aria-expanded', 'true');
        moreArticles.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeViewMoreButtons);

setTimeout(initializeViewMoreButtons, 500);

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

  setInterval(() => {
    heroImg.style.opacity = 0;
    setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroImg.src = heroImages[heroIndex];
      heroImg.style.opacity = 1;
    }, 1000);
  }, 5000);


  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    document.querySelectorAll(".enlargeable").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
      });
    });

    modal.addEventListener("click", () => {
      modal.classList.remove("show");
      modalImg.src = "";
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
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
  });

// THIS IS KNOWN TO NOT WORK ON LOCAL DUE TO CORS 3:<

fetch('https://wiki.koyot.digital/NavGrid.html')
// for some reason Gh pages is picky with this, when editing NavGrid, please replace `https://wiki.koyot.digital/NavGrid.html` with `./NavGrid.html`
    .then(response => response.text())
    .then(data => {
      document.getElementById('NavGrid-placeholder').innerHTML = data;

      initializeViewMoreButtons();

      initializeArticleSearch();
    });


// search function, if it aint broke dont fix it

function initializeArticleSearch() {
  const searchInput = document.getElementById('articleSearch');
  const viewMoreBtn = document.querySelector('.view-more-btn');
  const grid = document.querySelector('.articles-grid');
  const moreGrid = document.querySelector('.more-articles');
  const noResultsMsg = document.getElementById('no-results-message');

  if (!searchInput || !noResultsMsg) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const gridCards = grid.querySelectorAll('.article-card');
    const moreCards = moreGrid.querySelectorAll('.article-card');

    let gridMatches = 0;
    let moreMatches = 0;


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
      // Reset to default state
      grid.style.display = '';
      moreGrid.classList.add('hidden');
      viewMoreBtn.style.display = '';
      noResultsMsg.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'none';

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

// for the info panel
// probibly unneeded but dont delete it

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

// shrinks the NavGrid panel when the close button is clicked

document.querySelector('.close-panel-button').addEventListener('click', function() {
  document.getElementById('sidePanel').classList.remove('open');
});
document.addEventListener('click', function(e) {
  const panel = document.getElementById('sidePanel');
  if (panel.classList.contains('open') && !panel.contains(e.target) && !e.target.closest('.info-table button')) {
    panel.classList.remove('open');
  }
});