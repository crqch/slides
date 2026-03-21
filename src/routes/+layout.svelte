<script lang="ts">
	import { type Snippet } from 'svelte';

	import 'reveal.js/reveal.css';
	import './theme.css';
	import './layout.css';

	const { children }: { children: Snippet } = $props();
</script>

{@render children()}
