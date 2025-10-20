import gentoo from '$lib/assets/gentoo.jpg'
import bscImage from '$lib/assets/bscImage.png'
import bscDesign from '$lib/assets/bsc_design.png'
import bscCmpHeader from '$lib/assets/bscCmpHeader.png'
import bscCmpScrolly from '$lib/assets/bscCmpScrolly.png'
import bscCmpYoutube from '$lib/assets/bscCmpYoutube.png'
import pf_cmp_cursor from '$lib/assets/pf_cmp_cursor.png'
import pf_layout from '$lib/assets/pf_layout.png'
import pf_cmp_term_1 from '$lib/assets/pf_cmp_term_1.png'
import pf_cmp_swiper from '$lib/assets/pf_cmp_swiper.png'
import pf_cmp_term_2 from '$lib/assets/pf_cmp_term_2.png'
import pf_dynamic from '$lib/assets/pf_dynamic.png'
import portfolioThumbnail from '$lib/assets/portfolio-thumbnail.png'
import pf_terminal from '$lib/assets/pf_terminal.webp'
import pf_term_video from '$lib/assets/terminal.webm'
import linux_arch from '$lib/assets/arch.png'
import linux_arch_vm from '$lib/assets/linux_arch_vm.png'
import linux_arch_vm_pacstrap from '$lib/assets/linux_arch_vm_pacstrap.png'
import linux_gentoo from '$lib/assets/linux_gentoo.png'
import linux_first from '$lib/assets/linux_first_gentoo.jpg'
import thinkpad_1 from '$lib/assets/thinkpad_1.jpg'
import thinkpad_2 from '$lib/assets/thinkpad_2.jpg'

// TODO: Add HTML content to posts

