<script>
import { onMount } from 'svelte';
import Modal from './Modal.svelte';

import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

let { loop, slides, children } = $props();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let uuid = crypto.randomUUID();
const classUUID = 's-' + uuid;

onMount(() => {
	let swiper = new Swiper(`.${classUUID}`, {
		modules: [Navigation, Pagination],

		loop: true,
		
		spaceBetween: 20,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				loop: loop,
			},
			768: {
				slidesPerView: 2,
				loop: loop,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
})

</script>

<div class="{classUUID} swiper" >
	<div class="swiper-wrapper">
	{#if slides}
		{#each slides as slide}
			<div class="swiper-slide">
				<div class="slide-img">
					<Modal src={slide.image} video={slide.video} position={slide.position} />
				</div>
				<p>{slide.caption}</p>
			</div>
		{/each}
	{:else}
		{@render children?.()}
	{/if}
	</div>

	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>

<style>
.slide-img {
	height: 400px;
}

p {
	font-size: var(--font-size-extra);
	color: var(--color-tertiary);
}

.swiper {
	--swiper-navigation-color: var(--color-white);
}

.swiper-button-prev, .swiper-button-next {
	mix-blend-mode: difference;
}
</style>
