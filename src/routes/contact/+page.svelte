<script>
import CTA from "$lib/components/CTA.svelte";
let { data, form } = $props();
</script>

<div class="wrapper">
{#if !form?.success}
    <h1>On se parle?</h1>
    <p>Vous avez des questions ou un projet en tête? Je suis là pour transformer vos idées en réalité, sans bugs (ou presque)!</p>
    <form method="POST">
		{#if form?.missing}<p class="error">Tous les champs sont requis</p>{/if}
        <fieldset>
			<div id="input-container">
				<input name="name" type="text" placeholder="Nom" value={form?.name ?? ''} class={form?.name == '' && form?.missing ? "error" : ''}>
			</div>
			<div id="input-container">
				<input name="email" type="email" placeholder="Courriel" value={form?.email ?? ''} class={form?.email == '' && form?.missing ? "error" : ''}>
			</div>
			<div id="message-container">
				<textarea
				name="message"
				id="message"
				placeholder="Message"
				value={form?.message ?? ''}
				class={form?.message == '' && form?.missing ? "error" : ''}
				></textarea>
			</div>
        </fieldset>
        <div id="submit">
            <button>Soumettre</button>
        </div>
    </form>
{:else}
<section class="success">
	<h1>Merci de m'avoir contacté!</h1>
	<p>Au plaisir d'échanger avec vous!</p>
	<CTA href="/contact" label="Retourner au formulaire" />
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
            <a href="/link/to/pdf" download>Télécharger (PDF)</a>
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

section.success {
    padding: 100px 0;
	p {
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
}

#submit {
    cursor: pointer;
    position: relative;
    padding: 16px 32px;
    border: 4px solid var(--color-secondary);
    overflow: hidden;
    display: inline-block;

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
