<script>
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import Indicator from '$lib/components/ControlRoomIndicator.svelte'
const containerCSS = 'flex grid grid-cols-4 grid-rows-3 flex-col items-center justify-center'
// tomfoolery
const coolantPumpTripDescription =
	'This alert indicates that the coolant pumps for either cooling tower have tripped. \nTypically, you would only see this occur during a power loss.\nTo regain power, call engineering and tell them to reset the breakers.'
</script>

<Header
	heroImg="/images/hero-banners/info-panels.avif"
	title="Information Panels"
	catchphrase="Fun Fact: Radiation Level 8+ is kinda bad ngl"
/>
<Indicator name="Coolant Pump A2 Trip" description={coolantPumpTripDescription} color="red" />
<Footer />