export const posts = [
	{
		slug: 'portfolio',
		title: 'Portfolio personnel',
		subject: 'Design et intégration web',
		skills: 'SvelteKit, Vite, Sass',
		type: 'Projet scolaire*',
		description: "<p>Ce portfolio est un projet scolaire, mais l'apprentissage de <span>SvelteKit</span> et <span>Vite</span> est une décision que j'ai prise pour élargir mes horizons au-delà du cadre du cours. <br><br> J'ai eu beaucoup de plaisir avec <span>Svelte</span>, c'est un framework agréable avec beaucoup de fonctionnalités qui rendent le développement web beaucoup plus plaisant.</p>",
		summary: "Le portfolio que vous êtes en train de regarder.",
		thumbnail: portfolioThumbnail,

		sections: [
			{
				type: 'carousel',
				title: "Pourquoi Svelte?",
				content: "<p>Le routage de <span>SvelteKit</span> permet de faire du contenu dynamique qui apparait sur plusieurs pages sans répéter de code.<br><br> La <span>réactivité</span> permet d'avoir du contenu HTML dynamique et réactif (comme dans le terminal ou le curseur). <br><br> Les <span>styles CSS isolés</span> permettent aussi de faire du HTML plus simple.</p>",
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
				content: "<p>C'est un terminal simple et fonctionnel, que j'ai eu beaucoup de plaisir à faire. Si vous connaissez un peu de Linux, il y a un <i>easter egg</i> ;).</p>",
				slides: [
					{
						image: pf_terminal,
						video: pf_term_video,
						caption: "Terminal",
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
		],
	},
	{
		slug: 'bsc',
		title: 'Baie-Sainte-Catherine',
		subject: 'Design et intégration web',
		skills: 'HTML, SCSS, JavaScript et Figma',
		type: 'Projet scolaire',
		description: "<p>Baie-Sainte-Catherine est une refonte du site d’une municipalité. J’ai fait le design du site avec <span>Figma</span> et l’intégration statique de la page d’accueil et de contact en <span>HTML</span>, <span>SCSS</span> et <span>JavaScript</span>.</p>",
		summary: "Refonte du site d’une municipalité. Conçu de A à Z du design jusqu’à l’intégration.",
		thumbnail: bscImage,
		clickable: true,
		sections: [
			{
				type: 'carousel',
				title: "Intégration",
				content: "<p>L’intégration se faisait avec l’aide de composantes <span>JavaScript</span> pour les <span>carrousels</span>, l’en-tête, et les animation de <span>scrollytelling</span>.</p> <br> <p>Les composantes sont flexibles et rendent le code plus simple et réutilisable.</p>",

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
				content: "<p>Bien que le design ne soit pas ma force principale, j’ai su quand même respecter les <span>principes</span> et appliquer une direction artistique pour créer un <span>site cohérent</span> qui marche sur mobile et sur desktop.</p>",
			},
		],
	},
	{
		slug: 'smog',
		title: 'Bataille contre le smog',
		subject: 'Conception de jeu',
		skills: 'C#, Unity',
		type: 'Projet scolaire',
		description: "<p>Baie-Sainte-Catherine est une refonte du site d’une municipalité. J’ai fait le design du site avec <span>Figma</span> et l’intégration statique de la page d’accueil et de contact en <span>HTML</span>, <span>SCSS</span> et <span>JavaScript</span>.</p>",
		summary: "Conception d’un jeu de ramassage de déchets avec des ennemis et des obstacles.",
		thumbnail: bscImage,
	},
	{
		slug: 'tek-it',
		title: 'Tek It',
		subject: 'Animation typographique',
		skills: 'After Effects',
		type: 'Projet scolaire',
		description: "<p>Baie-Sainte-Catherine est une refonte du site d’une municipalité. J’ai fait le design du site avec <span>Figma</span> et l’intégration statique de la page d’accueil et de contact en <span>HTML</span>, <span>SCSS</span> et <span>JavaScript</span>.</p>",
		summary: "Vidéo d’animation des paroles d’une chanson sous format de typographie cynétique.",
		thumbnail: bscImage,
	},
	{
		slug: 'gentoo-linux',
		title: 'Gentoo Linux',
		subject: 'Installation et configuration',
		skills: 'Linux',
		type: 'Projet personnel',
		description: "<p>Dans mes temps libres, j'aime configurer <span>Linux</span> et des programmes sur mon système pour avoir un environnement qui <span>répond à mes besoins</span> et qui me rend plus <span>confortable</span>, parce que je crois que le confort est vital à la productivité. <br><br> Cette page sert aussi de documentation de mon parcours.</p>",
		summary: "Configuration de mon système et mon expérience avec Linux",
		thumbnail: linux_gentoo,
		clickable: true,
		sections: [
			{
				type: 'carousel',
				title: "Humble Beginnings",
				image: linux_arch_vm,
				content: "<p>J'ai commencé mon expérience en Mai 2025 avec <span>Arch</span>, un des plus populaires, connu pour son aspect <span>Do-It-Yourself</span>, où il n'y a presque rien de préinstallé. <br><br> J'ai essayé (et échoué plusieurs fois) dans une <span>machine virtuelle</span> avant d'aller l'installer sur un vrai ordinateur (bare metal) deux mois plus tard.</p>",
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
				content: "<p>Mon expérience avec Gentoo était très différente par rapport à celle de Arch. J'ai exploré des concepts comme <span>l'encryption</span>, et j'ai vécu l'expérience d'installer Linux sur un portable. <br><br> Gentoo vient avec son lot de défis qui nous en apprend beaucoup plus sur Linux, alors c'était une&nbsp;<span>expérience d'apprentissage</span> beaucoup plus satisfaisante.</p>",
			},
			{
				type: 'carousel',
				title: "ThinkPad",
				content: "<p>J'ai acheté un <span>ThinkPad T480</span>. J'ai installé Gentoo dessus directement et maintenant je m'en sert pour quasiment tout. C'est devenu ma machine de travail que j'amène partout.</p>",
				slides: [
					{
						// TODO: change image
						image: linux_first,
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
