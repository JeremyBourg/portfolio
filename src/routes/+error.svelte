<script>
import CTA from "$lib/components/CTA.svelte";
let { data } = $props();
</script>

<div class="wrapper">
	<div>
		<h1>404</h1>
		<p>Cette page n'existe pas.</p>

		<br>
		<CTA href="/" label="Retour à l'accueil" />
	</div>
</div>

<style>

.wrapper {
	display: flex;
	height: 62vh;
	align-items: center;
	justify-content: center;

	text-align: center;
}
h1 {
	margin-top: 4rem;
	color: var(--color-secondary);
}
</style>
