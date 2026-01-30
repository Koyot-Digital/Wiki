<script>
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import hero from '$lib/images/hero-banners/credits.avif'
// import creditsData from '$lib/data/creditsData.json' with { type: 'json' };
let developerData = {
	developers: [
		{
			DisplayName: 'Roscy',
			Username: 'Ezy_gaming888',
			robloxID: 1234567890,
			Tier: 'LD',
		},
		{
			DisplayName: 'Gottie',
			Username: 'GottyXx2',
			robloxID: 167084004,
			Tier: 'SD',
		},
		{
			DisplayName: 'Anticitizen One',
			Username: 'TrashyLasers',
			robloxID: 1234567890,
			Tier: 'D',
		},
		{
			DisplayName: 'chrxs_dev',
			Username: 'chrxs_dev',
			robloxID: 1234567890,
			Tier: 'D',
		},
	],
}
let testerData = {
	testers: [
		{
			DisplayName: 'Stefan',
			Username: 'inami_rin',
			robloxID: 132749423,
			Tier: 'T',
		},
		{
			DisplayName: 'Eugene_Fission',
			Username: 'Slonokot',
			robloxID: 337362307,
			Tier: 'T',
		},
		{
			DisplayName: 'NervA_Mechanica',
			Username: 'WoodynBuzz',
			robloxID: 26130438,
			Tier: 'T',
		},
		{
			DisplayName: 'Shozii',
			Username: 'warface1234455',
			robloxID: 1234567890,
			Tier: 'T',
		},
	],
}
let moderatorData = {
	moderators: [
		{
			DisplayName: 'NEODIS',
			Username: '_neodis',
			robloxID: 1234567890,
			Tier: 'CRM',
		},
		{
			DisplayName: 'Astr0',
			Username: 'astroneero',
			robloxID: 536560884,
			Tier: 'M',
		},
		{
			DisplayName: 'Ayron',
			Username: 'virohybrid',
			robloxID: 171093439,
			Tier: 'M',
		},
		{
			DisplayName: 'Gladi',
			Username: 'gladi_._',
			robloxID: 566191026,
			Tier: 'M',
		},
		{
			DisplayName: 'NateTheGreat',
			Username: 'NateTheGreat',
			robloxID: 1234567890,
			Tier: 'M',
		},
	],
}
let contributors = {
	contributors: [
		{
			DisplayName: 'Bufflehead',
			Username: 'Gargleblaster',
			robloxID: 8311884384,
			Tier: 'C',
		},
		{
			DisplayName: 'ParrotMan',
			Username: 'itsthegrumpyparrotman',
			robloxID: 4038866427,
			Tier: 'C',
		},
		{
			DisplayName: 'OneDuck',
			Username: 'DuckQuack001',
			robloxID: 553450691,
			Tier: 'C',
		},
		{
			DisplayName: 'REDACTED',
			Username: 'REDACTED',
			robloxID: 967748232,
			Tier: 'C',
		},
	],
}
</script>

<Header heroImg={hero} title="Credits" catchphrase="Who designed this reactor again?" />
<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6 mr-2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
		></path>
	</svg>
	<h1>Developers</h1>
	<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
		{#each developerData.developers as data}
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
<div class="bg-base-100 flex flex-wrap justify-center p-7">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6 mr-2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
		></path>
	</svg>

	<h1>Testers</h1>
	<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
		{#each testerData.testers as data}
			<div class="card bg-base-100 w-1/5 shadow-sm border-2 border-base-300 m-4">
				<figure>
					<img src="/src/lib/images/capybara.png" alt={data.DisplayName} />
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
<div class="bg-base-100 flex flex-wrap justify-center p-7">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6 mr-2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
		></path>
	</svg>

	<h1>Moderators</h1>
	<div class="tab-content bg-base-100 flex flex-wrap justify-center p-7">
		{#each moderatorData.moderators as data}
			<div class="card bg-base-100 w-1/5 shadow-sm border-2 border-base-300 m-4">
				<figure>
					<img src="/src/lib/images/capybara.png" alt={data.DisplayName} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{data.DisplayName}</h2>
					{#if data.Tier === 'M'}
						<p>Moderator</p>
					{:else if data.Tier === 'CRM'}
						<p>Community Relations Moderator</p>
					{:else}
						<p class="text-error text-lg">PARSING ERROR!!!</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
<Footer />
