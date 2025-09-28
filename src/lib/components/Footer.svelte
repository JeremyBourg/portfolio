<script>
import github from '$lib/assets/github-mark-white.svg';
import linkedin from '$lib/assets/InBug-White.png';
</script>

<style>
footer {
	margin-top: 100px;
	padding: 50px;
}

.wrapper {
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 40px;
}

#logos {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	gap: 20px;
}
a {
	color: var(--color-tertiary);
	font-weight: 500;
	text-decoration: underline;
	transition: 0.1s color ease-in;

	&:hover {
		color: var(--color-secondary);
	}
}
</style>

<footer>
	<div class="wrapper">
		<div id="logos">
			<a href="https://github.com/JeremyBourg" target="_blank">
				<img
					src="{github}"
					alt="github logo"
					height="72"
					width="72"
				/>
			</a>
			<a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-bourg-498a03385/" target="_blank">
				<img
					src="{linkedin}"
					alt="linkedin logo"
					height="72"
				/>
			</a>
		</div>
		<p class="extra">2025 © Jérémy Bourg. Ce portfolio est un logiciel libre. L’image d’arrière-plan provient de <a href="https://www.vecteezy.com/free-vector/landscape">Vecteezy</a>.</p>
	</div>
</footer>
