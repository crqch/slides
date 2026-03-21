<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		ratio = '50/50',
		direction = 'row',
		left,
		right,
		class: classVal
	}: {
		ratio?: string;
		direction?: 'row' | 'column';
		left?: Snippet;
		right?: Snippet;
		class?: ClassValue;
	} = $props();

	const ratios = $derived(ratio.split('/').map(Number));
	const leftFr = $derived(`${ratios[0] / (ratios[0] + ratios[1])}fr`);
	const rightFr = $derived(`${ratios[1] / (ratios[0] + ratios[1])}fr`);
</script>

<div class="split-layout {classVal ?? ''}" style:flex-direction={direction}>
	{#if left}
		<div class="split-left" style:flex={leftFr}>
			{@render left()}
		</div>
	{/if}
	{#if right}
		<div class="split-right" style:flex={rightFr}>
			{@render right()}
		</div>
	{/if}
</div>

<style>
	.split-layout {
		display: flex;
		width: 100%;
		height: 100%;
		gap: 0;
	}

	.split-left,
	.split-right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
	}
</style>
