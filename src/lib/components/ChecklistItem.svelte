<script lang="ts">
	export let item: string;
	export let action: string;
	export let info: string = '';
	export let warning: string = '';
	export let actionColor: string = '0'; // 0 null/Default, 1 Red, 2 YELLow/Orange, 3 Green, 4 Blue, everything else is defaulted
	export let indent: boolean = false

	function getColor(c: string) {
		if (c === '1') {
			return 'text-red-500';
		} else if (c === '2') {
			return 'text-yellow-300';
		} else if (c === '3') {
			return 'text-green-500';
		} else if (c === '4') {
			return 'text-sky-400';
		} else {
			return '';
		}
	}

	function toIndent(i: boolean){
		if (i === true){
			return 'ml-7'
		} else {
			return ''
		}
	}

	import { onMount } from 'svelte';
	let width = 0;
	onMount(() => {
		const update = () => (width = window.innerWidth);
		update();

		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<div class="flex items-center gap-2 mt-3 {getColor(actionColor)} {toIndent(indent)}">
	<input type="checkbox" class="checkbox checkbox-sm" />

	<span class="whitespace-nowrap">{item}</span>

	{#if info}
		<!-- Make this a flex container to center the SVG -->
		<span class="flex items-center">
			<div class="tooltip" data-tip={info}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
					></path>
				</svg>
			</div>
		</span>
	{/if}
	{#if warning}
		<!--  -->
		<span class="flex items-center">
			<div class="tooltip" data-tip={warning}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
				</svg>
			</div>
		</span>
	{/if}
	<span class="flex-1 overflow-hidden text-base-content/60">
		<span class="whitespace-nowrap leading-none">
			{#each Array(Math.floor(width / 20)) as _}
				· · ·&nbsp;
			{/each}
		</span>
	</span>

	<span class="whitespace-nowrap">{action}</span>
</div>
