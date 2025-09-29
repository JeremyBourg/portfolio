<script>
let { data } = $props();
import './style.scss';
</script>

<style>
#main {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
}

#align-left {
	max-width: 80%;
}

#separator {
	height: 2px;
	background-color: var(--color-primary);
}

</style>

<div class="wrapper">
	<h1>{data.post.title}</h1>
	<div id="main">
		<div id="align-left">
			<h2>{data.post.subject}</h2>
			<div id="separator"></div>
			<img src="{data.post.thumbnail}" alt="">
		</div>
	</div>
	<div>
		<h2>Description</h2>
		{@html data.post.description}
	</div>
</div>
