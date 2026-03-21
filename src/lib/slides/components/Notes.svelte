<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		children,
		class: classVal
	}: {
		children: Snippet;
		class?: ClassValue;
	} = $props();
</script>

<aside class="notes {classVal ?? ''}">
	{@render children()}
</aside>

<style>
	.notes {
		display: none;
	}
</style>
