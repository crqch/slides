<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown';
	import Notes from 'reveal.js/plugin/notes';

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			transition: 'slide',
			hash: true
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		{@render children()}
	</div>
</div>
