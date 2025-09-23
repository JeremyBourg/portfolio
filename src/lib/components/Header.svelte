<script>
function toggleNavMenu() {
    document.documentElement.classList.toggle('nav-is-active');
}
</script>

<style>

nav {
    background-color: var(--color-bg-primary);
    position: fixed;
    width: 100%;
    height: 100%;

    top: -100%;
    transition: top 0.6s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 72px;
    }

    a {
        font-family: 'Albert Sans';
        text-decoration: none;
        font-size: var(--font-size-h1);
        font-weight: 700;
        line-height: 100%;
        opacity: 0;

        color: white;
        position: relative;
        transition: all 400ms ease;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 4px;
            background-color: var(--color-white);
            transition: width 400ms ease;
        }
        &:hover::after {
            width: 100%;
        }
        :global(.nav-is-active) & {
            opacity: 1;
        }
    }

    :global(.nav-is-active) & {
        top: 0;
    }
}

#nav-toggle {
    --bar-height: 6px;
    --bar-width: 40px;
    --bar-spacing: 8px;

    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: fixed;
    z-index: 2;
    top: 16px;
    right: 20px;
    width: 50px;
    height: 50px;
    mix-blend-mode: difference;

    span {
        background: white;
        border-radius: 3px;
        height: var(--bar-height);
        width: var(--bar-width);
        position: absolute;
        transition: 0.3s all ease-out;

        top: calc(50% - var(--bar-height) / 2);
        left: calc(50% - var(--bar-width) / 2);

        &:nth-child(1) {
            top: calc(
                50% - var(--bar-height) / 2 - var(--bar-height) - var(--bar-spacing)
                );
        }
        &:nth-child(3) {
            top: calc(
                50% - var(--bar-height) / 2 + var(--bar-height) + var(--bar-spacing)
                );
        }
    }

    :global(.nav-is-active &) {
        span {
            top: calc(50% - var(--bar-height) / 2);

            &:nth-child(1) { transform: rotate(45deg); }
            &:nth-child(2) { transform: scaleX(0); }
            &:nth-child(3) { transform: rotate(-45deg); }
        }
    }
}
</style>

<header>
    <button aria-label="Bouton menu" id="nav-toggle" on:click={toggleNavMenu}>
        <span></span>
        <span></span>
        <span></span>
    </button>
    <nav>
        <div>
            <a href="/" on:click={toggleNavMenu}>Accueil</a>
            <a href="/projets" on:click={toggleNavMenu}>Mes projets</a>
            <a href="/contact" on:click={toggleNavMenu}>Contact</a>
        </div>
    </nav>
</header>
