<script>
	import '../../../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import TickBox from '$lib/components/ChecklistItem.svelte'
</script>

<Header
	heroImg="/src/lib/images/hero-banners/emergency.avif"
	title="Emergency Situations & Procedures"
	catchphrase="'I think that was the wrong button' - NRC Inspector"
/>

<div class="tabs tabs-lift m-5">
	<input
		type="radio"
		name="my_tabs_5"
		class="tab"
		aria-label="Abnormal RPV Pressure"
		checked
	/>
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>The pressure inside the Reactor Pressure Vessel is above safe operating
			limits.</i
		>
		<br /><br />
		<i>If Alert RPV Pressure High</i>
		<TickBox item="Relief Valves" action="Enable as Required" indent />
		<TickBox item="Control Rods" action="Insert as Required" indent />
		<TickBox
			item="Turbine A & B Bypass Valves"
			action="Increase as Required"
			indent
		/>
		<TickBox item="RPV Pressure" action="Monitor" indent />
		<br />
		<i>If Alert RPV Pressure High High</i>
		<TickBox
			item="A3-5"
			action="Start"
			info="if you are a visitor or trainee, enable the Mode 0 button."
			indent={true}
		/>
		<TickBox item="All Relief Valves" action="Enable" indent />
		<TickBox item="Turbine A & B Bypass Valves" action="100%" indent />
	</div>
	<input
		type="radio"
		name="my_tabs_5"
		class="tab"
		aria-label="Abnormal RPV Temperature"
	/>
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>The temperature inside the Reactor Pressure Vessel is above safe operating
			limits.</i
		>
		<br /><br />
		<i>If Alert RPV Temperature High</i>
		<TickBox item="Main Circulation Pumps" action="Enable as Required" indent />
		<TickBox item="Control Rods" action="Insert as Required" indent />
		<br />
		<i>If Alert RPV Temperature High High</i>
		<TickBox
			item="A3-5"
			action="Start"
			info="if you are a visitor or trainee, enable the Mode 0 button."
			indent={true}
		/>
		<TickBox item="Main Circulation Pumps A1 & A2" action="Enable" indent />
		<TickBox item="Main Circulation Pumps B1, B2, C1, C2" action="Disable" indent />
		<TickBox item="Main Circulation Pumps A1 & A2" action="Speed 3" indent />
		<TickBox item="Relief Valves" action="Enable as Required" indent />
	</div>
	<input type="radio" name="my_tabs_5" class="tab" aria-label="Abnormal Water Level" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>The water level inside of the primary cooling circuit is not within
			acceptable limits.</i
		>
		<br /><br />
		<i>If Alert Core Water High</i>
		<TickBox item="Feedwater Pumps" action="Disable as required" indent />
		<TickBox item="Circ. Drains 1 & 2" action="Enable as required" indent />
		<TickBox item="Water Level" action="Monitor" indent />
		<br />
		<i>If Alert Core Water Low</i>
		<br />
		<TickBox item="Feedwater Pumps" action="Disable as required" indent />
		<TickBox item="Circ. Drains 1 & 2" action="Enable as required" indent />
		<TickBox item="Water Level" action="Monitor" indent />
		<br />
		<i>If Alert Core Water Low Low</i>
		<br />
		<TickBox item="AZ-5" action="Start" indent />
		<TickBox item="ECCS" action="Start Injection" indent />
		<TickBox item="Feedwater Pumps" action="Increase as required" indent />
		<TickBox item="Water Level" action="Monitor" indent />
	</div>
	<input type="radio" name="my_tabs_5" class="tab" aria-label="Fuel Channel Leak" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>Fuel channel ruptured. May cause power surges and water level drop beyond the
			capability of feedwater pumps.</i
		>
		<br /><br />
		<TickBox
			item="A3-5"
			action="Enable"
			info="if you are a visitor or trainee, enable reactor Mode 0."
			indent={true}
		/>
		<TickBox
			item="All Relief Valves"
			action="Open"
			warning="This will cause a rumble"
			indent={true}
		/>
		<TickBox item="OCC Pumps 1 & 2" action="Enable" indent={true} />
		<TickBox item="Heat Exchanger Valves A & B" action="Open" indent={true} />
		<TickBox
			item="Reactor Temperature"
			action="Wait for temperature readout to be black"
			indent={true}
		/>
		<br />
		<i>If Shutdown Unsuccessful</i>
		<br />
		<TickBox item="START RUNNING" action="QUICKLY" indent={true} actionColor="1" />
		<br />
		<i>If Shutdown Successful</i>
		<TickBox
			item="Call 106 on the plant operations phone"
			action="Request to repair damaged systems"
			indent={true}
		/>
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
	</div>
	<input type="radio" name="my_tabs_5" class="tab" aria-label="Loss of Offsite Power" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>Offsite power grid has failed. All systems run on onsite diesel generators,
			they don't produce enough power to keep reactor online. Core Cooling is
			critical.</i
		>
		<br /><br />
		<TickBox item="A3-5" action="Enable" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
		<TickBox item="Once repaired" action="Start Reactor Again" indent={true} />
	</div>
</div>
<Footer />
