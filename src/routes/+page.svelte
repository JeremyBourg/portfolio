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

    & * {
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

        <h1>Ce qui me définit</h1>

        <div>
            <h2>Compétences et languages</h2>
            <p>Je suis confortable en <span>HTML</span>, (S)<span>CSS</span>, <span>JavaScript</span> et <span>PHP</span>.</p>
            <br>
            <p>Je sais utiliser <span>Git</span>, <span>FTP</span>, et <span>Wordpress</span>.</p>
            <br>
            <p>J'apprend présentement dans mes temps libres d'autres technologies comme <span>Svelte</span>, Go et C</p>
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
            <div id="qualities">
                <div>
                    <h3>Résolution de problèmes</h3>
                    <p>Mon passe-temps #1</p>
                </div>
                <div>
                    <h3>Curiosité</h3>
                    <p>Une grande soif d'apprendre</p>
                </div>
                <div>
                    <h3>Résolution de problèmes</h3>
                    <p>Mon passe-temps #1</p>
                </div>
            </div>
        </div>
    </div>
</div>
