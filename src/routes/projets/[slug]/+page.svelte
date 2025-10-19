<script>
import click from "$lib/assets/modal-icon.svg";
import Modal from '$lib/components/Modal.svelte';
import Swiper from "$lib/components/Swiper.svelte";
import './style.scss';

let { data } = $props();
</script>

<div class="wrapper">
	<h1>{data.post.title}</h1>
	<section id="info">
		<div>
			<h2>{data.post.subject}</h2>
			<div id="separator"></div>
			<h4>{data.post.skills}</h4>
			<h3>{data.post.type}</h3>
		</div>
		<img src="{data.post.thumbnail}" alt="" data-speed="0.85">
	</section>
	<section>
		<h2>Description</h2>
		{@html data.post.description}
	</section>

	{#each data.post.sections as section, index }
		{#if section.type === 'modal'}
			<section>
				<h2>{section.title}</h2>
				<div class="modal">
					<Modal src={section.image} />
					<div>
						{@html section.content}
					</div>
				</div>
			</section>
		{/if}
		{#if section.type === 'carousel'}
		<section>
			<h2>{section.title}</h2>
			<div>
				{@html section.content}
			</div>
			<br>
			<Swiper slides={section.slides} />
		</section>
		{/if}
	{/each}
</div>
