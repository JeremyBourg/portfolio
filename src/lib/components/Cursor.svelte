<script>
import { Spring } from 'svelte/motion';
import { onMount } from 'svelte';

const coords = new Spring({ x: 50, y: 50 }, {
    stiffness: 0.15, damping: 0.25
});

const size = new Spring(15);

onMount(() => {
    if(typeof window !== 'undefined') {
        window.addEventListener('mousemove', (e) => {coords.target = {x: e.clientX, y: e.clientY}}, { passive: true });
        window.addEventListener('mousedown', () => {size.target = 20}, { passive: true });
        window.addEventListener('mouseup', () => {size.target = 15}, { passive: true });
    }
});
</script>

<div>
    <svg role="presentation" width="100%" height="100%">
        <circle
            cx={coords.current.x}
            cy={coords.current.y}
            r={size.current}
        />
    </svg>
</div>

<style>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 100;
}

circle {
    fill: var(--color-primary);
}
</style>

