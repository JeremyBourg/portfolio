<script>
import CTA from "$lib/components/CTA.svelte";

let {data} = $props();

</script>

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
	display: flex;
	position: relative;
}

.project-info {
	z-index: 2;
	& > :not(:last-child) {
		margin-bottom: 8px;
	}
}


.card-left .project-info {
	margin-top: 5%;
	margin-left: -10%;
	padding-right: 10%;
}
.card-left .button-container {
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translateY(50%) translateX(-20%);
}

.card-right .project-info {
	margin-top: 5%;
	padding-left: 10%;
	margin-right: -20%;
}
.card-right .button-container {
	position: absolute;
	right: 0;
	bottom: 0;
	transform: translateY(50%) translateX(20%);
}
.separator {
	height: 2px;
	background-color: var(--color-primary);
}

</style>
<div class="wrapper">
    <h1>Grille de projets</h1>
    <div id="projects-grid">
        {#each data.summaries as { slug, title, thumbnail, skills, subject, summary }, index}
            <div class="project-card card-{index % 2 === 0 ? 'left' : 'right'}">
                {#if index % 2 === 0}
                    <img src="{thumbnail}" alt="">
                {/if}
                <div class="project-info">
                    <h3>{subject}</h3>
                    <h2>{title}</h2>
                    <div class="separator"></div>
                    <h4>{skills}</h4>
                    <p>{summary}</p>
                </div>
                {#if index % 2 !== 0}
                    <img src="{thumbnail}" alt="">
                {/if}
                <div class="button-container">
                    <CTA label={"En savoir plus"} href={"/projets/" + slug}/>
                </div>
            </div>
        {/each}
    </div>
</div>
