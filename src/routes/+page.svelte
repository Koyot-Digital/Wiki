<script>
  import "../app.css";
</script>

<div class="hero min-h-screen" style="background-image: url('src/lib/images/hero-banners/Reactor Panel.png');">
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

<div class = "m-5 grid grid-cols-3 grid-rows-1 gap-4">
    <div class="card card-border bg-base-100">
        <figure><img src="src/lib/images/hero-banners/banner5.png" alt = "welcome"/></figure>
        <div class="card-body">
            <h2 class="card-title">Update Version 0.26.4 Beta</h2>
            <ul>
                <li>- Festive decoration around the map</li>
                <li>- Snowfall and snow particles around the map</li>
                <li>- New music in the lobby and on the radio</li>
                <li>- New Icon</li>
            </ul>
            Merry Christmas! 🎁
        </div>
    </div>
    <div class="card card-border bg-base-100">
        <figure><img src="src/lib/images/locations/turbines/TurbineA.png" alt = "welcome"/></figure>
        <div class="card-body">
            <h2 class="card-title">Welcome to the team</h2>
            <p>
                Your first shift starts tomorrow morning! Now, we're short-staffed at the moment, but I'm sure you and your big brain can figure it out!
                Be responsible for overseeing a multi-billion-dollar operation, one of the planet's most potent and delicate energy systems. Every decision matters, from regulating the reactor's behaviour, running turbines and their subsidiaries, managing cooling systems, maintaining pumps and valves, and responding to unforeseen emergencies and conditions, all while maintaining strict safety protocols.
            </p>
        </div>
    </div>
    <div class="card card-border bg-base-100">
        <figure><img src="src/lib/images/hero-banners/Locations.png" alt = "about"/></figure>
        <div class="card-body">
            <h2 class="card-title">About the facility</h2>
            <p>
                Oakridge Nuclear Power Station (ONPS) is a Roblox game developed by Koyot Digital. The game places you inside a power plant operating an RBMK-1500, Your goal: keep the facility stable, productive, and safe within a semi-realistic framework. You can play as an operator responsible for monitoring and managing all critical systems: the reactor core, turbines, cooling systems, backup systems, and more. Or play as a security officer and handle unauthorized personnel and detain operators causing mishaps. Every action matters, and a single mistake can trigger a chain reaction of problems. Oakridge aims to balance technical realism with accessibility, delivering an immersive experience that remains understandable for all skill levels.
            </p>
        </div>
    </div>
</div>
