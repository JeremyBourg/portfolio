<script>
let { data } = $props();
import './style.scss';
</script>

<div class="wrapper">
	<h1>{data.post.title}</h1>
	<section id="info">
		<div>
			<h2>{data.post.subject}</h2>
			<div id="separator"></div>
			<div><h4>{data.post.skills}</h4></div>
			<h3>{data.post.type}</h3>
		</div>
		<img src="{data.post.thumbnail}" alt="">
	</section>
	<section>
		<h2>Description</h2>
		{@html data.post.description}
	</section>
</div>
