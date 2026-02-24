<script lang="ts">
	import './ProgrammingLanguages.scss';
	import { onMount } from 'svelte';
	import { createDraggable } from 'animejs/draggable';

	let draggables: any[] = [];
	let dragged: boolean = false;

	onMount(() => {
		const elements = document.querySelectorAll('.languages');

		elements.forEach((el) => {
			const draggableInstance = createDraggable(el, {
				container: '.programming-languages',
				onDrag: () => {
					dragged = true;
				}
			});
			draggables.push(draggableInstance);
		});
	});

	function resetDrag() {
		draggables.forEach((d) => d.reset());
		dragged = false;
	}
</script>

<section class="programming-languages">
	<div class="language-title">
		<h2>Programmeer Talen</h2>
	</div>
	{#if dragged}
		<button id="reset-button" class:show-reset-button={dragged} on:click={resetDrag!}>Reset</button>
	{/if}
	<div class="programming-languages-wrapper">
		<button popovertarget="htmlPopoverContent" class="languages-html languages">
			<h2>HTML</h2>
			<box-icon type="logo" name="html5" size="10em"></box-icon>
		</button>
		<article id="htmlPopoverContent" popover>
			<p class="html-content">
				Html bepaalt de basisstructuur van de website. Goede en semantische Html is essentieel voor
				een goede website en zorgt voor betere resultaten in zoekmachines.
			</p>
		</article>

		<button popovertarget="cssPopoverContent" class="languages-css languages">
			<h2>CSS</h2>
			<box-icon name="css3" type="logo" size="10em"></box-icon>
		</button>
		<article id="cssPopoverContent" popover>
			<p class="html-content language-text">
				Html bepaalt de basisstructuur van de website. Goede en semantische Html is essentieel voor
				een goede website en zorgt voor betere resultaten in zoekmachines.
			</p>
		</article>

		<button popovertarget="jsPopoverContent" class="languages-js languages">
			<h2>Javascript</h2>
			<box-icon name="javascript" type="logo" size="10em"></box-icon>
		</button>
		<article id="jsPopoverContent" popover>
			<p class="html-content language-text" id="html-text">
				Html bepaalt de basisstructuur van de website. Goede en semantische Html is essentieel voor
				een goede website en zorgt voor betere resultaten in zoekmachines.
			</p>
		</article>

		<!-- <section class="languages-node">
        <h2>Node JS</h2>
        <box-icon name="nodejs" type="logo" size="10em"></box-icon>
      </section>

      <section class="languages-php">
        <h2>PHP</h2>
        <box-icon name="php" type="logo" size="10em"></box-icon>
      </section>

      <section class="languages-mysql">
        <h2>MYSQL</h2>
        <box-icon name="postgresql" type="logo" size="10em"></box-icon>
      </section> -->
	</div>
</section>
