<script>

</script>



<div id="term-container">
	<p class="extra">Mini-terminal</p>

	<div id="terminal">
		<p>&gt; ls</p>
		<p class="term-color1">index.html</p>
		<p class="term-color2">projets</p>
	</div>
	
	<p class="extra">Essaye-le! Tape 'help'</p>
</div>

<style>
#term-container {
	display: flex;
	flex-direction: column;
	gap: 8px;

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

#terminal p {
	font-weight: 300;
	font-size: var(--font-size-extra);
}
</style>
