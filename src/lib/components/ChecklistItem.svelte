<script lang="ts">
	export let item: string
	export let action: string
	export let info: string = ''
	export let warning: string = ''
	export let actionColor: string = '0' // 0 null/Default, 1 Red, 2 YELLow/Orange, 3 Green, 4 Blue, everything else is defaulted
	export let indent: boolean = false
	let one = ['text-red-500', 'stroke-red-500']
	let two = ['text-yellow-500', 'stroke-yellow-500']
	let three = ['text-green-500', 'stroke-green-500']
	let four = ['text-sky-400', 'stroke-sky-400']
	function getColor(c: string, icon: boolean = false) {
		if (c === '1') {
			if (icon) {
				return one[1]
			} else {
				return one[0]
			}
		} else if (c === '2') {
			if (icon) {
				return two[1]
			} else {
				return two[0]
			}
		} else if (c === '3') {
			if (icon) {
				return three[1]
			} else {
				return three[0]
			}
		} else if (c === '4') {
			if (icon) {
				return four[1]
			} else {
				return four[0]
			}
		} else if (warning) {
			if (icon) {
				return two[1]
			} else {
				return two[0]
			}
		} else if (info) {
			if (icon) {
				return four[1]
			} else {
				return four[0]
			}
		} else {
			return null
		}
	}

	function toIndent(i: boolean) {
		if (i === true) {
			return 'ml-7'
		} else {
			return ''
		}
	}

	import { onMount } from 'svelte'
	import { get } from 'svelte/store'
	let width = 0
	onMount(() => {
		const update = () => (width = window.innerWidth)
		update()

		window.addEventListener('resize', update)
		return () => window.removeEventListener('resize', update)
	})
</script>

<div class="flex items-center gap-2 mt-3 {toIndent(indent)}">
	<input type="checkbox" class="checkbox checkbox-sm" />

	<span class="whitespace-nowrap">{item}</span>

	{#if info}
		<!-- Make this a flex container to center the SVG -->
		<span class="flex items-center">
			<div class="tooltip" data-tip={info}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-5 {getColor('4', true)}">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
				</svg>
			</div>
		</span>
	{/if}

	{#if warning}
		<!--  -->
		<span class="flex items-center">
			<div class="tooltip" data-tip={warning}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-5 {getColor('2', true)}">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
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

	<span class="whitespace-nowrap {getColor(actionColor, false)}">{action}</span>
</div>
