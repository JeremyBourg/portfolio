<script>
import click from "$lib/assets/modal-icon.svg";

let { isOpen, src, video, thumb } = $props();

let dialog = $state();

$effect(() => {
	const video = document.getElementById("video");
	if (isOpen) {
		dialog.showModal();
		if(video) video.play();
	}
	else {
		if(video) video.pause();
	}
});
</script>

<!-- TODO: if video: add play button and remove img#click -->
<div id="{!thumb ? "modal-container" : ''}" onclick={() => isOpen = true} style="height: 100%;">
	<img id="img" src="{src}" alt="">
	<img id="click" src="{click}" alt="">
</div>

<dialog
	bind:this={dialog}
	onclose={() => { isOpen = false; }}
	onclick={() => { dialog.close(); }}
>

{#if video}
	<article id="video-container">
		<video id="video" src="{video}" controls loop muted></video>
	</article>
{:else}
	<img src="{src}" alt="">
{/if}
</dialog>

<style>
dialog {
	border-radius: 0.2em;
	border: none;
	outline: none;
	background: none;
	padding: 0;
	height: 85vh;
}

dialog img {
	height: 100%;
	min-width: 60%;
	max-width: 100%;
	object-fit: contain;
	display: block;
	margin: 0 auto;
}

#video-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	video {
		max-height: 100%;
		min-width: 60%;
		max-width: 100%;
		object-fit: contain;
		display: block;
		margin: 0 auto;
	}
}

dialog::backdrop {
	background: rgba(0, 0, 0, 0.6);
}
div {
	position: relative;
	cursor: pointer;
	max-height: 50vh;

	img#img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
	}

	#modal-container::before {
		content: '';
		position: absolute;
		pointer-events: none;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	img#click {
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;
	}
}

</style>
