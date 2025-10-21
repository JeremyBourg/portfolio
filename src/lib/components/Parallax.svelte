<script>
import parallax0 from '$lib/assets/parallax0.webp'
import parallax1 from '$lib/assets/parallax1.webp'
import parallax2 from '$lib/assets/parallax2.webp'
import parallax3 from '$lib/assets/parallax3.webp'
import parallax4 from '$lib/assets/parallax4.webp'
import parallax5 from '$lib/assets/parallax5.webp'
import name from '$lib/assets/parallax-name.webp'

const layers = [
	parallax0,
	parallax1,
	parallax2,
	parallax3,
	parallax4,
	parallax5,
];

let top = $state();
</script>

<svelte:window bind:scrollY={top} />

<div id="parallax">
    <div id="fill" style="height: {top/2}px"></div>
	{#each layers as image, index}
		<img
			src="{image}"
			alt="parallax layer {index}"
			style="transform: translate(0, {(-top * (index/2)) / (layers.length - 1)}px); z-index: {-10 + index}"
		>
	{/each}
    <img class="parallax-name" src="{name}" alt="">
</div>

<style>
#parallax {
    height: 130vh;
	position: relative;
}
#fill {
    z-index: -5;
    background-color: var(--color-bg-primary);
    position: absolute;
    bottom: 0;
    width: 100%;
}
img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.parallax-name {
    z-index: -10;
    top: 16vh;
}
</style>
