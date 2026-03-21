<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		type = 'info',
		title,
		children,
		class: classVal
	}: {
		type?: 'info' | 'warning' | 'tip' | 'danger' | 'note';
		title?: string;
		children: Snippet;
		class?: ClassValue;
	} = $props();

	const icons: Record<string, string> = {
		info: 'ℹ️',
		warning: '⚠️',
		tip: '💡',
		danger: '🚫',
		note: '📝'
	};
</script>

<aside class="callout {type} {classVal ?? ''}">
	<div class="callout-icon">{icons[type]}</div>
	<div class="callout-content">
		{#if title}
			<strong class="callout-title">{title}</strong>
		{/if}
		<div class="callout-body">
			{@render children()}
		</div>
	</div>
</aside>

<style>
	.callout {
		display: flex;
		gap: 1rem;
		padding: 1rem 1.25rem;
		border-radius: 8px;
		text-align: left;
		margin: 0.5rem 0;
	}

	.callout.info {
		background: rgba(59, 130, 246, 0.15);
		border-left: 4px solid #3b82f6;
	}

	.callout.warning {
		background: rgba(251, 191, 36, 0.15);
		border-left: 4px solid #fbbf24;
	}

	.callout.tip {
		background: rgba(34, 197, 94, 0.15);
		border-left: 4px solid #22c55e;
	}

	.callout.danger {
		background: rgba(239, 68, 68, 0.15);
		border-left: 4px solid #ef4444;
	}

	.callout.note {
		background: rgba(168, 85, 247, 0.15);
		border-left: 4px solid #a855f7;
	}

	.callout-icon {
		font-size: 1.2em;
		flex-shrink: 0;
	}

	.callout-content {
		flex: 1;
	}

	.callout-title {
		display: block;
		margin-bottom: 0.25rem;
	}

	.callout-body {
		font-size: 0.95em;
		opacity: 0.9;
	}

	.callout-body :global(p) {
		margin: 0;
	}
</style>
