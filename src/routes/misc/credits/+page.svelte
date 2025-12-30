<script>
	import '../../../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import hero from '$lib/images/hero-banners/credits.avif';
	import creditsData from '$lib/data/creditsData.json' with { type: 'json' };
</script>

<Header heroImg={hero} title="Credits" catchphrase="Who designed this reactor again?" />
<!-- name of each tab group should be unique -->
<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
		/>
	</svg>
	Developers
	<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
		{#each creditsData.developers as data}
			<div class="card bg-base-100 w-1/5 shadow-sm border-2 border-base-300 m-4">
				<figure>
					<img
						src="/src/lib/images/people-and-npcs/devs/{data.Username}.webp"
						alt={data.DisplayName}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{data.DisplayName}</h2>
					{#if data.Tier === 'LD'}
						<p>Lead Developer</p>
					{:else if data.Tier === 'SD'}
						<p>Senior Developer</p>
					{:else if data.Tier === 'D'}
						<p>Junior Developer</p>
					{:else}
						<p class="text-error text-lg">PARSING ERROR!!!</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
		/>
	</svg>
	Testers
	<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
		{#each creditsData.testers as data}
			<div class="card bg-base-100 w-1/5 shadow-sm border-2 border-base-300 m-4">
				<figure>
					<img
						src="/src/lib/images/capybara.png"
						alt={data.DisplayName}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{data.DisplayName}</h2>
					{#if data.Tier === 'T'}
						<p>Tester (AKA: Who we blame)</p>
					{:else}
						<p class="text-error text-lg">PARSING ERROR!!!</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
<Footer />
