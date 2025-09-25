<script>
    import Parallax from '$lib/components/Parallax.svelte';
    import photo from '$lib/assets/photo-jeremy.jpg';
</script>

<style>

.wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.first, .second {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    & div {
        grid-column: 1 / -1;
    }
}

span {
    color: var(--color-secondary);
}

.first .small {
    grid-column: 1 / span 5;
}

.second .small {
    grid-column: 2 / -1;
}

</style>

<Parallax />

<div class="wrapper">
    <div class="first">
        <div class="small">
            <img src="{photo}" alt="">
        </div>

        <div>
            <h1>Ce qui me définit</h1>
        </div>
    </div>

    <div class="second">
        <div>
            <h2>Développeur web</h2>
            <p>Salut! Moi c’est <span>Jérémy Bourg.</span></p>
            <br>
            <p>Je suis finissant en <span>Techniques d’Intégration Multimédia</span>. Je cherche un stage en développement web.</p>
            <br>
            <p>Je vise à apprendre des technologies front-end et back-end.</p>
        </div>

        <div class="small">
            <h2>Qualités</h2>
        </div>
    </div>
</div>
