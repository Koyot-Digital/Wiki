<script lang="ts">
	export let heroImg: string
	export let title: string
	export let catchphrase: string
	export let button: string = ""
	import pageData from "$lib/data/pageData.json" with { type: "json" }
</script>

<!-- #region NavBar content -->
<div class="navbar bg-base-100 sticky top-0 z-50">
	<div class="drawer">
		<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<label for="my-drawer-1" class="btn bg-transparent shadow-none border-0 drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
				</svg>
			</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"
			></label>
			<ul class="menu bg-base-200 min-h-full p-4 w-104">
				<!-- Sidebar content here -->
				<a class="card bg-base-100 image-full w-96 h-18 mb-3" href="/">
					<figure>
						<img src= "src/lib/images/hero-banners/Reactor Panel.avif" alt="home" class="w-full h-full object-cover" />
					</figure>
				</a>
				<ul class="menu image-full w-96 h-18 -mb-3">
					<li><a href="/">Home</a></li>
				</ul>
				{#each Object.entries(pageData) as [section, pages]}
					<!-- Note to developers in the future: if using server-side, get rid of json and iterate through directories-->
					<details class="collapse collapse-arrow" name="my-accordion-det-1">
						<summary class="collapse-title font-semibold txt-lg">{section}</summary>
						{#each pages as page}
							<a class="card bg-base-100 image-full w-96 h-18 mb-3" href={page.href}>
								<figure>
									<img src={page.image} alt={page.name} class="w-full h-full object-cover" />
								</figure>
								<div class="card-body">
									<h2 class="card-title">{page.name}</h2>
								</div>
							</a>
						{/each}
					</details>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex-none">
		<input id="searchBox" type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
	</div>
</div>
<!-- #endregion -->
<!-- #region Hero content -->
<div class="hero heros min-h-screen" style="background-image:url('{heroImg}');">
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			<p class="mb-5">{catchphrase}</p>
			{#if button !== ''}
				<button class="btn btn-primary" on:click={() => window.open(button)}>Play</button>
			{/if}
		</div>
	</div>
</div>
<!-- #endregion -->
