<script>
import { Spring } from 'svelte/motion';

const coords = new Spring({ x: 50, y: 50 }, {
    stiffness: 0.25, damping: 0.64
});

const size = new Spring(15);

const mousemove = (e) => { coords.target = {x: e.clientX, y: e.clientY}, { passive: true }};
const mousedown = () => { size.target = 20, { passive: true }};
const mouseup = () => { size.target = 15, { passive: true }};

</script>

<svelte:window
    on:mousemove={mousemove}
    on:mousedown={mousedown, mousemove}
    on:mouseup={mouseup}
/>

<svg role="presentation">
    <circle
        cx={coords.current.x}
        cy={coords.current.y}
        r={size.current}
    />
</svg>

<style>
svg {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;

	@media screen and (max-width: 768px) {
		display: none;
	}
}

circle {
    fill: var(--color-primary);
}
</style>

