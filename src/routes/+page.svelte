<script>
	import ProgrammingLanguages from '$lib/components/ProgrammingLanguages/ProgrammingLanguages.svelte';
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Daan Jacobs</title>
		<!-- Import files -->
		<link rel="stylesheet" href="CSS/index.css" />
		<script src="/JS/index.ts" defer>
		</script>
	</head>

	<body>
		<div class="page-wrapper">
			<!-- Hero -->
			<section class="hero">
				<div class="hero-title-container">
					<h1 class="hero-title">Daan Jacobs</h1>
					<button id="html-tags-button" class="hero-subtext">Frontend Developer</button>
				</div>
				<div class="hero-arrow-container">
					<img class="hero-arrow-img" src="/images/Arrow.png" alt="arrow down" />
				</div>

				<!-- Hidden easter egg -->
				<span class="html-tags">&lt;/html&gt</span>
				<span class="html-tags">&lt;/body&gt</span>
				<span class="html-tags">&lt;/head&gt</span>
				<span class="html-tags">&lt;/footer&gt</span>
				<span class="html-tags">&lt;/h1&gt</span>
				<span class="html-tags">&lt;/div&gt</span>
				<span class="html-tags">&lt;/section&gt</span>
			</section>

			<!-- Programming languages -->
			<section class="programming-languages">
				<ProgrammingLanguages />
			</section>
		</div>
	</body>
</html>
