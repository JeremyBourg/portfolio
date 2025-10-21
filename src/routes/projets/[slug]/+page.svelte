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

	<section>
		<h2>D'autres projets</h2>
		<Swiper loop>
			{#each data.others as post}
				<div class="swiper-slide">
					<a href="/projets/{post.slug}">
						{#if post.video}
							<div style="position: absolute; inset: 0;" ontouchstart={event.stopPropagation()}></div>
							<video src="{post.thumbnail}" autoplay muted loop></video>
						{:else}
							<img src="{post.thumbnail}" alt="">
						{/if}
						<div>
							<h3>{post.title}</h3>
						</div>
					</a>
				</div>
			{/each}
		</Swiper>
	</section>
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

.swiper-slide::before {
	content: '';
	position: absolute;
	pointer-events: none;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.3);
}

.swiper-slide {
	video, img {
		display: block;
	}

	div {
		position: absolute;
		bottom: 0;
		padding: 1rem;

		h3 {
			color: var(--color-primary);
		}
	}
}

</style>
