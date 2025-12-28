<script>
	import Footer from '$lib/components/footer.svelte';
	import '../../app.css';
	import hero from '$lib/images/hero-banners/Workers Banner.png';
</script>

<div class="hero min-h-screen" style="background-image: url({hero});">
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-sml">
			<h1 class="mb-5 text-5xl font-bold">Non-Playable Characters</h1>
			<p class="mb-5">Manage one of the most complex nuclear facilities ever built.</p>
		</div>
	</div>
</div>
<Footer />
