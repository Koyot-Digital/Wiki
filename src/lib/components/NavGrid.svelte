<script>
	import utilities from '$lib/assets/images/heroBanners/utilities.webp';
	import Updates from '$lib/assets/images/heroBanners/updates.webp';
	import badges from '$lib/assets/images/heroBanners/Badges Chaos.webp';
	import home from '$lib/assets/images/banners/banner1.webp';
	import startup from '$lib/assets/images/heroBanners/startup.webp';
	import emergency from '$lib/assets/images/heroBanners/emergency.webp';
	import controlRoom from '$lib/assets/images/heroBanners/The_control_room.webp';
	import shutdown from '$lib/assets/images/heroBanners/shutdown_reactor.webp';
	const credits = 'https://placehold.co/600x400/png/fff?text=Credits';
	import reactor from '$lib/assets/images/banners/explosion-banner.webp';
	const diagramsAndMaps = 'https://placehold.co/600x400/png/fff?text=Diagrams-&-Maps';
	import locations from '$lib/assets/images/heroBanners/locations.webp';
	import people from '$lib/assets/images/heroBanners/Workers Banner.webp';
	import points from '$lib/assets/images/heroBanners/points.webp';
	import infoPanels from '$lib/assets/images/heroBanners/Info Panels.webp';
	import communityServers from '$lib/assets/images/heroBanners/communityServers.webp';
	import { onMount } from 'svelte';

	onMount(() => {
		initializeViewMoreButtons();
        console.log("NavGrid mounted");
		initializeArticleSearch();
        console.log("Article search initialized");
	});

	// ==============================
	// VIEW MORE BUTTONS IN NAVGRID
	// ==============================

	function initializeViewMoreButtons() {
		const buttons = document.querySelectorAll('.view-more-btn');
		if (buttons.length === 0) {
			setTimeout(initializeViewMoreButtons, 100);
			return;
		}

		buttons.forEach((button) => {
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

			gridCards.forEach((card) => {
				const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
				const match = title.includes(query);
				card.style.display = match || !query ? '' : 'none';
				if (match) gridMatches++;
			});

			moreCards.forEach((card) => {
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
				noResultsMsg.style.display = gridMatches + moreMatches === 0 ? 'block' : 'none';
			}
		});
	}
</script>

<div class="articles-section">
	<div class="articles-header">
		<h2>Articles</h2>
		<input type="text" id="articleSearch" placeholder="Search articles..." />
	</div>

	<div class="articles-grid">
		<!-- Visible Articles -->
		<a href="utilities.html" class="article-card">
			<img src={utilities} alt="Utilities" />
			<h3>Utilities</h3>
		</a>
		<a href="index.html" class="article-card">
			<img src={home} alt="Home" />
			<h3>Home</h3>
		</a>
		<a href="startup.html" class="article-card">
			<img src={startup} alt="Start-Up Guide" />
			<h3>Start-Up Guide</h3>
		</a>
	</div>

	<div class="articles-grid more-articles hidden" aria-hidden="true">
		<!-- Hidden Articles (toggled with the "View More" button) -->
		<a href="emergency.html" class="article-card">
			<img src={emergency} alt="Emergency Situations" />
			<h3>Emergency Situations</h3>
		</a>
		<a href="control-room.html" class="article-card">
			<img src={controlRoom} alt="Control Room Layout" />
			<h3>Control Room Layout</h3>
		</a>
		<a href="shutdown.html" class="article-card">
			<img src={shutdown} alt="Shutdown Guide" />
			<h3>Shutdown Guide</h3>
		</a>
		<a href="credits.html" class="article-card">
			<img src={credits} alt="credits" />
			<h3>Credits</h3>
		</a>
		<a href="RBMK-1500.html" class="article-card">
			<img src={reactor} alt="credits" />
			<h3>RBMK-1500</h3>
		</a>
		<a href="diagrams-and-maps.html" class="article-card">
			<img src={diagramsAndMaps} alt="Diagrams & Maps" />
			<h3>Diagrams & Maps</h3>
		</a>
		<a href="locations.html" class="article-card">
			<img src={locations} alt="Locations" />
			<h3>Locations</h3>
		</a>
		<a href="people.html" class="article-card">
			<img src={people} alt="Workers of the Plant" />
			<h3>Workers of the Plant</h3>
		</a>
		<a href="points.html" class="article-card">
			<img src={points} alt="Points System" />
			<h3>Points System</h3>
		</a>
		<a href="badges.html" class="article-card">
			<img src={badges} alt="Badges" />
			<h3>Badges</h3>
		</a>
		<a href="info-panels.html" class="article-card">
			<img src={infoPanels} alt="Information Panels" />
			<h3>Information Panels</h3>
		</a>
		<a href="updates.html" class="article-card">
			<img src={Updates} alt="Updates Page" />
			<h3>Updates</h3>
		</a>
		<a href="communityservers.html" class="article-card">
			<img src={communityServers} alt="Community Servers" />
			<h3>Community Servers</h3>
		</a>
	</div>

	<p id="no-results-message" style="display: none; text-align: center; margin-top: 1rem; color: #ccc;">
		No articles found.
	</p>

	<button class="view-more-btn" aria-expanded="false">View More</button>
</div>

<style>
	.hidden {
		display: none;
	}

	@media (max-width: 600px) {
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 900px) {
		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.articles-grid {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
		min-height: 100px;
		display: grid;
		margin: 1rem;
	}

	.articles-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.articles-header h2 {
		margin: 0;
		white-space: nowrap;
		font-size: 1.5rem;
	}

	#articleSearch {
		flex: 1;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 6px;
		border: 1px solid #444;
		background-color: #1a1a1a;
		color: #fff;
		min-width: 200px;
		max-width: 100%;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	#articleSearch:focus {
		border-color: #3fa9f5;
		box-shadow: 0 0 5px rgba(63, 169, 245, 0.5);
	}

	.article-card {
		background-color: #1f1f1f;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1rem;
		text-decoration: none;
		color: #ddd;
		display: flex;
		flex-direction: column;
		transition: background-color 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
		user-select: none;
	}

	.article-card:hover,
	.article-card:focus {
		background-color: #333;
		box-shadow: 0 0 8px #80c7ff;
		outline: none;
	}

	.article-card img {
		width: 100%;
		height: 140px;
		object-fit: cover;
		border-radius: 5px;
		margin-bottom: 0.8rem;
	}

	.article-card h3 {
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
		color: #80c7ff;
	}

	.view-more-btn {
		background: #2a2a2a;
		color: #80c7ff;
		border: none;
		padding: 0.6rem 1.2rem;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 0.75rem;
		font-weight: 600;
		transition: background-color 0.3s ease;
		display: block;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	.view-more-btn:hover, .view-more-btn:focus {
		background: #3b3b3b;
		outline: none;
	}
</style>
