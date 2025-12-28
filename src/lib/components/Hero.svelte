<script lang="ts">
    export let heroImg: string
    export let playButton: boolean
    export let title: string
    export let catchphrase: string
</script>
<style>
    .heros{
        border-bottom: solid 2px grey;
    }
</style>
<div class="hero heros min-h-screen" style="background-image:{heroImg};">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">{title}</h1>
      <p class="mb-5">{catchphrase}</p>
      {#if playButton}
      <button class="btn btn-primary" on:click = {() => (window.open("https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"))}>Play</button>
      {/if}
    </div>
  </div>
</div>