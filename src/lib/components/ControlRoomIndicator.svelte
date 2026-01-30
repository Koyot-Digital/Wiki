<script lang="ts">
export let name: string
export let description: string
export let color: string

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

<!-- Open the modal using openModal() method -->
<button class="btn {getColor()} w-48 h-20 font-info-panels" on:click={openModal}>{name}</button>
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
