<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		vertical = 'center',
		horizontal = 'center',
		children,
		class: classVal
	}: {
		vertical?: 'top' | 'center' | 'bottom';
		horizontal?: 'left' | 'center' | 'right';
		children: Snippet;
		class?: ClassValue;
	} = $props();

	const justifyContent = $derived(
		vertical === 'top' ? 'flex-start' : vertical === 'bottom' ? 'flex-end' : 'center'
	);

	const alignItems = $derived(
		horizontal === 'left' ? 'flex-start' : horizontal === 'right' ? 'flex-end' : 'center'
	);

	const textAlign = $derived(horizontal);
</script>

<div
	class="center-content {classVal ?? ''}"
	style:justify-content={justifyContent}
	style:align-items={alignItems}
	style:text-align={textAlign}
>
	{@render children()}
</div>

<style>
	.center-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 2rem;
	}
</style>
