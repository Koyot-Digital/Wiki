<script>
	import '../../../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import hero from '$lib/images/hero'
</script>

<Header
	heroImg="src/lib/images/hero-banners/banner5.avif"
	title="Non-Player Characters"
	catchphrase="Carson, did you steal my lunch?"
/>
<div class="flex flex-nowrap justify-center items-center m-5">
	<div class="card card-border bg-base-100 w-1/2 shadow-sm rounded-box border-2 m-6 order-1">
		<figure class="w-1/2 h-1/2">
			<img src="src/lib/images/capybara.png" alt="Carson" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Carson</h2>
			<p>
				Carson is a internal security guard at Oakridge Nuclear Power Station. They are known for
				their strict adherence to rules & regulations. They take their job very seriously & are
				always on the lookout for any suspicious activity. Carson has a tendency to be a bit rude,
				often insulting those who don't have common sense.
			</p>
		</div>
	</div>
	<div class="card card-border bg-base-100 w-1/2 shadow-sm rounded-box border-2 m-6 order-2">
		<figure class="w h">
			<img src="src/lib/images/capybara.png" alt="Hugh" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Hugh</h2>
			<p>
				Hugh is a exterior security guard at Oakridge Nuclear Power Station. They are known for
				their calm & friendly demeanor. Hugh is always willing to help others and is a great team
				player. Hugh also has 3 pending lawsuits against themselves for arson, petty theft, grand
				larceny, superb larceny & possession of a hazardous material <a href="https://en.wikipedia.org/wiki/Polonium-210#Hazards" class="link-warning">(Po-210)</a>.
			</p>
		</div>
	</div>
</div>
<Footer />
<style>
</style>