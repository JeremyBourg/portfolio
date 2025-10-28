<script>
	import favicon from '$lib/assets/favicon.svg';
	import { navigating } from '$app/stores';
    import Cursor from '$lib/components/Cursor.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

    import '$lib/styles/main.scss'

	gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
	let { children } = $props();

	$effect(() => {
		const smoother = ScrollSmoother.create({
			scroll: 1,
			effects: true,
			smoothTouch: 0.1,
		});

		if ($navigating === null && smoother) {
			smoother.refresh();
		}
		else if (smoother) {
			smoother.scrollTo(0);
		}
	});

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jérémy Bourg</title>
</svelte:head>


<Cursor />
<Header />

<div id="smooth-wrapper">
	<div id="smooth-content">
		{@render children?.()}
		<Footer />
	</div>
</div>
