<script>
import { onMount } from "svelte";

let locked = false;
let active = false;
let input = $state("");
let cursorVisible = $state(false);
let output = $derived("");
let pwd = "/";
const maxLines = 13;

const redirects = {
	"/": {
		"index": "/",
		"projets": "/projets",
		"contact": "/contact",
	},
	"/projets": {
		"portfolio": "/projets/portfolio",
		"bsc": "/projets/bsc",
		"smog": "/projets/smog",
		"tek-it": "/projets/tek-it",
		"timconf": "/projets/timconf",
	}
}

const handleclick = (event) => {
	const terminal = document.getElementById("terminal");

	if (!locked && terminal && terminal.contains(event.target)) {
		active = true;
	}
	else {
		active = false;
	}
}

const trimHtmlExtension = (args) => {
	return args.endsWith('.html') ? args.slice(0, -5) : args;
};


const send = () => {
	const idx = input.indexOf(" ");
	let args = "";
	let cmd = input;

	if (idx > 0) {
		// get everything after space
		args = input.substring(idx + 1);
		cmd = input.substring(0, idx);
	}

	output += "> " + input + "\n";

	if(input == "sudo rm -rf /") {
		const container = document.getElementById("term-container");
		container.style.opacity = "0";
		active = false;
		locked = true;
		output = "";
		input = "";
		return;
	}

	switch(cmd) {
		case "help":
			output += "Commandes: \nhelp - affiche cette liste\nls - Répertorie les fichiers\ncd [DOSSIER] - Change de dossier\nclear - Nettoye le terminal\nopen [FICHIER] - Ouvre un fichier\n";
			break;

		case "cd":
			if (args.length == 0) {
				output += "Utilisation: cd [DOSSIER]\n";
			}
			else if (pwd == "/" && args == "projets" || pwd == '/' && args == "projets/") {
				pwd = "/projets";
			}
			else if (args == "..") {
				pwd = "/";
			}
			else {
				output += args + ": Ce dossier n'existe pas\n";
			}
			break;

		case "pwd":
			output += pwd + "\n";
			break;

		case "clear":
			output = "";
			break;

		case "ls":
			if (pwd == "/") {
				output += "index.html\n";
				output += "contact.html\n";
				output += "projets.html\n";
				output += "projets/\n";
			}
			else if (pwd == "/projets") {
				output += "portfolio.html\n";
				output += "bsc.html\n";
				output += "smog.html\n";
				output += "tek-it.html\n";
				output += "timconf.html\n";
			}
			else {
				pwd == "/";
			}
			break;
		
		case "open":
			if (args == "") {
				output += "Utilisation: open [FICHIER]";
				break;
			}

			args = trimHtmlExtension(args);
			const redirectURL = redirects[pwd]?.[args];

			if (redirectURL) {
				window.location.href = redirectURL;
			}
			else {
				output += "Fichier nonexistant\n";
			}
			break;

		case "":
			break;

		default:
			output += "Commande inconnue.\nFaites 'help' pour voir la liste des commandes.\n"
			break;
	}

	update();
	input = "";
}

const update = () => {
	const lines = output.split('\n');
	if(lines.length > maxLines) {
		output = lines.slice(lines.length - maxLines).join('\n');
	}
}

const keydown = (event) => {
	if (active) {
		event.preventDefault();
		if (event.key == "Backspace") {
			input = input.substring(0, input.length - 1);
		}
		else if (event.key == "Enter") {
			send();
		}
		else if (event.key.length == 1) {
			input += event.key;
		}
	}
}

const blink = () => {
	if (active) {
		cursorVisible = !cursorVisible;
	}
	else {
		cursorVisible = false;
	}
}

onMount(() => {
	setInterval(blink, 500);
})

</script>

<svelte:window onkeydown={keydown} onclick={handleclick} />

<div id="term-container">
	<p class="extra">Mini-terminal</p>

	<div id="terminal">
		{#if output}
			{#each output.split('\n') as line}
				<p class="{line.startsWith('>') ? '' : line.endsWith('/') ? "term-color2" : line.endsWith(".html") ? "term-color1" : ""}">{line}</p>
			{/each}
		{/if}
		<p>&gt; {input}{#if cursorVisible}_{/if}</p>
	</div>

	<p class="extra">Essaye-le! Tape 'help'</p>
</div>

<style>
#term-container {
	display: flex;
	flex-direction: column;
	gap: 8px;
	transition: opacity 0.3s ease;

	p:last-child {
		align-self: flex-end;
	}
}

#terminal {
	background-color: var(--color-black);
	border: 2px var(--color-primary) solid;
	overflow: hidden;

	padding: 8px;

	height: 20em;

	.term-color1, .term-color2 {
		font-weight: 600;
	}

	.term-color1 {
		color: var(--color-secondary);
	}

	.term-color2 {
		color: var(--color-term2);
	}
}

#terminal p {
	font-weight: 200;
	font-size: var(--font-size-extra);
}
</style>
