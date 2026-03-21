<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		left,
		right,
		gap = '2rem',
		children
	}: {
		left?: Snippet;
		right?: Snippet;
		gap?: string;
		children?: Snippet;
	} = $props();
</script>

<div class="two-column" style:--gap={gap}>
	<div class="column left">
		{#if left}
			{@render left()}
		{:else if children}
			{@render children()}
		{/if}
	</div>
	<div class="column right">
		{#if right}
			{@render right()}
		{/if}
	</div>
</div>

<style>
	.two-column {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap);
		height: 100%;
		align-items: start;
	}

	.column {
		height: 100%;
	}
</style>
