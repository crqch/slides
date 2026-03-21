<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		tabs,
		class: classVal
	}: {
		tabs: { label: string; children: Snippet }[];
		class?: ClassValue;
	} = $props();
</script>

<div class="tabs-container {classVal ?? ''}">
	<div class="tabs-header">
		{#each tabs as tab, i (tab.label)}
			<div class="tab-label" data-tab={i}>{tab.label}</div>
		{/each}
	</div>
	<div class="tabs-content">
		{#each tabs as tab (tab.label)}
			<div class="tab-panel">
				{@render tab.children()}
			</div>
		{/each}
	</div>
</div>

<style>
	.tabs-container {
		width: 100%;
	}

	.tabs-header {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.tab-label {
		padding: 0.5rem 1rem;
		cursor: pointer;
		opacity: 0.6;
		border-bottom: 2px solid transparent;
		transition:
			opacity 0.2s,
			border-color 0.2s;
	}

	.tab-label:hover {
		opacity: 0.8;
	}

	.tab-label.active {
		opacity: 1;
		border-bottom-color: var(--r-link-color);
	}

	.tab-panel {
		display: none;
	}

	.tab-panel.active {
		display: block;
	}
</style>
