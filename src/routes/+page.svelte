<script lang="ts">
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import headerImg from '$lib/images/hero-banners/banner5.avif'
import locations from '$lib/images/hero-banners/emergency.avif'
import updates from '$lib/images/hero-banners/updates.avif'
import teamImg from '$lib/images/hero-banners/npcs.avif'
</script>

<Header
	heroImg={headerImg}
	title="Oakridge Nuclear Power Station"
	catchphrase="Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game."
	button="https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"
/>

<div class="m-5 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
	<div class="card card-border bg-base-100">
		<figure>
			<img src={updates} alt="welcome" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Update Version 0.26.6 Beta</h2>
			<h2 class="font-bold text-base">Additions/Changes:</h2>
			<ul class="list-disc">
				<li>
					Added a chat icon above players heads to indicate when you cannot chat with that
					player
				</li>
				<li>SCRAM restricted to Jr. Op unless in an emergency situation</li>
				<li>Additional information added to SCRAM report</li>
				<li>Master mute restricted to Jr. Op+ -Added master mute logging</li>
				<li>Added turbine/bypass valve logging</li>
				<li>Added diesel generator logging</li>
				<li>Log recorder now logs days</li>
			</ul>
			<h2 class="font-bold text-base">Notable Changes:</h2>
			<ul class="list-disc">
				<li>Patched absurdly high efficiency on paycheck</li>
				<li>Renamed incorrect units Updated in new servers</li>
			</ul>
		</div>
	</div>
	<div class="card card-border bg-base-100">
		<figure>
			<img src={teamImg} alt="welcome" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Welcome to the team</h2>
			<p>
				Your first shift starts RIGHT NOW! Though, we're short-staffed at the moment I'm
				sure you and your big brain can figure it out! Be responsible for overseeing a
				multi-billion-dollar operation, one of the planet's most potent and delicate energy
				systems. Every decision matters, from regulating the reactor's behaviour, running
				turbines and their subsidiaries, managing cooling systems, maintaining pumps and
				valves, and responding to unforeseen emergencies and conditions, all while
				maintaining <s>strict</s>
				some safety protocols.
			</p>
		</div>
	</div>
	<div class="card card-border bg-base-100">
		<figure>
			<img src={locations} alt="about" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">About the facility</h2>
			<p>
				Oakridge Nuclear Power Station (ONPS) is a Roblox game developed by Koyot Digital.
				The game places you inside a power plant operating an RBMK-1500. Your goal: keep the
				facility stable, productive, and safe within a semi-realistic framework. You can
				play as an operator responsible for monitoring and managing all critical systems:
				the reactor core, turbines, cooling systems, backup systems, and more. Or play as a
				security officer and handle unauthorized personnel and detain operators causing
				mishaps. Every action matters, and a single mistake can trigger a chain reaction of
				problems. Oakridge aims to balance technical realism with accessibility, delivering
				an immersive experience that remains understandable for all skill levels.
			</p>
		</div>
	</div>
</div>
<Footer />
