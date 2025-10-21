<script>
import parallax0 from '$lib/assets/parallax0.webp'
import parallax1 from '$lib/assets/parallax1.webp'
import parallax2 from '$lib/assets/parallax2.webp'
import parallax3 from '$lib/assets/parallax3.webp'
import parallax4 from '$lib/assets/parallax4.webp'
import parallax5 from '$lib/assets/parallax5.webp'
import name from '$lib/assets/parallax-name.webp'
import parallax_static from '$lib/assets/parallax-v2.jpg'

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

<div id="no-parallax">
	<img src="{parallax_static}" alt="">
</div>

<style>
#parallax {
    height: 120vh;
	position: relative;

	@media screen and (max-width: 1100px) {
		height: 100vh;
	}
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

#no-parallax {
	display: none;
	height: 100vh;
	position: relative;

	img {
		object-fit: cover;
		object-position: 54%;
	}
}
@media screen and (max-width: 768px) {
	#parallax {
		display: none;
	}

	#no-parallax {
		display: block;
	}
}
</style>
