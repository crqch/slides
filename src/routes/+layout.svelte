<script lang="ts">
	import { type Snippet } from 'svelte';
	import 'reveal.js/reveal.css';
	import './theme.css';
	import './layout.css';
	import { githubDark } from 'svelte-highlight/styles';

	const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	{@html githubDark}
</svelte:head>

{@render children()}
