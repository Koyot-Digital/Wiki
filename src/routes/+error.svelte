<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import headerImg from '/images/hero-banners/banner5.avif'
import { page } from '$app/state'
// add more later for different status codes
if (page.status == 404) {
	var catchphrase =
		"ok where did the polonium- I mean page go? we had it right here a second ago... maybe check the waste storage? or the cooling towers? maybe it's in the turbine hall? who knows, but it's definitely not here."
} else {
	var catchphrase = 'An unexpected error has occurred.'
}
</script>

<title>{page.status} - {page.error?.message || 'Unexpected Error'}</title>

<Header
	heroImg={headerImg}
	title="{page.status} - {page.error?.message || 'Page not found'}"
	{catchphrase}
	button="/"
	buttontext="Home"
/>
<Footer />
