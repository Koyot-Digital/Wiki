<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
const hero = '/images/hero-banners/badges.avif'
import badgeData from '$lib/data/badgesData.json' with { type: 'json' }
</script>

<Header heroImg={hero} title="Badges" catchphrase="Gotta get them all!" />

<div class="mx-auto my-4 max-w-[95vw]">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
		{#each badgeData as data}
			<div class="card card-border bg-base-100 w-full">
				<div class="hover-3d">
					<figure class="w-fit rounded-full m-4 mx-auto">
						<img src={data.image} alt={data.name} width="175" height="175" />
					</figure>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="card-body">
					<h2 class="card-title">{data.name}</h2>
					<p class="text-sm">{data.description}</p>
					{#if data.unobtainable == true}
						<div class="bg-warning text-warning-content rounded-full max-w-fit">
							<p class="m-2"><b>Badge Is Unobtainable</b></p>
						</div>
					{/if}
					<div class="divider my-2"></div>
					<details class="collapse collapse-arrow bg-base-200">
						<summary class="collapse-title">How to Get</summary>
						<div class="collapse-content text-sm">
							{#if data.guideType == 'num'}
								<ol class="list-decimal list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ol>
							{/if}
							{#if data.guideType == 'bullet'}
								<ul class="list-disc list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</details>
				</div>
			</div>
		{/each}
	</div>
</div>
<Footer />
