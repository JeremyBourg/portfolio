<script>
import parallax0 from '$lib/assets/parallax0.webp?enhanced';
import parallax1 from '$lib/assets/parallax1.webp?enhanced';
import parallax2 from '$lib/assets/parallax2.webp?enhanced';
import parallax3 from '$lib/assets/parallax3.webp?enhanced';
import parallax4 from '$lib/assets/parallax4.webp?enhanced';
import parallax5 from '$lib/assets/parallax5.webp?enhanced';
import name from '$lib/assets/parallax-name.webp?enhanced';
import parallax_static from '$lib/assets/parallax-static.webp?enhanced';

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
		<enhanced:img
			src="{image}"
			alt="parallax layer {index}"
			style="transform: translate(0, {(-top * (index/2)) / (layers.length - 1)}px); z-index: {-10 + index}"
			sizes="(100vw)"
		/>
	{/each}
    <enhanced:img class="parallax-name" src="{name}" alt="Jérémy Bourg" sizes="(100vw)" />
</div>

<div id="no-parallax">
	<enhanced:img src="{parallax_static}" alt="" sizes="(100vw)"/>
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
enhanced\:img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.parallax-name {
    z-index: -10;
    top: 8vh;
}

#no-parallax {
	display: none;
	height: 100vh;
	position: relative;

	enhanced\:img {
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
