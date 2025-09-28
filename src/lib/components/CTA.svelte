<script>
let { label, href } = $props();
</script>

<style>
a {
	position: relative;
	padding: 16px 32px;
	border: 4px solid var(--color-secondary);
	overflow: hidden;
}

p {
	font-family: var(--font-primary);
	color: var(--color-secondary);
	font-size: var(--font-size-btn);
	font-weight: 700;
	letter-spacing: unset;
	transition: color 0.3s ease-out;
}

a::before {
	content: '';
	position: absolute;
	z-index: -1;
	inset: -10px;
	background-color: var(--color-secondary);

	transform: translateX(-100%);
	transition: transform 0.3s ease-out;
}

a:hover {
	p {
		color: var(--color-primary);
	}
	&::before {
		transform: translateX(0);
	}
}

</style>

<a href="{href}">
	<p>{label}</p>
</a>
