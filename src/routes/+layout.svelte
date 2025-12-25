<script>
	import favicon from '$lib/assets/images/Favicon/favicon.ico';
	import styles from '$lib/styles/global.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href={styles} />
</svelte:head>

{@render children()}
