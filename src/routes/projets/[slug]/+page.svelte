<script>
import click from "$lib/assets/modal-icon.svg";
import Modal from '$lib/components/Modal.svelte';
import CTA from '$lib/components/CTA.svelte';
import Swiper from "$lib/components/Swiper.svelte";
import './style.scss';

let { data } = $props();
</script>

<div class="wrapper">
	<h1>{data.post.title}</h1>
	<section id="info">
		<div id="info-content">
			<h2>{data.post.subject}</h2>
			<div id="separator"></div>
			<h4>{data.post.skills}</h4>
			<h3>{data.post.type}</h3>
		</div>
		{#if data.post.clickable}
			<Modal thumb src={data.post.thumbnail} speed="0.90" />
		{:else if data.post.video}
			<video src="{data.post.thumbnail}" autoplay loop muted data-speed="0.90"></video>
		{:else}
			<img src="{data.post.thumbnail}" alt="" data-speed="0.90">
		{/if}
		{#if data.post.href}
		<div class="button-container">
			<CTA href={data.post.href} label={data.post.label ?? "Voir le projet"} />
		</div>
		{/if}
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
					<Modal src={section.image} video={section.video} />
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
		{#if section.type === 'video'}
		<section>
			<h2>{section.title}</h2>
			<video src="{section.video}" controls></video>
		</section>
		{/if}
	{/each}
</div>

<style>
video {
	max-width: 100%;
}
.button-container {
	position: absolute;
	left: 45%;
	top: 90%;
    z-index: 3;

    @media screen and (max-width: 600px){
      position: unset;
      margin: 0 auto;
    }
}

</style>
