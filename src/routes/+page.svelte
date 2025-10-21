<script>
import Parallax from '$lib/components/Parallax.svelte';
import photo from '$lib/assets/photo-jeremy.webp';
import gentoo from '$lib/assets/gentoo.webp';
import CTA from '$lib/components/CTA.svelte';
import Term from '$lib/components/Term.svelte';
</script>

<Parallax />

<div class="wrapper">
		<div class="small">
			<img src="{photo}" alt="">
		</div>

		<div data-speed="0.85">
			<h1 data-speed="1.05">À propos</h1>
			<h2 data-speed="1.05">Programmeur junior</h2>
			<p>Salut! Moi c’est <span>Jérémy Bourg.</span></p>
			<br>
			<p>Je suis finissant en <span>Techniques d’Intégration Multimédia</span>. Je cherche un stage en programmation.</p>
			<br>
			<p>Je vise à apprendre des technologies back-end, mais je suis aussi ouvert au front-end.</p>

			<div style="margin-top: 100px;" data-speed="1.1">
				<CTA label={"Voir les projets"} href={"/projets"}/>
			</div>
		</div>

		<div>

			<div data-speed="0.85">
				<h2 data-speed="1.05">Compétences et languages</h2>
				<p><span>HTML</span>, (S)<span>CSS</span>, <span>JavaScript</span>, et <span>Svelte</span>.</p>
				<br>
				<p>En dehors de la programmation, j'ai des compétences en <span>montage vidéo</span> et en <span>animation 2D</span></p>
				<br>
				<p>Dans mes temps libres, j'apprends le <span>PHP</span>, Go, C et Bash</p>
			</div>
		</div>

		<div class="small right">
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

		<div>
			<blockquote data-speed="0.9"><i>"Un idiot admire la complexité, un génie admire la simplicité"</i></blockquote>
			<h2 data-speed="1.05">Intérêts</h2>
			<p>En tant que <span>Mega Nerd™</span>, mes intérêts vont avec.</p>
			<br>
			<ul>
				<li><span>Programmation</span>, logiciels, securité et réseautique</li>
				<li>Appréciateur du <span>libre et open-source</span></li>
			</ul>
			<br>
			<ul>
				<li>Linguistique</li>
				<li>Philosophie</li>
				<li>Manga/anime</li>
				<li>Jeux de puzzles</li>
			</ul>
		</div>

		<div class="small right terminal-parent" data-speed="0.80">
			<Term />
		</div>
</div>

<div class="wrapper">
	<div id="software" data-speed="0.85">
		<h2 data-speed="1.05">Logiciels</h2>
		<ul>
			<li><span>Linux</span>, principalement Gentoo</li>
			<li>(neo)<span>vim</span>, le meilleur éditeur de texte</li>
			<li><span>tmux</span>, presque tout se passe dans mon terminal.</li>
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
	gap: 100px;

	grid-row-gap: 12.5rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-row-gap: 7.5rem;
	}
}

h2 {
	margin-bottom: 1.5rem;
}

span {
	color: var(--color-secondary);
}

blockquote {
	font-family: var(--font-primary);
	font-size: var(--font-size-quote);
	margin: 0 20% 20% 20%;
	font-weight: 200;
	letter-spacing: -5%;

	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		margin: 5% 20%;
	}
}

#qualities {
	display: flex;
	flex-direction: column;
	gap: var(--font-size-h1);
}
#software {
	margin: 100px 0;
	grid-column: 2 / -1;
	position: relative;

	@media screen and (max-width: 768px) {
		grid-column: unset;
	}
}

#software #gentoo {
	position: absolute;
	z-index: -1;
	right: 67.5%;
	bottom: -12.5%;
	width: 100%;

	@media screen and (max-width: 768px) {
		position: unset;
		margin-top: 5rem;
	}
}

.small {
	width: 87%;

	@media screen and (max-width: 1100px) {
		width: 100%;
	}
}

.right {
	margin-left: auto;
}

li {
	font-size: var(--font-size-p);
	letter-spacing: -5%;
}

li::before {
	content: "\2013";
	padding-inline-end: 1%;
}


.terminal-parent {
	@media screen and (max-width: 768px) {
		display: none;
	}
}
</style>
