<script>
import CTA from "$lib/components/CTA.svelte";

let {data} = $props();

</script>

<div class="wrapper">
    <h1>Mes projets</h1>
    <div id="projects-grid">
        {#each data.summaries as { slug, title, thumbnail, skills, subject, summary }, index}
            <div class="project-card card-{index % 2 === 0 ? 'left' : 'right'}">
                {#if index % 2 === 0}
				<div class="img-container" data-speed="0.91">
					<img src="{thumbnail}" alt="">
				</div>
                {/if}
                <div class="project-info">
                    <h3>{subject}</h3>
                    <h2>{title}</h2>
                    <div class="separator"></div>
                    <h4>{skills}</h4>
                    <p>{summary}</p>
                </div>
                {#if index % 2 !== 0}
				<div class="img-container" data-speed="0.85">
					<img src="{thumbnail}" alt="">
				</div>
                {/if}
                <div class="button-container">
                    <CTA label={"En savoir plus"} href={"/projets/" + slug}/>
                </div>
            </div>
        {/each}
    </div>

    <div class="wrapper" style="display: flex; align-items: center; justify-content: center; margin-top: 150px;" data-speed="0.85">
        <CTA label={"Intéressé?"} href={"/contact"} />
    </div>
</div>

<style>
h1 {
	padding: 100px 0;
	text-align: center;
}

#projects-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 100px;

	& > * {
		grid-column: 1 / -1;
	}
}

.project-card {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	position: relative;
}

.project-info {
	z-index: 3;
	margin-top: 10%;
	margin-bottom: 10%;

	& > * + * {
		margin-top: 8px;
	}
}

img {
	display: block;
	object-fit: cover;
	height: 100%;
	width: 100%;
}

.img-container {
	width: 100%;
	position: relative;
}

.img-container::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: 1;
}

.card-left .img-container::before {
	background: linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
    transform: translateX(7%);
}

.card-right .img-container::before {
	background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0));
    transform: translateX(-7%);
}

.card-left img {
    transform: translateX(7%);
}
.card-right img {
    transform: translateX(-7%);
}

.card-left .project-info {
	margin-left: -10%;
	padding-right: 20%;
}
.card-left .button-container {
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translateY(50%);
	z-index: 2;
}

.card-right .project-info {
	padding-left: 15%;
	margin-right: -10%;
}
.card-right .button-container {
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateY(50%);
	z-index: 2;
}
.separator {
	height: 2px;
	background-color: var(--color-primary);
}

</style>
