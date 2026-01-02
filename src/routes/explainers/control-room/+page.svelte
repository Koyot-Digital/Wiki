<script>
	import "../../../app.css"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"
</script>

<Header
	heroImg="/src/lib/images/hero-banners/control-room.avif"
	title="Control Room"
	catchphrase='"REACTOR EXPLOTET!" - Visitor, probably'
/>

<div class="join join-vertical bg-base-100 align-">
	<div class="collapse collapse-arrow join-item border-base-300 border">
		<input type="radio" name="my-accordion-4" />
		<div class="collapse-title font-semibold">Deaerators</div>
		<div class="collapse-content text-sm">
			The deaerator's true purpose is to remove impurities from the feedwater, using
			steam in order to heat the water up. This power plant features 2 deaerators,
			and similarly to the condenser coolant, has 2 loops (loop A and loop B),
			receiving steam from their respective steam drums, and water from the
			condensers.
		</div>
	</div>
	<div class="collapse collapse-arrow join-item border-base-300 border">
		<input type="radio" name="my-accordion-4" />
		<div class="collapse-title font-semibold">
			I forgot my password. What should I do?
		</div>
		<div class="collapse-content text-sm">
			Click on "Forgot Password" on the login page and follow the instructions sent
			to your email.
		</div>
	</div>
	<div class="collapse collapse-arrow join-item border-base-300 border">
		<input type="radio" name="my-accordion-4" />
		<div class="collapse-title font-semibold">
			How do I update my profile information?
		</div>
		<div class="collapse-content text-sm">
			Go to "My Account" settings and select "Edit Profile" to make changes.
		</div>
	</div>
</div>

<Footer />
