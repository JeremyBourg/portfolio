<script>
import parallax0 from '$lib/assets/parallax0.png'
import parallax1 from '$lib/assets/parallax5.png'
import parallax2 from '$lib/assets/parallax4.png'
import parallax3 from '$lib/assets/parallax3.png'
import parallax4 from '$lib/assets/parallax2.png'
import parallax5 from '$lib/assets/parallax1.png'
import name from '$lib/assets/parallax-name.png'

let top = $state(0);

function scroll(event) {
    const layers = document.getElementsByClassName("parallax");
    for (var i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const speed = layer.getAttribute('data-speed');
        const yPos = -(top * speed / 100);
        layer.setAttribute('style', `transform: translateY(${yPos}px)`);
        if (i == layers.length - 2) {
            const fill = document.getElementById('fill')
            fill.setAttribute('style', `height: ${yPos * -1}px`)
        }
    }
};
</script>

<svelte:window on:scroll={scroll} bind:scrollY={top} />

<style>
#parallax {
    height: 100vh;
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
.parallax-layer0 {
    z-index: -10;
}
.parallax-layer1 {
    z-index: -9;
}
.parallax-layer2 {
    z-index: -8;
}
.parallax-layer3 {
    z-index: -7;
}
.parallax-layer4 {
    z-index: -6;
}
.parallax-layer5 {
    z-index: -5;
}

.parallax-name {
    z-index: -10;
    top: 16vh;
}
</style>

<div id="parallax">
    <div id="fill"></div>
    <img class="parallax parallax-layer0" src="{parallax0}" alt="" data-speed="0">
    <img class="parallax parallax-layer1" src="{parallax1}" alt="" data-speed="10">
    <img class="parallax parallax-layer2" src="{parallax2}" alt="" data-speed="25">
    <img class="parallax parallax-layer3" src="{parallax3}" alt="" data-speed="36">
    <img class="parallax parallax-layer4" src="{parallax4}" alt="" data-speed="49">
    <img class="parallax parallax-layer5" src="{parallax5}" alt="" data-speed="100">
    <img class="parallax parallax-name" src="{name}" alt="" data-speed="0">
</div>
