<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/main.scss';
	import { Header } from '$lib/components';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
