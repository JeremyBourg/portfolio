<script>
import click from "$lib/assets/modal-icon.svg";

let { isOpen, src } = $props();

let dialog = $state();

$effect(() => {
	if (isOpen) dialog.showModal();
});
</script>

<div onclick={() => isOpen = true} style="height: 100%;">
	<img id="img" src="{src}" alt="">
	<img id="click" src="{click}" alt="">
</div>

<dialog
	bind:this={dialog}
	onclose={() => { isOpen = false; }}
	onclick={() => { dialog.close(); }}
>
	<img src="{src}" alt="">
</dialog>

<!-- TODO: add close modal button as indication -->

<style>
dialog {
	border-radius: 0.2em;
	border: none;
	outline: none;
	background: none;
	padding: 0;
	height: 75vh;
	width: 75vw;
}

dialog img {
	height: 100%;
	min-width: 60%;
	max-width: 100%;
	object-fit: contain;
	display: block;
	margin: 0 auto;
}
dialog::backdrop {
	background: rgba(0, 0, 0, 0.6);
}
div {
	position: relative;
	cursor: pointer;

	img#img {
		display: block;
		height: 100%;
		object-fit: cover;
	}

	&::before {
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
