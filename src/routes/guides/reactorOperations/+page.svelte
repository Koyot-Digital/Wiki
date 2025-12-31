<script>
	import '../../../app.css'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import ToDo from '$lib/components/ChecklistItem.svelte'
	import hero from '$lib/images/hero-banners/Startup.avif'
</script>

<Header heroImg={hero} title="Reactor Operation Checklists" catchphrase='"So, how do i use this again?" - Trainee"' />

<div class="tabs tabs-lift m-5">
	<input type="radio" name="my_tabs_4" class="tab" aria-label="Pre-start" checked />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i>Prepare the RBMK-1500 reactor for a safe and stable startup by completing the pre-start checklist and configuring all supporting systems.</i>
		<ToDo item="Condenser Coolant Pump A1" action="Enabled, Speed 1" />
		<ToDo item="Condenser Coolant Pump A2" action="Enabled, Speed 1" />
		<ToDo item="Turbine A-B Bleed Valve" action="Open" />
		<ToDo item="Turbine A Bypass Valve" info="This is done with the momentary switch." action="Enabled" />
		<ToDo item="Turbine A Bypass Valve" info="This is done with the maintained switch." action="100%" />
		<ToDo item="Deaerator A-B Bleed Valve" action="Open" />
		<ToDo item="Deaerator A Relief Valve" action="50%" />
		<ToDo item="Deaerator A Steam Inlet Valve" action="25%" />
		<ToDo item="Automatic Feed Limiter Valve" action="Enabled" />
		<ToDo item="ECCS Injection Tanks" info="1500 PSI can be archieved by opening the Nitrogen Valve." action="1500 PSI" />
		<ToDo item="Automatic Hotwell Level" action="35" />
		<ToDo item="Automatic Hotwell Limiter Valve" info="This is set using the Auto Valve Control switch." action="Enabled" />
		<ToDo item="G1<64A Offload System" info="Press and hold the momentary switch until the yellow indicator illuminates." action="Primed" />
		<ToDo item="Automatic G1 Offload" action="Disabled" />
		<ToDo item="Breaker 18M-G1" info="The key needed to activate this breaker can be found in the yellow cabinet box near the entrance." action="Enabled" />
		<ToDo item="Breaker 64B-M" action="Enabled" />
		<ToDo item="Condenser Coolant Pump A1" action="Speed 2" />
		<ToDo item="Main Circulation Pump A1" action="Speed 2" />
		<ToDo item="Main Circulation Pump A2" action="Speed 2" />
		<ToDo item="Reactor Isolation Valve Inlets 1 & 2" action="Open" />
		<ToDo item="Reactor Isolation Valve Outlets 1 & 2" action="Open" />
	</div>

	<input type="radio" name="my_tabs_4" class="tab" aria-label="Start-up" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i>Deliver the RBMK-1500 reactor into operating mode by completing the start-up checklist and configuring relevant supporting systems.</i>
		<br /><br />
		<b>Pre-stage</b>
		<ToDo item="Reactor Mode Button 1" action="Enabled" />
		<ToDo item="Alert Mode Conflict" action="Acknowledge"  />
		<ToDo item="Heat Exchanger Valves A & B" action="Closed" />
		<ToDo item="OCC Circulation Pumps 1 & 2" action="Disabled" />
		<ToDo item="Shutdown Control Rods" warning="Check that the A3 rods are in motion." action="Enabled" />
		<ToDo item="Alert Mode Conflict" action="Reset"  />
		<ToDo item="Out of Zone Signal" action="Await"  />
		<br />
		<b>Stage 1</b>
		<ToDo item="Remove Control Rods" info="You may use the Auto Control Rods to achieve the megawatt target." warning="Do not let the power exceed 2100MW. Ensure that the heat is properly distributed on the Heat Distribution Display." action="1500MW" />
		<ToDo item="Water Temperature 200°F" action="Await"  />
		<ToDo item="Reactor Mode Button 2" action="Enabled" />
		<ToDo item="Condensate Pump 1" warning="Ensure the Water Temperature Exceeds 200°F." action="Enabled, Speed 2" />
		<ToDo item="Feedwater Pump 1" warning="Ensure the Water Temperature Exceeds 200°F." action="Enabled, Speed 2" />
		<br />
		<b>Stage 2</b>
		<ToDo item="Remove Control Rods" info="You may use the Auto Control Rods to achieve the megawatt target." warning = "Ensure that the heat is properly distributed on the Heat Distribution Display." action="2100MW" />
		<ToDo item="Contact Engineering Turning Gear" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Disengage Turbine A" />
		<ToDo item="Reactor Pressure Vessel 280PSI" action="Await"  />
		<ToDo item="Turbine A Flow" info="You may use the Auto Bypass switch to achieve a flow of zero." action="Zero" />
		<ToDo item="Turbine A Turbine Valve" action="As Needed" indent />
		<ToDo item="Turbine A Bypass Valve" action="As Needed" indent />
		<ToDo item="Synchronoscope" action="Enabled" />
		<ToDo item="Grid Sync when indicated" info="The Synchronoscope will illuminate green and emit a beep when at the desired frequency. Synchronization is easier as the turbine nears 1800RPM." warning="The turbine will trip above 2100RPM." action="Enabled" />
		<br />
		<i>If Synchronization Unsuccessful:</i>
		<ToDo item="Alert Turbine Trip" action="Acknowledge" indent />
		<ToDo item="Turbine Under 600RPM" action="Await" indent />
		<ToDo item="Alert Turbine Trip" action="Reset"  indent />
		<ToDo item="Return to Turbine Runup" action="Repeat Steps" indent />
		<br />
		<i>If Synchronization Successful:</i>
		<ToDo item="Alert Reverse Power" action="Acknowledge"  indent />
		<ToDo item="Turbine A Turbine Valve" action="100%" indent />
		<ToDo item="Turbine A Bypass Valve" info="If the Auto Bypass switch has been utilized for Turbine Runup, set Auto Bypass to 750." action="0%" indent />
		<br />
		<i>If Generator Load Positive:</i>
		<ToDo item="Alert Reverse Power" action="Reset" indent />
		<br />
		<ToDo item="Breaker 64A-M" action="Enabled" />
		<ToDo item="Contact Engineering" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Reset Breakers" />
		<ToDo item="Deaerator A & B Relief Valves" info = "You may enable the Deaerator Auto Control Systems" warning = "Do not allow Deaerator PSI to exceed 100PSI." action="25%"/>
		<ToDo item="Deaerator A & B Inlet Valves" info = "You may enable the Deaerator Auto Control Systems" warning = "Do not allow Deaerator Temperatures to exceed 200°F" action="45%"/> 
		<ToDo item="Condensate Pump 2" action="Enabled, Speed 1"/>
		<ToDo item="Feedwater Pump 2" action="Enabled, Speed 1"/>
		<ToDo item="Deaerator A-B Bleed Valve" action="Open"/>
    <br />
    <b>Stage 3</b>
		<ToDo item="Remove Control Rods" info="You may use the Auto Control Rods to achieve the megawatt target." warning = "Ensure that the heat is properly distributed on the Heat Distribution Display." action="3000MW" />
    <ToDo item="Main Circulation Pumps A1 & A2" action="Speed 3"/> 
    <ToDo item="Main Circulation Pumps B1 & B2" action="Enabled, Speed 1"/>
    <ToDo item="Condenser Coolant Pumps A1 & A2" action="Speed 3"/>
    <ToDo item="Condenser Coolant Pumps B1 & B2" action="Enabled, Speed 3"/>
    <ToDo item="Contact Engineering, Turning Gear" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Disengage Turbine B" />
    <ToDo item="Turbine B Flow" info="You may use the Auto Bypass switch to achieve a flow of zero." action="Zero" />
		<ToDo item="Turbine B Turbine Valves" action="As Needed" indent />
		<ToDo item="Synchronoscope" action="Enabled" />
		<ToDo item="Grid Sync when indicated" info="The Synchronoscope will illuminate green and emit a beep when at the desired frequency. Synchronization is easier as the turbine nears 1800RPM." warning="The turbine will trip above 2100RPM." action="Enabled" />
		<br />
		<i>If Synchronization Unsuccessful:</i>
		<ToDo item="Alert Turbine Trip" action="Acknowledge"  indent />
		<ToDo item="Turbine Under 600RPM" action="Await" indent />
		<ToDo item="Alert Turbine Trip" action="Reset"  indent />
		<ToDo item="Return to Turbine Runup" action="Repeat Steps" indent />
		<br />
		<i>If Synchronization Successful:</i>
		<ToDo item="Turbine B Turbine Valve" action="100%" indent />
		<ToDo item="Turbine B Bypass Valve" info="If the Auto Bypass switch has been utilized for Turbine Runup, set Auto Bypass to 750." action="0%" indent />
		<br />
    <ToDo item="Feedwater Pump 2" action="Speed 2"/>
    <ToDo item="Feedwater Pump 2" action="Speed 2"/>
    <br />
    <b>Stage 4</b>
    <ToDo item="Main Circulation Pumps B1 & B2" action="Speed 3"/>
    <ToDo item="Condenser Coolant Pumps A3 & B3" action="Enabled, Speed 1"/>
    <ToDo item="Call Grid Controller" info="Contact the grid controller by dialing 7782 on the Grid Controller phone." action="Go Online"/>
    <ToDo item="Bypass Valve Turbines A & B" action="Enabled"/>
    <ToDo item="Auto Bypass Valve Turbines A & B" action="Enabled"/>
    <ToDo item="Auto Bypass Set" info="Set the bypass of both turbines by halving the demand and then adding 12." action="Load Following"/> 
	</div>
  <input type="radio" name="my_tabs_4" class="tab" aria-label="Reactor Variability" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i>Sit back and relax, and let the reactor do the rest! </i>
    <br /><br />
    <b>Low Power Range [4000MW - 4200MW]</b>
    <ToDo item="Main Circulation Pumps C1 & C2" action="Speed 1"/>
    <br />
    <b>Medium Power Range [4200MW - 4500MW]</b>
    <ToDo item="Main Circulation Pumps C1 & C2" action="Speed 2"/>
    <ToDo item="Condenser Coolant Pumps A3 & B3" action="Speed 2"/>
    <ToDo item="Condensate Pump 1" action="Speed 3"/>
    <ToDo item="Feedwater Pump 1" action="Speed 3"/>
    <br />
    <b>High Power Range [4000MW - 4200MW]</b>
    <ToDo item="Main Circulation Pumps C1 & C2" action="Speed 3"/>
    <ToDo item="Condenser Coolant Pumps A3 & B3" action="Speed 3"/>
  </div>
	<input type="radio" name="my_tabs_4" class="tab" aria-label="Shutdown" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<i>Congrats! You made it. Safely shut down the RBMK-1500 reactor for the next shift.</i>
    <br /><br />
		<b>Pre-stage</b>
    <ToDo item="Call Grid Controller" info="Contact the grid controller by dialing 7782 on the Grid Controller phone." action="Go Offline"/>
    <br />
		<b>Stage 1</b>
		<ToDo item="Insert Control Rods" info="You may use the Auto Control Rods to achieve the megawatt target." warning = "Avoid sudden reductions of power. Limit a downscale period to no less than 100 seconds." action="3400MW" />
    <br />
		<i>If Water Temperature less than 400°F:</i>
    <ToDo item="Main Circulation Pumps AX & BX" action="Reduce" indent />
    <br />
    <ToDo item="Deaerator Auto Control" action="Disabled"/>
    <ToDo item="Deaerator Inlet A & B" action="Closed"/>
    <ToDo item="Deaerator Outlet A & B" action="50%"/>
    <ToDo item="Turbine A-B Bleed Valve" action="Closed"/>
    <ToDo item="Bypass Valve B" action="Enabled"/>
    <ToDo item="Automatic Bypass B" action="Enabled, 50%"/>
    <ToDo item="Turbine Valve B" action="60%"/>
    <br />
    <b>Stage 2</b>
    <ToDo item="Automatic Bypass Turbine B" action="0"/>
    <ToDo item="Turbine B Generator Output Below 10MW" action="Await"/>
    <ToDo item="Generator B Breaker" action="Closed"/> 
    <ToDo item="Automatic Bypass" action="Disabled"/> 
    <ToDo item="Turbine B Turbine Valve" action="Closed"/>
    <ToDo item="Turbine B Bypass Valve" action="Closed"/>
    <ToDo item="Turbine A-B Bleed Valve" action="Open"/>
    <ToDo item="Condenser Coolant Pumps A3 & A4" action="Disabled"/> 
    <ToDo item="Condenser Coolant Pumps B1, B2, B3, B4" action="Disabled"/>
    <ToDo item="Feedwater Pump 2" action="Disabled"/>
    <ToDo item="Condensate Pump 2" action="Disabled"/>
		<ToDo item="Insert Control Rods" info="You may use the Auto Control Rods to achieve the megawatt target." warning = "Avoid sudden reductions of power." action="2100MW" />
    <ToDo item="Main Circulation Pumps A1 & A2" action="Speed 2"/>
    <br />
    <b>Stage 3</b>
    <ToDo item="Contact Grid Controller" info="Contact the grid controller by dialing 7782 on the Grid Controller phone." action="Clearance"/>
    <ToDo item="Bypass Valve Turbine A" action="Enabled"/>
    <ToDo item="Automatic Bypass Turbine A" action="Enabled, 0%"/>
    <ToDo item="Turbine A Output Below 10MW" action="Await"/>
    <ToDo item="Generator A Breaker" action="Disabled"/>
    <ToDo item="Automatic Bypass Valve" action="Disabled"/>
    <ToDo item="Turbine A Turbine Valve" action="Closed"/>
    <ToDo item="Turbine A Bypass Valve" action="100%"/>
    <ToDo item="Reactor Mode Button 0" action="Enabled"/>
    <ToDo item="Alert Mode Conflict" action="Acknowledge"/>
    <ToDo item="Main Circulation Pumps A1 & A2" action="Speed 1"/>
    <ToDo item="Shutdown Control Rods" action="Disabled"/>
    <ToDo item="OCC Circulation Pumps 1 & 2" action="Enabled"/> 
    <ToDo item="Heat Exchanger Valves A & B" action="Open"/>
    <ToDo item="Alert Mode Conflict" action="Acknowledge"/>
    <br />
    <b>Stage 4</b>
    <ToDo item="Condensate Pump 1" action="Disabled"/>
    <ToDo item="Feedwater Pump 1" action="Disabled"/> 
		<ToDo item="Contact Engineering Turning Gear" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Engage Turbine A" />
    <ToDo item="Contact Engineering Turning Gear" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Engage Turbine B" />
    <ToDo item="Breaker 18M-G1" info="The key needed to activate this breaker can be found in the yellow cabinet box near the entrance." action="Disabled" />
    <ToDo item="Condenser Coolant Pumps A1, A2, A3, A4" action="Disabled"/>
    <ToDo item="Turbines A & B Turbine Valve" action="0%"/>
	<ToDo item="Turbines A & B Bypass Valve" action="0%"/>
	<ToDo item="Turbines A & B Bypass Valve" action="Disabled"/>   
   	<ToDo item="Automatic Feed Limiter Valve" action="Disabled"/>
	<ToDo item="Automatic Hotwell Limiter Valve" action="Disabled"/>
	<ToDo item="Automatic Control Rods" action="Disabled"/>
	<ToDo item="Reactor Isolation Valves Inlets 1 & 2" action="Closed"/>
	<ToDo item="Reactor Isolation Valves Outlets 1 & 2" action="Closed"/>
	<ToDo item="Contact Engineering" info="Contact the engineers by dialing 106 on the Plant Operations phone." action="Request Inspection"/>     
	</div>
</div>
<Footer />