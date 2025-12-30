<script lang="ts">
	export let item: string;
	export let action: string;
	export let warning: string = "";
	export let actionColor: string = "0"; // 0 null/Default, 1 Red, 2 YELLow/Orange, 3 Green, 4 Blue, everything else is defaulted
	function getColor(c: string){
		if(c === "1") {
			return "text-red-500";
		}
		else if(c === "2") {
			return "text-yellow-300";
		}
		else if(c === "3"){
			return "text-green-500";
		}
		else if(c === "4") {
			return "text-sky-400";
		} else {
			return ""
		}
	}


	import { onMount } from 'svelte';
	let width = 0
	onMount(() => {
		const update = () => width = window.innerWidth;
		update();

		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<div class="flex items-center gap-2 mt-3 {getColor(actionColor)}">
  <input type="checkbox" class="checkbox checkbox-sm" />

  <span class="whitespace-nowrap">{item}</span>

  {#if warning}
    <!-- Make this a flex container to center the SVG -->
    <span class="flex items-center">
      <div class="tooltip" data-tip="{warning}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
    </span>
  {/if}

  <span class="flex-1 overflow-hidden text-base-content/60">
    <span class="whitespace-nowrap leading-none">
      {#each Array(Math.floor(width / 20)) as _}
        ·&nbsp;
      {/each}
    </span>
  </span>

  <span class="whitespace-nowrap">{action}</span>
</div>
