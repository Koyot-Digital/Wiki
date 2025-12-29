<script lang="ts">
    export let heroImg: string
    export let title: string
    export let catchphrase: string
    export let button: string = ""
</script>
<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" aria-label="Main Menu">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</button>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">ONPS Wiki</a>
	</div>
	<div class="flex-none">
		<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
	</div>
</div>
<div class="hero heros min-h-screen" style="background-image:url('{heroImg}');">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">{title}</h1>
      <p class="mb-5">{catchphrase}</p>
      {#if button !== ""}
        <button class="btn btn-primary" on:click = {() => (window.open("{button}"))}>Play</button>
      {/if}
    </div>
  </div>
</div>
