<script lang="ts">
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import PageData from '$lib/data/pageData.json' with { type: 'json' }
import { onMount } from 'svelte'
const headerImg = '/images/hero-banners/banner5.avif'
const locations = '/images/hero-banners/emergency.avif'
const updates = '/images/hero-banners/updates.avif'
const teamImg = '/images/hero-banners/npcs.avif'
var displayWidth = 0
onMount(() => {
	displayWidth = window.innerWidth
})
</script>

<Header
	heroImg={headerImg}
	title="Oakridge Nuclear Power Station"
	catchphrase="Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game."
	button="https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"
/>
<div class="grid grid-cols-2 gap-4 mx-4">
	<div class="m-4 grid grid-cols-1 grid-rows-1 gap-4 mx-auto">
		<div class="card card-border bg-base-100 h-fit">
			<figure>
				<img src={updates} alt="welcome" class="card-img" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Update Version 0.26.6 Beta</h2>
				<h2 class="font-bold text-base">Additions/Changes:</h2>
				<!-- Use ml-5 when indenting lists please.-->
				<ul class="list-disc ml-5">
					<li>
						Added a chat icon above players heads to indicate when you cannot chat with
						that player
					</li>
					<li>SCRAM restricted to Jr. Op unless in an emergency situation</li>
					<li>Additional information added to SCRAM report</li>
					<li>Master mute restricted to Jr. Op+ -Added master mute logging</li>
					<li>Added turbine/bypass valve logging</li>
					<li>Added diesel generator logging</li>
					<li>Log recorder now logs days</li>
				</ul>
				<h2 class="font-bold text-base">Notable Changes:</h2>
				<ul class="list-disc ml-5">
					<li>Patched absurdly high efficiency on paycheck</li>
					<li>Renamed incorrect units Updated in new servers</li>
				</ul>
			</div>
		</div>
		<div class="card card-border bg-base-100 h-fit">
			<figure>
				<img src={teamImg} alt="welcome" class="card-img" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Welcome to the team</h2>
				<p>
					Your first shift starts RIGHT NOW! Though, we're short-staffed at the moment I'm
					sure you and your big brain can figure it out! Be responsible for overseeing a
					multi-billion-dollar operation, one of the planet's most potent and delicate
					energy systems. Every decision matters, from regulating the reactor's behaviour,
					running turbines and their subsidiaries, managing cooling systems, maintaining
					pumps and valves, and responding to unforeseen emergencies and conditions, all
					while maintaining <s>strict</s>
					some safety protocols.
				</p>
			</div>
		</div>
		<div class="card card-border bg-base-100 h-fit">
			<figure>
				<img src={locations} alt="about" class="card-img" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">About the facility</h2>
				<p>
					<abbr title="Oakridge Nuclear Power Station">ONPS</abbr>
					is a Roblox game developed by Koyot Digital. The game places you inside a power plant
					operating an
					<abbr
						title="Russian: 'Реактор большой мощности канальный, РБМК. English: high-power channel-type reactor, RBMK"
					>
						RBMK
					</abbr>
					-1500. Your goal: keep the facility stable, productive, and safe within a semi-realistic
					framework. You can play as an operator responsible for monitoring and managing all
					critical systems: the reactor core, turbines, cooling systems, backup systems, and
					more. Or play as a security officer and handle unauthorized personnel and detain operators
					causing mishaps. Every action matters, and a single mistake can trigger a chain reaction
					of problems. Oakridge aims to balance technical realism with accessibility, delivering
					an immersive experience that remains understandable for all skill levels.
				</p>
			</div>
		</div>
	</div>
	<div class="m-4 p-4 mx-auto border-4 border-base-200 w-full h-fit rounded-md">
		<h2 class="text-2xl font-bold">Guides</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-20 bg-base-200 gap-4 rounded-md my-4"
		>
			{#each PageData.Guides as page}
				<div class="h-fit w-fit p-2 px-4 bg-blue-500 align-middle rounded-full">
					<a href={page.href}>{page.name}</a>
				</div>
			{/each}
		</div>
		<h2 class="text-2xl font-bold">Explainers</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-20 bg-base-200 gap-4 rounded-md my-4"
		>
			{#each PageData.Explainers as page}
				<div class="h-fit w-fit p-2 px-4 bg-emerald-500 align-middle rounded-full">
					<a href={page.href}>{page.name}</a>
				</div>
			{/each}
		</div>
		<h2 class="text-2xl font-bold">Miscellaneous</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-fit p-4 gap-4 rounded-md bg-base-200 my-4"
		>
			{#each PageData.Misc as page}
				<div class="h-fit w-fit p-2 px-4 bg-fuchsia-500 align-middle rounded-full">
					<a href={page.href}>{page.name}</a>
				</div>
			{/each}
		</div>
	</div>
</div>
<Footer />

<style>
.card-img {
	background-position: center;
	object-fit: cover;
	background-size: cover;
	height: 300px;
	width: 100%;
}
.nav-chip {
	@apply: rounded-full;
}
</style>
