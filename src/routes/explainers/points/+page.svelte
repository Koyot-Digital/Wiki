<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
const hero = '/images/hero-banners/points.avif'
</script>

<Header
	heroImg={hero}
	title="Ranks and Points"
	catchphrase='"You dont know about the ranks around here? What are they teaching the new trainees? We work for a nuclear powerplant for the NRCs sake!" - Supervisor.'
/>

<div class="m-5">
	<div class="collapse bg-base-100 mb-4">
		<input type="radio" name="rank-nav" checked />
		<div class="collapse-title font-bold text-lg">Jump to Rank</div>
		<div class="collapse-content">
			<div class="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
				<a href="#intro" class="link">Introduction</a>
				<a href="#security-header" class="link">Security</a>
				<a href="#operator-header" class="link">Operators</a>
			</div>
		</div>
	</div>

	<div class="bg-base-100 p-6 rounded-lg mb-6">
		<h2 id="intro" class="text-2xl font-bold mb-4">Introduction</h2>
		<p class="text-base">
			The Ranks and Points system in this game is fairly simple. To rank up you just need to
			keep the reactor and the turbines connected to the grid and meet demand. At the end of
			your shift (At 00:00) you will earn a paycheck. Each time you get your paycheck your
			'Money' turns into points. In other words your main priority is to sell as much power as
			possible.
		</p>
	</div>

	<!-- Security Section -->
	<div class="bg-base-100 p-6 rounded-lg mb-6">
		<h2 id="security-header" class="text-2xl font-bold mb-2">Security Ranks</h2>
		<div class="alert alert-info mb-4">
			<span>
				If you are security you have to wait until you get <strong>25000 points</strong>
				to get handcuffs, and
				<strong>75000 points</strong>
				for the baton
			</span>
		</div>

		<div class="space-y-6">
			<!-- Inductee -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Inductee</h3>
				<p class="text-error font-semibold">Points required: 0 - 4,999</p>
				<p class="text-success font-semibold">Bonus: 0%</p>
				<p class="italic mt-2">"Don't ask me anything, this is my first day" - Inductee</p>
			</div>

			<!-- Cadet -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Cadet</h3>
				<p class="text-error font-semibold">Points required: 5,000 - 74,999</p>
				<p class="text-success font-semibold">Bonus: 0%</p>
				<p class="italic mt-2">
					"Uhh I don't think visitors are allowed in the control room- and you hit the
					A3-5..."
				</p>
			</div>

			<!-- Officer -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Officer</h3>
				<p class="text-error font-semibold">Points required: 75,000 - 499,999</p>
				<p class="text-success font-semibold">Bonus: 10%</p>
				<p class="italic mt-2">"Time to put the director in the silly room!" - Officer</p>
			</div>

			<!-- Sergeant -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Sergeant</h3>
				<p class="text-error font-semibold">Points required: 500,000 - 1,249,999</p>
				<p class="text-success font-semibold">Bonus: 35%</p>
				<p class="italic mt-2">"The dang Inspector is always too lazy!" - Sergeant</p>
			</div>

			<!-- Inspector -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Inspector</h3>
				<p class="text-error font-semibold">Points required: 1,250,000 - 2,499,000</p>
				<p class="text-success font-semibold">Bonus: 70%</p>
				<p class="italic mt-2">"WHAT DID THE SARGENT SAY AGAIN-" - Inspector</p>
			</div>

			<!-- Superintendent -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Superintendent</h3>
				<p class="text-error font-semibold">Points required: 2,500,000 - 4,999,999</p>
				<p class="text-success font-semibold">Bonus: 115%</p>
				<p class="italic mt-2">
					"I AM TOO BUSY FOR THIS- I GOT A 5FT TALL STACK OF PAPERWORK BECAUSE OF THE DANG
					DIRECTOR!" - Superintendent
				</p>
			</div>

			<!-- Security Director -->
			<div class="border-l-4 border-error p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Security Director</h3>
				<p class="text-error font-semibold">Points required: 5,000,000+</p>
				<p class="text-success font-semibold">Bonus: 170%</p>
				<p class="italic mt-2">
					"wha- im too busy right now to do this interview! I got cadets to reprimand!" -
					Security Director
				</p>
			</div>
		</div>
	</div>

	<!-- Operator Section -->
	<div class="bg-base-100 p-6 rounded-lg">
		<h2 id="operator-header" class="text-2xl font-bold mb-6">Operator Ranks</h2>

		<div class="space-y-6">
			<!-- Visitor -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Visitor</h3>
				<p class="text-error font-semibold">Points required: 0 - 9,999</p>
				<p class="text-success font-semibold">Bonus: 0%</p>
				<p class="text-info font-semibold">VK Votes: 1</p>
				<div class="mt-3">
					<p class="font-bold text-sm">Limitations:</p>
					<ul class="list-disc list-inside">
						<li>Cannot open lead-lined doors</li>
						<li>Cannot SCRAM the reactor unless in an emergency</li>
						<li>Cannot Master Mute the reactor.</li>
					</ul>
				</div>
				<p class="mt-3">
					Welcome! You're new around here! You can ask for help or just wait for a while
					and let everyone else do the work for you. But that's no fun! You want to press
					buttons and stuff and produce unlimited energy for the people! So it is
					recommended you check out the guide! We're glad to have you on board.
				</p>
			</div>

			<!-- Trainee -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Trainee</h3>
				<p class="text-error font-semibold">Points required: 10,000 - 74,999</p>
				<p class="text-success font-semibold">Bonus: 0%</p>
				<p class="text-info font-semibold">VK Votes: 2</p>
				<div class="mt-3">
					<p class="font-bold text-sm">Limitations:</p>
					<ul class="list-disc list-inside">
						<li>Cannot SCRAM the reactor unless in an emergency</li>
						<li>Cannot Master Mute the reactor.</li>
					</ul>
				</div>
				<p class="mt-3">
					You've got the hang of this facility. Usually more reliable than your visitors,
					Trainees can assist around the nuclear powerplant! They can assist Jr. Operators
					and Sr. Operators on some menial tasks. Yet they usually aren't skilled enough
					to maintain a nuclear reactor solo.
				</p>
			</div>

			<!-- Junior Operator -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Junior Operator</h3>
				<p class="text-error font-semibold">Points required: 75,000 - 499,999</p>
				<p class="text-success font-semibold">Bonus: 10%</p>
				<p class="text-info font-semibold">VK Votes: 4</p>
				<p class="mt-3">
					Skilled personnel. Can handle most of the emergencies with ease. Yet they can't
					remain calm when a visitor presses 'SCRAM' and now they need to re-do the whole
					reactor start up sequence... for the 3rd time today.
				</p>
			</div>

			<!-- Senior Operator -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Senior Operator</h3>
				<p class="text-error font-semibold">Points required: 500,000 - 1,249,999</p>
				<p class="text-success font-semibold">Bonus: 35%</p>
				<p class="text-info font-semibold">VK Votes: 5</p>
				<p class="mt-3">
					Considered 'One of the best.' Minimal errors, deal with emergencies, keep the
					plant running at 100% efficiency. There won't be anyone else like them who can
					handle the powerplant as good as them. You can rely onto them for anything and
					everything.
				</p>
				<p class="italic text-warning mt-2">Can get access to a Sr. Operator bypass key</p>
			</div>

			<!-- Supervisor -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Supervisor</h3>
				<p class="text-error font-semibold">Points required: 1,250,000 - 2,499,999</p>
				<p class="text-success font-semibold">Bonus: 70%</p>
				<p class="text-info font-semibold">VK Votes: 6</p>
				<p class="mt-3">
					You've reached it! The Supervisor title! You should be proud of yourself. That
					is no small feat! You can finally oversee those who are below you! Just be
					prepared for chaos and prepare to discipline trainees. Good luck!
				</p>
				<p class="italic text-warning mt-2">Can get access to a Sr. Operator bypass key</p>
			</div>

			<!-- Shift Manager -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Shift Manager</h3>
				<p class="text-error font-semibold">Points required: 2,500,000 - 4,999,999</p>
				<p class="text-success font-semibold">Bonus: 115%</p>
				<p class="text-info font-semibold">VK Votes: 7</p>
				<p class="mt-3">
					At this point all nuclear reactors are too easy for you. Emergencies? You've
					gotten used to them. Critical failures? Can fix them in your sleep. You probably
					aren't even in the plant at all. Probably at some other place managing shifts...
					Right?
				</p>
				<p class="italic text-warning mt-2">Can get access to a Sr. Operator bypass key</p>
			</div>

			<!-- Plant Director -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">Plant Director</h3>
				<p class="text-error font-semibold">Points required: 5,000,000 - 9,999,999</p>
				<p class="text-success font-semibold">Bonus: 170%</p>
				<p class="text-info font-semibold">VK Votes: 8</p>
				<p class="mt-3">
					You've made it. The very top. Excellent. You know the place inside out. Can
					handle emergencies with no effort at all. You don't even feel panic when
					everything goes to hell. Because you know with you here. Everything will be
					fine. No matter how dire the situation becomes.
				</p>
				<p class="italic text-warning mt-2">Can get access to a Sr. Operator bypass key</p>
				<p class="italic text-warning">Can get access to Security rooms and items.</p>
			</div>

			<!-- NRC Inspector -->
			<div class="border-l-4 border-info p-4 bg-base-200">
				<h3 class="text-xl font-bold mb-2">NRC Inspector</h3>
				<p class="text-error font-semibold">Points required: 10,000,000+</p>
				<p class="text-success font-semibold">Bonus: 210%</p>
				<p class="text-info font-semibold">VK Votes: 10</p>
				<p class="mt-3">
					You've ascended beyond plant operations - you no longer run reactors, you judge
					them. The NRC Inspector is the final boss of nuclear safety. Operators fear you,
					supervisors panic when you arrive, and even Plant Directors suddenly remember a <em
					>
						"meeting"
					</em>
					elsewhere. With your clipboard of doom, you don't just keep the plant running - you
					ensure OSHA and all relevant regulatory commissions and agencies know if someone forgets
					to file NRC Form 390A.
				</p>
				<p class="italic text-warning mt-2">
					Can get access to a Sr. Operator bypass key ... but you'd never use them. You're
					here to make sure no one else abuses them.
				</p>
				<p class="italic text-warning">Can get access to Security rooms and items.</p>
			</div>
		</div>
	</div>
</div>

<Footer />
