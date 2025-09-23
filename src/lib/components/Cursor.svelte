<script>
    import {Spring} from 'svelte/motion';

    let coords = new Spring({ x:50, y:50 }, {
        stiffness: 0.15,
        damping: 0.25,
    });

    let size = new Spring(15);
</script>

<div>
    <svg
        onmousemove={(e) => {
            coords.target = { x: e.clientX, y: e.clientY };
        }}
        onmousedown={() => size.target = 20 }
        onmouseup={() => size.target = 15 }
        role="presentation"
    >
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
    width: 100%;
    height: 100%;
    mix-blend-mode: difference;
    top: 0;
    left: 0;
}
svg {
    width: 100%;
    height: 100%;
}

circle {
    fill: var(--color-primary);
    pointer-events: auto;
}
</style>

