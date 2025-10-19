<script>
import { onMount } from 'svelte';
import Modal from './Modal.svelte';

import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

let { loop, slides } = $props();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

onMount(() => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],

		loop: loop,
		
		spaceBetween: 20,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
})

</script>

<div class="swiper">
	<div class="swiper-wrapper">
		{#each slides as slide}
			<div class="swiper-slide">
				<div class="slide-img">
					<Modal src={slide.image} />
				</div>
				<p>{slide.caption}</p>
			</div>
		{/each}
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
