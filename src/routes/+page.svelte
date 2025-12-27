<script>
  import "../app.css";
  import hero from "$lib/images/hero-images/Reactor Panel.png"
</script>

<div class="hero min-h-screen" style="background-image: url({hero});">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome to Oakridge</h1>
      <p class="mb-5">
        Manage one of the most complex nuclear facilities ever built.
      </p>
      <button class="btn btn-primary" on:click = {() => (window.open("https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"))}>Play</button>
    </div>
  </div>
</div>