<script lang="ts">
	import { onMount } from 'svelte';
	import { activateHtmlTags } from './Hero';

	onMount(() => {
		const button = document.getElementById('html-tags-button');
		const tags = Array.from(document.querySelectorAll<HTMLElement>('.html-tags'));

		if (!button) return;
		activateHtmlTags(button, tags);
	});
</script>

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

<style lang="scss">
	@import './Hero.scss';
</style>
