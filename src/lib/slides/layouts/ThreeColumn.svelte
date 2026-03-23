<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		first,
		second,
		third,
		columnClass,
		gap = '1.5rem'
	}: {
		first?: Snippet;
		second?: Snippet;
		third?: Snippet;
		columnClass?: ClassValue;
		gap?: string;
	} = $props();
</script>

<div class="three-column" style:--gap={gap}>
	{#if first}
		<div class={`column ${columnClass}`}>{@render first()}</div>
	{/if}
	{#if second}
		<div class={`column ${columnClass}`}>{@render second()}</div>
	{/if}
	{#if third}
		<div class={`column ${columnClass}`}>{@render third()}</div>
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
