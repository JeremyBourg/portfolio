<script>

let {data} = $props();

</script>
<div class="wrapper">
	<h1>Grille de projets</h1>
	{#each data.summaries as { slug, title }}
		<a href="/projets/{slug}">{title}</a>
	{/each}
</div>
