import bscImage from '$lib/assets/bscImage.webp';
import bscDesign from '$lib/assets/bsc_design.webp';
import bscCmpHeader from '$lib/assets/bscCmpHeader.webp';
import bscCmpScrolly from '$lib/assets/bscCmpScrolly.webp';
import bscCmpYoutube from '$lib/assets/bscCmpYoutube.webp';
import pf_cmp_cursor from '$lib/assets/pf_cmp_cursor.webp';
import pf_layout from '$lib/assets/pf_layout.webp';
import pf_cmp_term_1 from '$lib/assets/pf_cmp_term_1.webp';
import pf_cmp_swiper from '$lib/assets/pf_cmp_swiper.webp';
import pf_cmp_term_2 from '$lib/assets/pf_cmp_term_2.webp';
import pf_dynamic from '$lib/assets/pf_dynamic.webp';
import portfolioThumbnail from '$lib/assets/portfolio-thumbnail.webp';
import pf_terminal from '$lib/assets/pf_terminal.webp';
import pf_term_video from '$lib/assets/terminal.webm';
import pf_backend from '$lib/assets/pf_backend.webp';
import pf_more_posts from '$lib/assets/pf_more_posts.webp';
import linux_arch from '$lib/assets/arch.webp';
import linux_arch_vm from '$lib/assets/linux_arch_vm.webp';
import linux_arch_vm_pacstrap from '$lib/assets/linux_arch_vm_pacstrap.webp';
import linux_gentoo from '$lib/assets/linux_gentoo.webp';
import linux_first from '$lib/assets/linux_first_gentoo.webp';
import thinkpad_1 from '$lib/assets/thinkpad_1.webp';
import thinkpad_2 from '$lib/assets/thinkpad_2.webp';
import thinkpad_3 from '$lib/assets/thinkpad_3.webp';
import tekit_insp from "$lib/assets/tekit_insp.webp";
import tekit from "$lib/assets/tekit.webm";
import tekit_ae from "$lib/assets/tekit_ae.webp";
import tekit_thumb_anim from "$lib/assets/tekit_thumb_anim.webm";
import smog_thumb from "$lib/assets/smog_thumb.webp";
import smog_cs from "$lib/assets/smog_cs.webp";
import smog_editor from "$lib/assets/smog_editor.webp";
import smog_postproc from "$lib/assets/smog_postproc.webp";
import smog_props from "$lib/assets/smog_props.webp";
import smog_gameplay from "$lib/assets/smog_gameplay.webm";

