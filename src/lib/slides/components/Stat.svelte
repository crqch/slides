<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const {
		stat,
		label,
		trend,
		trendDirection = 'up',
		class: classVal
	}: {
		stat: string | number;
		label: string;
		trend?: string;
		trendDirection?: 'up' | 'down' | 'neutral';
		class?: ClassValue;
	} = $props();

	const trendColor = $derived(
		trendDirection === 'up' ? '#22c55e' : trendDirection === 'down' ? '#ef4444' : 'inherit'
	);

	const trendIcon = $derived(trendDirection === 'up' ? '↑' : trendDirection === 'down' ? '↓' : '');
</script>

<div class="stat {classVal ?? ''}">
	<div class="stat-value">{stat}</div>
	<div class="stat-label">{label}</div>
	{#if trend}
		<div class="stat-trend" style:color={trendColor}>
			{trendIcon}
			{trend}
		</div>
	{/if}
</div>

<style>
	.stat {
		text-align: center;
		padding: 1rem;
	}

	.stat-value {
		font-size: 2em;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0.25rem;
	}

	.stat-label {
		font-size: 0.85em;
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.stat-trend {
		font-size: 0.8em;
		margin-top: 0.25rem;
	}
</style>
