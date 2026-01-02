<script>
	import "../../../app.css"
	import Footer from "$lib/components/Footer.svelte"
	import Header from "$lib/components/Header.svelte"
	import TickBox from "$lib/components/ChecklistItem.svelte"
</script>

<Header
	heroImg="/src/lib/images/hero-banners/Startup.avif"
	title="Reactor Operation Checklists"
	catchphrase="'So, how do i use this again?' - Trainee"
/>

<div class="tabs tabs-lift m-5">
	<input type="radio" name="my_tabs_4" class="tab" aria-label="Pre-start" checked />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>Prepare the RBMK-1500 reactor for a safe and stable startup by completing the
			pre-start checklist and configuring all supporting systems.</i
		>
		<TickBox item="Condenser Coolant Pump A1" action="Enabled, Speed 1" />
		<TickBox item="Condenser Coolant Pump A2" action="Enabled, Speed 1" />
		<TickBox item="Turbine A-B Bleed Valve" action="Open" />
		<TickBox
			item="Turbine A Bypass Valve"
			info="This is done with the momentary switch."
			action="Enabled"
		/>
		<TickBox
			item="Turbine A Bypass Valve"
			info="This is done with the maintained switch."
			action="100%"
		/>
		<TickBox item="Deaerator A-B Bleed Valve" action="Open" />
		<TickBox item="Deaerator A Relief Valve" action="50%" />
		<TickBox item="Deaerator A Steam Inlet Valve" action="25%" />
		<TickBox item="Automatic Feed Limiter Valve" action="Enabled" />
		<TickBox
			item="ECCS Injection Tanks"
			info="1500 PSI can be achieved by opening the Nitrogen Valve."
			action="1500 PSI"
		/>
		<TickBox item="Automatic Hotwell Level" action="35" />
		<TickBox
			item="Automatic Hotwell Limiter Valve"
			info="This is set using the Auto Valve Control switch."
			action="Enabled"
		/>
		<TickBox
			item="G1<64A Offload System"
			info="Press and hold the momentary switch until the yellow indicator illuminates."
			action="Primed"
		/>
		<TickBox item="Automatic G1 Offload" action="Disabled" />
		<TickBox
			item="Breaker 18M-G1"
			info="The key needed to activate this breaker can be found in the yellow cabinet box near the entrance."
			action="Enabled"
		/>
		<TickBox item="Breaker 64B-M" action="Enabled" />
		<TickBox item="Condenser Coolant Pump A1" action="Speed 2" />
		<TickBox item="Main Circulation Pump A1" action="Speed 2" />
		<TickBox item="Main Circulation Pump A2" action="Speed 2" />
		<TickBox item="Reactor Isolation Valve Inlets 1 & 2" action="Open" />
		<TickBox item="Reactor Isolation Valve Outlets 1 & 2" action="Open" />
	</div>

	<input type="radio" name="my_tabs_4" class="tab" aria-label="Start-up" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>Deliver the RBMK-1500 reactor into operating mode by completing the start-up
			checklist and configuring relevant supporting systems.</i
		>
		<br /><br />
		<b>Pre-stage</b>
		<TickBox item="Reactor Mode Button 1" action="Enabled" />
		<TickBox item="Alert Mode Conflict" action="Acknowledge" />
		<TickBox item="Heat Exchanger Valves A & B" action="Closed" />
		<TickBox item="OCC Circulation Pumps 1 & 2" action="Disabled" />
		<TickBox
			item="Shutdown Control Rods"
			warning="Check that the A3 rods are in motion."
			action="Enabled"
		/>
		<TickBox item="Alert Mode Conflict" action="Reset" />
		<TickBox item="Out of Zone Signal" action="Await" />
		<br />
		<b>Stage 1</b>
		<TickBox
			item="Remove Control Rods"
			info="You may use the Auto Control Rods to achieve the megawatt target."
			warning="Do not let the power exceed 2100MW. Ensure that the heat is properly distributed on the Heat Distribution Display."
			action="1500MW"
		/>
		<TickBox item="Water Temperature 200°F" action="Await" />
		<TickBox item="Reactor Mode Button 2" action="Enabled" />
		<TickBox
			item="Condensate Pump 1"
			warning="Ensure the Water Temperature Exceeds 200°F."
			action="Enabled, Speed 2"
		/>
		<TickBox
			item="Feedwater Pump 1"
			warning="Ensure the Water Temperature Exceeds 200°F."
			action="Enabled, Speed 2"
		/>
		<br />
		<b>Stage 2</b>
		<TickBox
			item="Remove Control Rods"
			info="You may use the Auto Control Rods to achieve the megawatt target."
			warning="Ensure that the heat is properly distributed on the Heat Distribution Display."
			action="2100MW"
		/>
		<TickBox
			item="Contact Engineering Turning Gear"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Disengage Turbine A"
		/>
		<TickBox item="Reactor Pressure Vessel 280PSI" action="Await" />
		<TickBox
			item="Turbine A Flow"
			info="You may use the Auto Bypass switch to achieve a flow of zero."
			action="Zero"
		/>
		<TickBox item="Turbine A Turbine Valve" action="As Needed" indent />
		<TickBox item="Turbine A Bypass Valve" action="As Needed" indent />
		<TickBox item="Synchronoscope" action="Enabled" />
		<TickBox
			item="Grid Sync when indicated"
			info="The Synchronoscope will illuminate green and emit a beep when at the desired frequency. Synchronization is easier as the turbine nears 1800RPM."
			warning="The turbine will trip above 2100RPM."
			action="Enabled"
		/>
		<br />
		<i>If Synchronization Unsuccessful:</i>
		<TickBox item="Alert Turbine Trip" action="Acknowledge" indent />
		<TickBox item="Turbine Under 600RPM" action="Await" indent />
		<TickBox item="Alert Turbine Trip" action="Reset" indent />
		<TickBox item="Return to Turbine Runup" action="Repeat Steps" indent />
		<br />
		<i>If Synchronization Successful:</i>
		<TickBox item="Alert Reverse Power" action="Acknowledge" indent />
		<TickBox item="Turbine A Turbine Valve" action="100%" indent />
		<TickBox
			item="Turbine A Bypass Valve"
			info="If the Auto Bypass switch has been utilized for Turbine Runup, set Auto Bypass to 750."
			action="0%"
			indent
		/>
		<br />
		<i>If Generator Load Positive:</i>
		<TickBox item="Alert Reverse Power" action="Reset" indent />
		<br />
		<TickBox item="Breaker 64A-M" action="Enabled" />
		<TickBox
			item="Contact Engineering"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Reset Breakers"
		/>
		<TickBox
			item="Deaerator A & B Relief Valves"
			info="You may enable the Deaerator Auto Control Systems"
			warning="Do not allow Deaerator PSI to exceed 100PSI."
			action="25%"
		/>
		<TickBox
			item="Deaerator A & B Inlet Valves"
			info="You may enable the Deaerator Auto Control Systems"
			warning="Do not allow Deaerator Temperatures to exceed 200°F"
			action="45%"
		/>
		<TickBox item="Condensate Pump 2" action="Enabled, Speed 1" />
		<TickBox item="Feedwater Pump 2" action="Enabled, Speed 1" />
		<TickBox item="Deaerator A-B Bleed Valve" action="Open" />
		<br />
		<b>Stage 3</b>
		<TickBox
			item="Remove Control Rods"
			info="You may use the Auto Control Rods to achieve the megawatt target."
			warning="Ensure that the heat is properly distributed on the Heat Distribution Display."
			action="3000MW"
		/>
		<TickBox item="Main Circulation Pumps A1 & A2" action="Speed 3" />
		<TickBox item="Main Circulation Pumps B1 & B2" action="Enabled, Speed 1" />
		<TickBox item="Condenser Coolant Pumps A1 & A2" action="Speed 3" />
		<TickBox item="Condenser Coolant Pumps B1 & B2" action="Enabled, Speed 3" />
		<TickBox
			item="Contact Engineering, Turning Gear"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Disengage Turbine B"
		/>
		<TickBox
			item="Turbine B Flow"
			info="You may use the Auto Bypass switch to achieve a flow of zero."
			action="Zero"
		/>
		<TickBox item="Turbine B Turbine Valves" action="As Needed" indent />
		<TickBox item="Synchronoscope" action="Enabled" />
		<TickBox
			item="Grid Sync when indicated"
			info="The Synchronoscope will illuminate green and emit a beep when at the desired frequency. Synchronization is easier as the turbine nears 1800RPM."
			warning="The turbine will trip above 2100RPM."
			action="Enabled"
		/>
		<br />
		<i>If Synchronization Unsuccessful:</i>
		<TickBox item="Alert Turbine Trip" action="Acknowledge" indent />
		<TickBox item="Turbine Under 600RPM" action="Await" indent />
		<TickBox item="Alert Turbine Trip" action="Reset" indent />
		<TickBox item="Return to Turbine Runup" action="Repeat Steps" indent />
		<br />
		<i>If Synchronization Successful:</i>
		<TickBox item="Turbine B Turbine Valve" action="100%" indent />
		<TickBox
			item="Turbine B Bypass Valve"
			info="If the Auto Bypass switch has been utilized for Turbine Runup, set Auto Bypass to 750."
			action="0%"
			indent
		/>
		<br />
		<TickBox item="Feedwater Pump 2" action="Speed 2" />
		<TickBox item="Feedwater Pump 2" action="Speed 2" />
		<br />
		<b>Stage 4</b>
		<TickBox item="Main Circulation Pumps B1 & B2" action="Speed 3" />
		<TickBox item="Condenser Coolant Pumps A3 & B3" action="Enabled, Speed 1" />
		<TickBox
			item="Call Grid Controller"
			info="Contact the grid controller by dialing 7782 on the Grid Controller phone."
			action="Go Online"
		/>
		<TickBox item="Bypass Valve Turbines A & B" action="Enabled" />
		<TickBox item="Auto Bypass Valve Turbines A & B" action="Enabled" />
		<TickBox
			item="Auto Bypass Set"
			info="Set the bypass of both turbines by halving the demand and then adding 12."
			action="Load Following"
		/>
	</div>
	<input type="radio" name="my_tabs_4" class="tab" aria-label="Reactor Variability" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i>Sit back and relax, and let the reactor do the rest! </i>
		<br /><br />
		<b>Low Power Range [4000MW - 4200MW]</b>
		<TickBox item="Main Circulation Pumps C1 & C2" action="Speed 1" />
		<br />
		<b>Medium Power Range [4200MW - 4500MW]</b>
		<TickBox item="Main Circulation Pumps C1 & C2" action="Speed 2" />
		<TickBox item="Condenser Coolant Pumps A3 & B3" action="Speed 2" />
		<TickBox item="Condensate Pump 1" action="Speed 3" />
		<TickBox item="Feedwater Pump 1" action="Speed 3" />
		<br />
		<b>High Power Range [4500MW - 4800MW]</b>
		<TickBox item="Main Circulation Pumps C1 & C2" action="Speed 3" />
		<TickBox item="Condenser Coolant Pumps A3 & B3" action="Speed 3" />
	</div>
	<input type="radio" name="my_tabs_4" class="tab" aria-label="Shutdown" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i
			>Congrats! You made it. Safely shut down the RBMK-1500 reactor for the next
			shift.</i
		>
		<br /><br />
		<b>Pre-stage</b>
		<TickBox
			item="Call Grid Controller"
			info="Contact the grid controller by dialing 7782 on the Grid Controller phone."
			action="Go Offline"
		/>
		<br />
		<b>Stage 1</b>
		<TickBox
			item="Insert Control Rods"
			info="You may use the Auto Control Rods to achieve the megawatt target."
			warning="Avoid sudden reductions of power. Limit a downscale period to no less than 100 seconds."
			action="3400MW"
		/>
		<br />
		<i>If Water Temperature less than 400°F:</i>
		<TickBox item="Main Circulation Pumps AX & BX" action="Reduce" indent />
		<br />
		<TickBox item="Deaerator Auto Control" action="Disabled" />
		<TickBox item="Deaerator Inlet A & B" action="Closed" />
		<TickBox item="Deaerator Outlet A & B" action="50%" />
		<TickBox item="Turbine A-B Bleed Valve" action="Closed" />
		<TickBox item="Bypass Valve B" action="Enabled" />
		<TickBox item="Automatic Bypass B" action="Enabled, 50%" />
		<TickBox item="Turbine Valve B" action="60%" />
		<br />
		<b>Stage 2</b>
		<TickBox item="Automatic Bypass Turbine B" action="0" />
		<TickBox item="Turbine B Generator Output Below 10MW" action="Await" />
		<TickBox item="Generator B Breaker" action="Closed" />
		<TickBox item="Automatic Bypass" action="Disabled" />
		<TickBox item="Turbine B Turbine Valve" action="Closed" />
		<TickBox item="Turbine B Bypass Valve" action="Closed" />
		<TickBox item="Turbine A-B Bleed Valve" action="Open" />
		<TickBox item="Condenser Coolant Pumps A3 & A4" action="Disabled" />
		<TickBox item="Condenser Coolant Pumps B1, B2, B3, B4" action="Disabled" />
		<TickBox item="Feedwater Pump 2" action="Disabled" />
		<TickBox item="Condensate Pump 2" action="Disabled" />
		<TickBox
			item="Insert Control Rods"
			info="You may use the Auto Control Rods to achieve the megawatt target."
			warning="Avoid sudden reductions of power."
			action="2100MW"
		/>
		<TickBox item="Main Circulation Pumps A1 & A2" action="Speed 2" />
		<br />
		<b>Stage 3</b>
		<TickBox
			item="Contact Grid Controller"
			info="Contact the grid controller by dialing 7782 on the Grid Controller phone."
			action="Clearance"
		/>
		<TickBox item="Bypass Valve Turbine A" action="Enabled" />
		<TickBox item="Automatic Bypass Turbine A" action="Enabled, 0%" />
		<TickBox item="Turbine A Output Below 10MW" action="Await" />
		<TickBox item="Generator A Breaker" action="Disabled" />
		<TickBox item="Automatic Bypass Valve" action="Disabled" />
		<TickBox item="Turbine A Turbine Valve" action="Closed" />
		<TickBox item="Turbine A Bypass Valve" action="100%" />
		<TickBox item="Reactor Mode Button 0" action="Enabled" />
		<TickBox item="Alert Mode Conflict" action="Acknowledge" />
		<TickBox item="Main Circulation Pumps A1 & A2" action="Speed 1" />
		<TickBox item="Shutdown Control Rods" action="Disabled" />
		<TickBox item="OCC Circulation Pumps 1 & 2" action="Enabled" />
		<TickBox item="Heat Exchanger Valves A & B" action="Open" />
		<TickBox item="Alert Mode Conflict" action="Acknowledge" />
		<br />
		<b>Stage 4</b>
		<TickBox item="Condensate Pump 1" action="Disabled" />
		<TickBox item="Feedwater Pump 1" action="Disabled" />
		<TickBox
			item="Contact Engineering Turning Gear"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Engage Turbine A"
		/>
		<TickBox
			item="Contact Engineering Turning Gear"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Engage Turbine B"
		/>
		<TickBox
			item="Breaker 18M-G1"
			info="The key needed to activate this breaker can be found in the yellow cabinet box near the entrance."
			action="Disabled"
		/>
		<TickBox item="Condenser Coolant Pumps A1, A2, A3, A4" action="Disabled" />
		<TickBox item="Turbines A & B Turbine Valve" action="0%" />
		<TickBox item="Turbines A & B Bypass Valve" action="0%" />
		<TickBox item="Turbines A & B Bypass Valve" action="Disabled" />
		<TickBox item="Automatic Feed Limiter Valve" action="Disabled" />
		<TickBox item="Automatic Hotwell Limiter Valve" action="Disabled" />
		<TickBox item="Automatic Control Rods" action="Disabled" />
		<TickBox item="Reactor Isolation Valves Inlets 1 & 2" action="Closed" />
		<TickBox item="Reactor Isolation Valves Outlets 1 & 2" action="Closed" />
		<TickBox
			item="Contact Engineering"
			info="Contact the engineers by dialing 106 on the Plant Operations phone."
			action="Request Inspection"
		/>
	</div>
</div>
<Footer />
