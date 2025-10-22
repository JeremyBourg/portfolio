<script>
import CTA from "$lib/components/CTA.svelte";

let name = $state('');
let email = $state('');
let message = $state('');
let response = $state(null);

const submitForm = async (event) => {
	event.preventDefault();
	const data = new URLSearchParams();
	data.append('name', name);
	data.append('email', email);
	data.append('message', message);

	const request = await fetch('/form.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: data
	});

	if (!request.ok) {
		console.error('HTTP Error:', request.status);
		return;
	}

	const result = await request.json();
	if (result.success) {
		response = { success: true };
	}
	else {
		response = { success: false, ...result };
	}
}

const reset = () => {
	response = null;
	name = '';
	email = '';
	message = '';
	window.location.reload();
}

</script>

<div class="wrapper">
{#if response?.databaseError}
<section class="response">
	<h1>Oups!</h1>
	<div>
	<p>Désolé. Il y a un problème avec le serveur. Ce n'est pas de votre faute.</p>
	<br>
	<p>S'il vous plaît veuillez me contacter par courriel et je règlerais le problème dès que possible.</p>
	<br>
	{#if response?.errorCode}
	<p style="font-size: var(--font-size-extra)">Code d'erreur: {response?.errorCode}</p>
	{/if}
	</div>
	<CTA href="/" label="Retourner à l'accueil" />
</section>
{:else if !response?.success}
    <h1>On se parle?</h1>
    <p>Vous avez des questions ou un projet en tête? Je suis là pour transformer vos idées en réalité, sans bugs (ou presque)!</p>
    <form onsubmit={submitForm}>
		{#if response?.missing}<p class="error">Tous les champs sont requis</p>{/if}
        <fieldset>
			<div id="input-container">
				<input name="name" type="text" placeholder="Nom" bind:value={name} class={response?.name == '' && response?.missing ? "error" : ''}>
			</div>
			<div id="input-container">
				<input name="email" type="email" placeholder="Courriel" bind:value={email} class={response?.email == '' && response?.missing ? "error" : ''}>
			</div>
			<div id="message-container">
				<textarea
				name="message"
				id="message"
				placeholder="Message"
				bind:value={message}
				class={response?.message == '' && response?.missing ? "error" : ''}
				></textarea>
			</div>
        </fieldset>
        <button id="submit">
            <p>Soumettre</p>
        </button>
    </form>
{:else}
<section class="response">
	<h1>Merci de m'avoir contacté!</h1>
	<div>
		<p>Au plaisir d'échanger avec vous!</p>
	</div>
	<div onclick={reset}>
	<CTA href="/contact" label="Retourner au formulaire" />
	</div>
</section>
{/if}

    <div class="info">
        <div>
            <p>Courriel:</p>
            <p>jer.bourg2@gmail.com</p>
        </div>
        <div>
            <p>Téléphone:</p>
            <p>(438) 518-7401</p>
        </div>
        <div>
            <p>CV:</p>
			<!-- TODO: real cv -->
            <a href="#" download>Télécharger (PDF)</a>
        </div>
    </div>
</div>

<style>
:root {
	--color-error: #F74844;
}
p.error {
	color: var(--color-error);
}

input.error, textarea.error {
	border-color: var(--color-error);
}

.wrapper > h1 {
    padding-top: 100px;
    margin-bottom: 50px;
}

section.response {
    padding: 100px 0;
	div {
		margin-bottom: 100px;
	}
}

form {
	padding: 50px 0;

    & > * + * {
        margin-top: 20px;
    }

    * {
        outline: none;
    }
}

a {
    font-size: var(--font-size-p);
    color: var(--color-primary);
    text-decoration: underline;
}

fieldset {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    border: none;
    padding: 0;
    margin: 0;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

    input, textarea {
        padding: 16px;
		width: 100%;
        background-color: transparent;
        border: 4px var(--color-secondary) solid;
        font-family: var(--font-secondary);
        font-size: var(--font-size-p);
        color: var(--color-primary);
    }

    input::placeholder, textarea::placeholder {
        font-family: var(--font-secondary);
        font-size: var(--font-size-p);
        color: var(--color-tertiary);
    }
}

#message-container {
    grid-column: 1 / -1;
	textarea {
		height: 150px;
		resize: vertical;
	}
}

.info {
    display: flex;
    justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		gap: 20px;
	}
}

#submit {
    cursor: pointer;
    position: relative;
    padding: 16px 32px;
    border: 4px solid var(--color-secondary);
    overflow: hidden;
    display: inline-block;
	background-color: transparent;

    & > * {
        cursor: pointer;
        font-family: var(--font-primary);
        background-color: transparent;
        border: 0;
        color: var(--color-secondary);
        font-size: var(--font-size-btn);
        font-weight: 700;
        letter-spacing: unset;
        transition: color 0.3s ease-out;
    }
}
#submit::before {
	content: '';
	position: absolute;
	z-index: -1;
	inset: -10px;
	background-color: var(--color-secondary);

	transform: translateX(-100%);
	transition: transform 0.3s ease-out;
}

#submit:hover {
    & > * {
        color: var(--color-primary);
    }

    &::before {
        transform: translateX(0);
    }
}
</style>
