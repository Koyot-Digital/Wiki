<main>
    <header class="hero">
    <div class="hero-overlay"></div>
    <img id="hero-img" src={heroImg} alt="Oakridge Banner" />
    <div class="hero-content">
      <h1>Oakridge Nuclear Power Plant</h1>
      <p>Manage one of the most complex nuclear facilities ever built. Your first shift starts <a href="https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station-V0-2-4-BETA"><strong>NOW</strong></a></p>
    </div>
  </header>
  <div class="container">
    <h2>News & Announcements</h2>
    <NavGrid />

    <section class="news-section">
      <h2>[Version 0.2.6.4 BETA]</h2>
      <h3>[ 🎁 The Christmas Event is now LIVE! ]</h3>
      <p>A cold front has crossed over Oakridge Nuclear Power Station, bringing extra snowfall this Christmas season! Stay warm and enjoy unlimited complimentary coffee in the break room!</p>
      <p>Now through Christmas Day, Sold power will be doubled!!! ✨ </p>
      <h3>✏️ Additions/Changes:</h3>
      <ul>
        <li>-Sold power markup of 100%! (Limited time)</li>
        <li>-Festive decoration around the map</li>
        <li>-New music in the lobby and on the radio</li>
        <li>-Festive decoration around the map</li>
        <li>-New Icon</li>
      </ul>
    </section>
    <p style="text-align: center; color: #999">Announcement Made: <span class="date">16/12/2025</span>, 21:56 PM (GMT)</p>
    <section id="game-description">
      <h2>Welcome to the Team</h2>
      <p>Welcome to the team, your first shift starts tomorrow morning! We're short-staffed, but I'm sure you and your big brain can figure it out!</p>
      <p>Be responsible for overseeing a multi-billion-dollar operation, one of the planet's most potent and delicate energy systems. Every decision matters, from regulating the reactor's behavior, running turbines, managing cooling systems, maintaining pumps and valves, to responding to emergencies, all while maintaining strict safety protocols.</p>
      <p>At Koyot Digital, we simulate a hypothetical Western RBMK-1500 reactor. The game strikes a balance between realism and accessibility. Meet demand, and enjoy your nuclear operator journey!</p>
      <p><em>We hope to see you in the game very soon!</em></p>
    </section>

    <section>
      <h2>About Oakridge</h2>
      <p>Oakridge Nuclear Power Station (ONPS) is a Roblox game developed by Koyot Digital. The game places you inside a power plant operating an RBMK-1500, Your goal: keep the facility stable, productive, and safe within a semi-realistic framework. You can play as an operator responsible for monitoring and managing all critical systems: the reactor core, turbines, cooling systems, backup systems, and more. Or play as a security officer and handle unauthorized personnel and detain operators causing mishaps. Every action matters, and a single mistake can trigger a chain reaction of problems. Oakridge aims to balance technical realism with accessibility, delivering an immersive experience that remains understandable for all skill levels.</p>
    </section>
  </div>
</main>
<script>
  import NavGrid from '$lib/components/NavGrid.svelte';
  import heroImg from '$lib/assets/images/heroBanners/home.webp';
</script>
