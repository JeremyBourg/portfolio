<script>
import Parallax from '$lib/components/Parallax.svelte';
import photo from '$lib/assets/photo-jeremy.jpg';
import gentoo from '$lib/assets/gentoo.jpg';
import CTA from '$lib/components/CTA.svelte';
import Term from '$lib/components/Term.svelte';
</script>

<Parallax />

<div class="wrapper">
	<div class="first">
		<div class="small">
			<img src="{photo}" alt="">
		</div>

		<h1 data-speed="0.95">À propos</h1>

		<div data-speed="0.85">
			<h2 data-speed="1.05">Compétences et languages</h2>
			<p>Je suis confortable en <span>HTML</span>, (S)<span>CSS</span>, <span>JavaScript</span> et <span>PHP</span>.</p>
			<br>
			<p>Je sais utiliser <span>Git</span>, <span>FTP</span>, et <span>Wordpress</span>.</p>
			<br>
			<p>J'apprend présentement dans mes temps libres d'autres technologies comme <span>Svelte</span>, Go et C</p>
		</div>

		<blockquote data-speed="0.8"><i>“Un idiot admire la complexité, un génie admire la simplicité”</i></blockquote>

		<div>
			<h2 data-speed="1.05">Intérêts</h2>
			<p>En tant que <span>Mega Nerd™</span>, mes intérêts vont avec.</p>
			<br>
			<ul>
				<li><span>Programmation</span>, logiciels, securité et réseautique</li>
				<li>Appriéciateur du <span>libre et open-source</span></li>
			</ul>
			<br>
			<ul>
				<li>Linguistique</li>
				<li>Philosophie</li>
				<li>Manga/anime</li>
				<li>Jeux de puzzles</li>
			</ul>
		</div>
	</div>

	<div class="second">
		<div data-speed="0.85">
			<h2 data-speed="1.05">Programmeur junior</h2>
			<p>Salut! Moi c’est <span>Jérémy Bourg.</span></p>
			<br>
			<p>Je suis finissant en <span>Techniques d’Intégration Multimédia</span>. Je cherche un stage en programmation.</p>
			<br>
			<p>Je vise à apprendre des technologies front-end et back-end.</p>

			<div style="margin-top: 100px;" data-speed="1.1">
				<CTA label={"Voir les projets"} href={"/projets"}/>
			</div>
		</div>

		<div class="small">
			<h2 data-speed="1.05">Qualités</h2>
			<div id="qualities">
				<div>
					<h3><span>Résolution de problèmes</span></h3>
					<p>Mon passe-temps #1</p>
				</div>
				<div>
					<h3><span>Curiosité</span></h3>
					<p>Une grande soif d'apprendre</p>
				</div>
				<div>
					<h3><span>Minutie</span></h3>
					<p>Souci du détail et des bugs</p>
				</div>
			</div>
		</div>

		<div class="small" data-speed="0.75">
			<Term />
		</div>
	</div>
</div>

<div class="wrapper">
	<div id="software" data-speed="0.85">
		<h2 data-speed="1.05">Logiciels</h2>
		<ul>
			<li><span>Linux</span>, principalement Gentoo</li>
			<li>(neo)<span>vim</span>, le meilleur éditeur de texte</li>
			<li><span>lazygit</span> pour le Git</li>
			<li><span>lftp</span> et FileZilla pour le FTP</li>
		</ul>
		<br>
		<p>J'ai aussi de l'expérience avec <span>Figma</span>, <span>After Effects</span> et <span>Premiere Pro</span>.</p>

		<div id="gentoo" data-speed="0.90">
			<img src="{gentoo}" alt="">
			<p class="extra">Mon portable.</p>
		</div>
	</div>
</div>

<div class="wrapper" style="display: flex; align-items: center; justify-content: center; margin-top: 100px;">
	<CTA label={"Voir les projets"} href={"/projets"}/>
</div>

<style>
.wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
}

.first, .second {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 100px;

	& * {
		grid-column: 1 / -1;
	}
}

h2:first-child {
	margin-bottom: 24px;
}

span {
	color: var(--color-secondary);
}

blockquote {
	font-family: var(--font-primary);
	font-size: var(--font-size-quote);
	margin: 50px 100px;
	font-weight: 200;
	letter-spacing: -5%;
}

#qualities {
	display: flex;
	flex-direction: column;
	gap: 64px;
}
#software {
	margin: 100px 0;
	grid-column: 2 / -1;
	position: relative;
}

#software #gentoo {
	position: absolute;
	z-index: -1;
	right: 67.5%;
	bottom: -12.5%;
	width: 100%;
}

.first .small {
	grid-column: 1 / span 5;
}

.second .small {
	grid-column: 2 / -1;
}

li {
	font-size: var(--font-size-p);
	letter-spacing: -5%;
}

li::before {
	content: "\2013";
	padding-inline-end: 1%;
}

</style>
