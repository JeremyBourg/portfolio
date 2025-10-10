<script>
import { onMount } from "svelte";

let isActive = false;
let cmd = $state("");
let cursorVisible = $state(false);
let output = $state("");
let pwd = "/";

const handleclick = (event) => {
	const terminal = document.getElementById("terminal");

	if (terminal && terminal.contains(event.target)) {
		isActive = true;
	}
	else {
		isActive = false;
	}
}

const send = () => {
	console.log("command sent: " + cmd);

	if(cmd == "help") {
		output += "> " + cmd + "\nCommandes: \nhelp - affiche cette liste\nls - Répertorie les fichiers\ncd [DOSSIER] - Change de dossier\nclear - Nettoye le terminal\nopen [FICHIER] - Ouvre un fichier\n";
	}
	else if(cmd == "sudo rm -rf /") {
		const container = document.getElementById("term-container");
		container.style.opacity = "0";
		isActive = false;
	}
	else if(cmd == "clear") {
		output = "";
	}
	else {
		output += "> " + cmd + "\nCommande inconnue.\nFaites 'help' pour voir la liste des commandes.\n"
	}
	cmd = "";
}

const keydown = (event) => {
	if (isActive) {
		event.preventDefault();
		if (event.key == "Backspace") {
			cmd = cmd.substring(0, cmd.length - 1);
		}
		else if (event.key == "Enter") {
			send();
		}
		else if (event.key.length == 1) {
			cmd += event.key;
		}
	}
}

const blink = () => {
	if (isActive) {
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
			<pre>{output}</pre>
		{/if}
		<p>&gt; {cmd}{#if cursorVisible}|{/if}</p>
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

#terminal p, #terminal pre {
	font-weight: 200;
	font-size: var(--font-size-extra);
}
</style>