export const posts = [

	{
		slug: 'portfolio',
		title: 'Portfolio personnel',
		subject: 'Design et intégration web',
		skills: 'SvelteKit, Vite, Sass',
		type: 'Projet scolaire*',
		description: "<p>J'ai fait ce portfolio non seulement dans le but de montrer \
		mes compétences, mais aussi mon <span>amour de la programmation</span>.<br><br>\
		Ce portfolio est un projet scolaire, mais l'apprentissage de \
		<span>SvelteKit</span> et <span>Vite</span> \
		est une décision que j'ai prise pour élargir mes horizons au-delà du cadre du cours. \
		<br><br> J'ai eu beaucoup de plaisir avec \
		<span>Svelte</span>, \
		c'est un framework agréable avec beaucoup de fonctionnalités \
		qui rendent le développement web beaucoup plus plaisant.</p>",
		summary: "Le portfolio que vous êtes en train de regarder.",
		href: "https://github.com/JeremyBourg/portfolio",
		label: "Voir sur GitHub",
		thumbnail: portfolioThumbnail,

		sections: [
			{
				type: 'carousel',
				title: "Pourquoi Svelte?",
				content: "<p>Le routage de <span>SvelteKit</span> permet de faire du contenu dynamique \
				qui apparait sur plusieurs pages sans répéter de code. \
				<br><br>La <span>réactivité</span> permet d'avoir du contenu HTML \
				dynamique et réactif (comme dans le terminal ou le curseur).\
				<br><br>Les <span>styles CSS isolés</span> \
				permettent aussi de faire du HTML plus simple.</p>",
				slides: [
					{
						image: pf_layout,
						caption: "Propriétés à travers tout le site",
					},
					{
						image: pf_cmp_swiper,
						caption: "Carousel dynamique",
					},
					{
						image: pf_cmp_cursor,
						caption: "Curseur réactif",
					},
					{
						image: pf_dynamic,
						caption: "Contenu dynamique",
					},
				]
			},
			{
				type: "carousel",
				title: "Terminal",
				content: "<p>C'est un terminal simple et fonctionnel, que j'ai eu \
				beaucoup de plaisir à faire. Si vous connaissez un peu de \
				<span>shell</span>, il y a un <i>easter egg</i> ;).</p>",
				slides: [
					{
						image: pf_terminal,
						video: pf_term_video,
						caption: "Vidéo du terminal",
					},
					{
						image: pf_cmp_term_1,
						caption: "Terminal",
					},
					{
						image: pf_cmp_term_2,
						caption: "Réactivité du terminal",
					},
				]
			},
			{
				type: "modal",
				title: "Back-end",
				image: pf_backend,
				content: "<p>J'ai appris des concepts de <span>SQL</span> comme les <span>paramètres</span> et \
				les <span>statements</span>. <br><br>\
				J'ai choisi de mettre un peu de <span>server-side rendering</span> \
				pour les messages d'erreurs ou de validation, parce que c'est plus flexible (et&nbsp;intéressant).</p>"
			},
			{
				type: "modal",
				image: pf_more_posts,
				title: "Dynamisme",
				content: "<p>Le carousel au bas de la page n'a évidemment <span>pas été fait manuellement</span>. \
				Les projets du site sont tous <span>dynamiques</span>.<br><br> \
				Il y a un même gabarit pour tous les projets, et les contenus sont insérés avec <span>Svelte</span>.</p>"
			}
		],
	},

	{
		slug: 'tek-it',
		title: 'Tek It',
		subject: 'Animation typographique',
		skills: 'After Effects',
		type: 'Projet scolaire',
		description: "<p>Pour ce projet, il fallait réaliser une <span>animation</span> des paroles d'une chanson, j'ai choisi la chanson <span>Tek It</span> par Cafuné. \
		<br><br>J'ai eu beaucoup de plaisir à faire ce travail et j'ai beaucoup appris sur \
		<span>After Effects</span> et les <span>principes d'animation</span>.</p>",
		summary: "Vidéo d’animation des paroles d’une chanson sous format de typographie cynétique.",
		video: true,
		thumbnail: tekit_thumb_anim,
		sections: [
			{
				type: "modal",
				title: "Inspiration",
				image: tekit_insp,
				content: "<p>Je suis allé prendre de l'inspiration en ligne avec\
				des éléments ou des styles d'artistes que j'aime, entre autre \
				<a class='external' \
				href='https://youtube.com/stcubing' \
				target='_blank'>\
				stcubing</a> et \
				<a class='external' \
				href='https://www.youtube.com/channel/UCKjGF3701G3-IonrAq_e2JQ' \
				target='_blank'>\
				Pinckus</a>.<br><br>\
				Voici les plus grandes inspirations, en haut à gauche, \
				<a class='external' \
				href='https://www.youtube.com/watch?v=8Du36_QvEDs' \
				target='_blank'>\
				All My Friends par Pinckus</a>, en bas à gauche, \
				<a class='external' \
				href='https://www.youtube.com/watch?v=iKWUcsAjdYE' \
				target='_blank'>\
				Icarus par stcubing</a>.<br><br>\
				À droite, c'est mon animation.</p>",
			},
			{
				type: "modal",
				title: "Réalisation",
				image: tekit_ae,
				content: "<p>J'ai essayé de créer une <span>continuité</span> où-est-ce que \
				les éléments se suivent d'une scène a l'autre, et que les changements de scène \
				ne soient pas trop évidents. J'ai beaucoup misé sur les <span>transitions</span>.<br><br>\
				J'ai simplement \
				mis une <span>panoplie d'idées</span> et de concepts dans le projet, et ça a créé un résultat dont je suis fier.</p>"
			},
			{
				type: "video",
				title: "Vidéo",
				video: tekit,
			}
		]
	},

	{
		slug: 'bsc',
		title: 'Baie-Sainte-Catherine',
		subject: 'Design et intégration web',
		skills: 'HTML, SCSS, JavaScript et Figma',
		type: 'Projet scolaire',
		description: "<p>Baie-Sainte-Catherine est une refonte du site d’une municipalité. \
		J’ai fait le design du site avec <span>Figma</span> et l’intégration statique \
		de la page d’accueil et de contact en <span>HTML</span>, <span>SCSS</span> et \
		<span>JavaScript</span>.</p>",
		summary: "Refonte du site d’une municipalité. Conçu de A à Z du design jusqu’à l’intégration.",
		thumbnail: bscImage,
		href: "https://jbourg.dectim.ca/baie-sainte-catherine/",
		label: "Voir le site en ligne",
		clickable: true,
		sections: [
			{
				type: 'carousel',
				title: "Intégration",
				content: "<p>L’intégration se faisait avec l’aide de composantes \
				<span>JavaScript</span> pour les <span>carrousels</span>, l’en-tête, \
				et les animation de <span>scrollytelling</span>.</p> <br> \
				<p>Les composantes sont flexibles et rendent le code plus simple et réutilisable.</p>",

				slides: [
					{
						image: bscCmpHeader,
						caption: 'Composante Header',
					},
					{
						image: bscCmpScrolly,
						caption: 'Composante Scrolly',
					},
					{
						image: bscCmpYoutube,
						caption: 'Composante Youtube',
					},
				],
			},
			{
				type: 'modal',
				title: "Design",
				image: bscDesign,
				content: "<p>Bien que le design ne soit pas ma force principale, \
				j’ai su quand même respecter les <span>principes</span> et \
				appliquer une direction artistique pour créer un <span>site cohérent</span> \
				qui marche sur mobile et sur desktop.</p>",
			},
		],
	},

	{
		slug: 'smog',
		title: 'Bataille contre le smog',
		subject: 'Conception de jeu',
		skills: 'C#, Unity',
		type: 'Projet scolaire',
		description: "<p> Un jeu en <span>première personne</span> où il faut ramasser des déchets en évitant \
		des ennemis et des obstacles. J'ai appris comment travailler avec l'<span>IA</span> \
		dans un jeu et la gestion de points et de temps.</p>",
		summary: "Conception d’un jeu de ramassage de déchets avec des ennemis et des obstacles.",
		thumbnail: smog_thumb,
		href: "https://github.com/JeremyBourg/smogfight",
		label: "Voir sur GitHub",
		sections: [
			{
				type: "carousel",
				title: "Conception",
				content: "<p>Je suis allé avec un style très <span>simple</span> et <i>low-poly</i>. J'aimais vraiment l'idée de rajouter une route, car je \
				trouvais que c'était une manière <span>organique</span> de rajouter des obstacles. <br><br>\
				J'ai aussi opté de mettre des <span>particules</span> dans le ciel pour simuler \
				du smog.</p>",
				slides: [
					{
						image: smog_editor,
						caption: "Création du terrain",
						position: "center",
					},
					{
						image: smog_props,
						caption: "Ajout des assets",
						position: "center",
					},
					{
						image: smog_postproc,
						caption: "Post-Processing",
						position: "center",
					},
				]
			},
			{
				type: "modal",
				title: "Programmation",
				image: smog_cs,
				content: "<p>J'ai appris des nouveaux concepts de <span>Unity</span> et \
				<span>C#</span>, notamment l'IA (à droite). <br><br>\
				J'ai aussi travaillé avec les <span>GameEvents</span> et les <span>coroutines</span>.</p>",
			},
			{
				type: "video",
				title: "Vidéo du jeu",
				video: smog_gameplay,
			},
		]
	},

	{
		slug: 'gentoo-linux',
		title: 'Gentoo Linux',
		subject: 'Installation et configuration',
		skills: 'GNU/Linux',
		type: 'Projet personnel',
		description: "<p>Dans mes temps libres, j'aime configurer <span>Linux</span> \
		et des programmes sur mon système pour avoir un environnement qui \
		<span>répond à mes besoins</span> et qui me rend plus <span>confortable</span>, \
		parce que je crois que le confort est vital à la productivité. <br><br> \
		Cette page sert aussi de documentation de mon parcours.</p>",
		summary: "Configuration de mon système et mon expérience avec GNU/Linux",
		thumbnail: linux_gentoo,
		clickable: true,
		sections: [
			{
				type: 'carousel',
				title: "Humble Beginnings",
				image: linux_arch_vm,
				content: "<p>J'ai commencé mon expérience en Mai 2025 avec <span>Arch</span>, \
				un des plus populaires, connu pour son aspect <span>Do-It-Yourself</span>, \
				où il n'y a presque rien de préinstallé. <br><br> J'ai essayé \
				(et échoué plusieurs fois) dans une <span>machine virtuelle</span> \
				avant d'aller l'installer sur un vrai ordinateur (bare metal).</p>",
				slides: [
					{
						image: linux_arch_vm_pacstrap,
						caption: "Première tentative",
					},
					{
						image: linux_arch_vm,
						caption: "Linux dans une machine virtuelle",
					},
					{
						image: linux_arch,
						caption: "Arch sur bare metal",
					},
				],
			},
			{
				type: 'modal',
				title: "Gentoo",
				image: linux_first,
				content: "<p>Mon expérience avec Gentoo était très différente par rapport \
				à celle de Arch. J'ai exploré des concepts comme <span>l'encryption</span>, \
				et j'ai vécu l'expérience d'installer Linux sur un portable. <br><br> \
				Gentoo vient avec son lot de défis qui nous en apprend beaucoup plus sur Linux, \
				alors c'était une&nbsp;<span>expérience d'apprentissage</span> \
				beaucoup plus satisfaisante.</p>",
			},
			{
				type: 'carousel',
				title: "ThinkPad",
				content: "<p>J'ai acheté un <span>ThinkPad T480</span>. J'ai installé \
				Gentoo dessus directement et maintenant je m'en sert pour quasiment tout. \
				C'est devenu ma machine de travail que j'amène partout.</p>",
				slides: [
					{
						image: thinkpad_3,
						position: "center",
						caption: "Mon ThinkPad",
					},
					{
						image: thinkpad_2,
						caption: "Énorme mise à jour (j'ai trop attendu)",
					},
					{
						image: thinkpad_1,
						caption: "Moi sur mon ThinkPad au Webjam",
					},
				],
			},
		]
	},

]
