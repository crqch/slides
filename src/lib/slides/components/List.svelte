<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		type = 'bullet',
		compact = false,
		children,
		class: classVal
	}: {
		type?: 'bullet' | 'numbered' | 'check';
		compact?: boolean;
		children: Snippet;
		class?: ClassValue;
	} = $props();
</script>

{#if type === 'bullet' || type === 'check'}
	<ul class="list {type} {compact ? 'compact' : ''} {classVal ?? ''}">
		{@render children()}
	</ul>
{:else}
	<ol class="list numbered {compact ? 'compact' : ''} {classVal ?? ''}">
		{@render children()}
	</ol>
{/if}

<style>
	.list {
		margin: 0;
		padding-left: 1.5rem;
		text-align: left;
	}

	.compact {
		font-size: 0.9em;
	}

	:global(.list li) {
		margin-bottom: 0.5rem;
	}

	:global(.compact li) {
		margin-bottom: 0.25rem;
	}

	.bullet {
		list-style-type: disc;
	}

	.check {
		list-style: none;
		padding-left: 1.5rem;
	}

	:global(.check li::before) {
		content: '✓';
		position: absolute;
		left: 0;
		color: #22c55e;
		font-weight: bold;
	}

	:global(.check li) {
		position: relative;
	}

	.numbered {
		list-style-position: outside;
	}
</style>
