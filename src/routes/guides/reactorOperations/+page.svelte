<script>
	import '../../../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
  import ToDo from '$lib/components/ChecklistItem.svelte';
  import hero from '$lib/images/hero-banners/Startup.avif';
</script>

<Header
	heroImg={hero}
	title="Reactor Operation Checklists"
	catchphrase='"Simpson, did you disengage Turbine C?" - Mongomery Burns'
/>

<div class="tabs tabs-lift m-5">
  <input type="radio" name="my_tabs_3" class="tab" aria-label="Pre-start" checked/>
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <i>Prepare the RBMK-1500 reactor for a safe and stable startup by completing the pre-start checklist and configuring all supporting systems.</i>
    <ToDo item="Condenser Coolant Pump A1 & A2" action="Enabled, Speed 1"/>
    <ToDo item="Turbine A-B Bleed Valve" action="Open"/>
    <ToDo item="Turbine A Bypass Valve" action="Open" warning = "This is a switch."/>
  </div>

  <input type="radio" name="my_tabs_3" class="tab" aria-label="Start-up" />
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <i>Deliver the RBMK-1500 reactor into operating mode by completing the start-up checklist and configuring relevant supporting systems.</i>
  </div>


  <input type="radio" name="my_tabs_3" class="tab" aria-label="Shutdown" />
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <i>Congrats! You made it. Safely shut down the RBMK-1500 reactor for the next shift– d'oh! Homer Simpson is the head operator next shift.</i>
  </div>
</div>

<Footer />
<style>
</style>