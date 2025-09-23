<script>
	import favicon from '$lib/assets/favicon.svg';
    import Cursor from '$lib/components/Cursor.svelte';
    import Header from '$lib/components/Header.svelte';

    import '$lib/styles/main.scss'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Cursor />
<Header />

{@render children?.()}
