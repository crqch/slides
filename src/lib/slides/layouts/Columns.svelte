<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		count = 2,
		gap = '1.5rem',
		equal = true,
		children,
		class: classVal
	}: {
		count?: 1 | 2 | 3 | 4;
		gap?: string;
		equal?: boolean;
		children?: Snippet;
		class?: ClassValue;
	} = $props();

	const gridTemplateColumns = $derived(equal ? `repeat(${count}, 1fr)` : undefined);
</script>

<div
	class="columns {classVal ?? ''}"
	style:--gap={gap}
	style:grid-template-columns={gridTemplateColumns}
>
	{@render children?.()}
</div>

<style>
	.columns {
		display: grid;
		gap: var(--gap);
		height: 100%;
		align-items: start;
	}
</style>
