<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		first,
		second,
		third,
		gap = '1.5rem'
	}: {
		first?: Snippet;
		second?: Snippet;
		third?: Snippet;
		gap?: string;
	} = $props();
</script>

<div class="three-column" style:--gap={gap}>
	{#if first}
		<div class="column">{@render first()}</div>
	{/if}
	{#if second}
		<div class="column">{@render second()}</div>
	{/if}
	{#if third}
		<div class="column">{@render third()}</div>
	{/if}
</div>

<style>
	.three-column {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--gap);
		height: 100%;
	}

	.column {
		height: 100%;
	}
</style>
