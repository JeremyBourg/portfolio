<script>
import click from "$lib/assets/modal-icon.svg";

let { isOpen, children} = $props();

let dialog = $state();

$effect(() => {
	if (isOpen) dialog.showModal();
});
</script>

<div onclick={() => isOpen = true}>
	{@render children?.()}
	<img src="{click}" alt="">
</div>

<dialog
	bind:this={dialog}
	onclose={() => { isOpen = false; }}
	onclick={(e) => { if (e.target === dialog ) dialog.close(); }}
>
	{@render children?.()}
</dialog>

<!-- TODO: add close modal button as indication -->

<style>
dialog {
	border-radius: 0.2em;
	border: none;
	outline: none;
	background: none;
	padding: 0;
}
dialog::backdrop {
	background: rgba(0, 0, 0, 0.6);
}
div {
	position: relative;
	cursor: pointer;

	img {
		display: block;
	}

	&::before {
		content: '';
		position: absolute;
		pointer-events: none;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	img {
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;
	}
}

</style>
