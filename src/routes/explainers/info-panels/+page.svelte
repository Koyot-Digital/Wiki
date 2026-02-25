<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import Indicator from '$lib/components/ControlRoomIndicator.svelte'
import annunciatorData from '$lib/data/annunciatorData.json' with { type: 'json' }
function getColor() {
	if (color === 'white') {
		return 'bg-neutral-50'
	} else if (color === 'yellow') {
		return 'bg-yellow-300'
	} else if (color === 'red') {
		return 'bg-red-500'
	}
	return 'bg-neutral-200' // fallback color
}

let dialogId = `modal-${name?.replace(/\s+/g, '-') || Math.random().toString(36).slice(2)}`

function openModal() {
	const dialog = document.getElementById(dialogId) as HTMLDialogElement | null
	dialog?.showModal()
}
</script>

<Header
	heroImg="/images/hero-banners/info-panels.avif"
	title="Information Panels"
	catchphrase="Fun Fact: Reactor Power High is kinda bad ngl"
/>

<div class="mx-auto my-4 max-w-[95vw]">
	<div class="flex flex-wrap gap-4">
		{#each annunciatorData as data}d
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<div class="card card-border bg-base-100 w-full">
					<div class="card-body">
						<h2 class="card-title">{data.name}</h2>
						{#each data.annunciators as lightData}
							<button
								class="btn {getColor()} w-48 h-20 font-info-panels"
								on:click={openModal}
							>
								{name}
							</button>
							<dialog id={dialogId} class="modal">
								<div class="modal-box">
									<h3 class="text-lg font-bold">{name}</h3>
									<p class="py-4">{description}</p>
									<div class="modal-action">
										<form method="dialog">
											<button class="btn">Close</button>
										</form>
									</div>
								</div>
							</dialog>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<Footer />
