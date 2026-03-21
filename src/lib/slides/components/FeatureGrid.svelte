<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		title,
		icon,
		items,
		columns = 1,
		gap = '1rem',
		class: classVal,
		children
	}: {
		title?: string;
		icon?: string;
		items?: string[];
		columns?: 1 | 2 | 3 | 4;
		gap?: string;
		class?: ClassValue;
		children?: Snippet;
	} = $props();
</script>

<div class="feature-grid {classVal ?? ''}" style:--columns={columns} style:--gap={gap}>
	{#if title}
		<h3 class="feature-title">
			{#if icon}<span class="feature-icon">{icon}</span>{/if}
			{title}
		</h3>
	{/if}

	<div class="feature-items">
		{#if children}
			{@render children()}
		{:else if items}
			{#each items as item (item)}
				<div class="feature-item">
					<span class="feature-check">✓</span>
					<span>{item}</span>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.feature-grid {
		text-align: left;
	}

	.feature-title {
		margin: 0 0 1rem 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.feature-icon {
		font-size: 1.2em;
	}

	.feature-items {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--gap);
	}

	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.feature-check {
		color: #22c55e;
		font-weight: bold;
		flex-shrink: 0;
	}
</style>
