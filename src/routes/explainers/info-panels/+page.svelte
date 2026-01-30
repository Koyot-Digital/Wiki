<script>
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import Indicator from '$lib/components/ControlRoomIndicator.svelte'
const coolantPumpTripDescription =
	'This alert indicates that the coolant pumps for either cooling tower have tripped. \nTypically, you would only see this occur during a power loss.\nTo regain power, call engineering and tell them to reset the breakers.'
</script>

<Header
	heroImg="/src/lib/images/hero-banners/info-panels.avif"
	title="Information Panels"
	catchphrase="Fun Fact: Radiation Level 8+ is kinda bad ngl"
/>

<div class="m-5">
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">
			Makeup Water - Diesel Generator - Radiation Monitoring Panel
		</div>
		<div class="collapse-content text-sm">
			<div class="grid grid-cols-4 grid-rows-3">
				<Indicator
					name="Coolant Pump A1 Trip"
					description={coolantPumpTripDescription}
					color="red"
				/>
				<Indicator
					name="Coolant Pump A2 Trip"
					description={coolantPumpTripDescription}
					color="red"
				/>
			</div>
		</div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Plant Circuitry Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Condensate - Service Water System Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Water/Pressure Relief Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Reactor Conditions Panel Left</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Reactor Conditions Panel Center & Right</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Recirculation - Core Water/Temperature Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Feedwater - Core Water Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Deaerator Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Turbine A Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Turbine B Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
	<div class="collapse collapse-arrow bg-base-100 border border-base-300">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title font-semibold">Condenser Coolant Panel</div>
		<div class="collapse-content text-sm"></div>
	</div>
</div>

<Footer />
