<script>
import click from "$lib/assets/modal-icon.svg";

let { isOpen, src, video, thumb, speed, position } = $props();

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

<div id="{!thumb ? "modal-container" : 'thumb'}" onclick={() => isOpen = true} style="height: 100%;" data-speed={speed ?? ''}>
	<img id="img" src="{src}" alt="" style="object-position: {position ?? "top left"};">
	{#if video}
	<div class="play-button">
		<div class="play-circle">
		</div>
	</div>
	{:else}
	<img id="click" src="{click}" alt="">
	{/if}
</div>

<dialog
	bind:this={dialog}
	onclose={() => { isOpen = false; }}
	onclick={() => { dialog.close(); }}
>

{#if video}
	<div id="video-container">
		<video id="video" src="{video}" controls loop></video>
	</div>
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
#modal-container::before {
	content: '';
	position: absolute;
	pointer-events: none;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.3);
}

div#modal-container, div#thumb {
	position: relative;
	cursor: pointer;
	max-height: 50vh;

	img#img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}


	img#click {
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.play-button {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.play-circle {
		background-color: var(--color-tertiary);
		width: 30%;
		aspect-ratio: 1 / 1;
		border-radius: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			width: 60%;
			height: 60%;
			background-color: var(--color-primary);
			clip-path: polygon(0 0, 0 100%, 80% 50%);
			transform: translate(-30%, -50%);
		}
	}
}

</style>
