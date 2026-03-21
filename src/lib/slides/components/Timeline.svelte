<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface TimelineItem {
		date?: string;
		title: string;
		description?: string;
		icon?: string;
		color?: string;
	}

	const {
		items,
		align = 'left',
		class: classVal
	}: {
		items: TimelineItem[];
		align?: 'left' | 'right' | 'alternate';
		class?: ClassValue;
	} = $props();
</script>

<div class="timeline {align} {classVal ?? ''}">
	{#each items as item (item.title)}
		<div class="timeline-item" style:--item-color={item.color}>
			<div class="timeline-marker">
				{#if item.icon}
					<span class="timeline-icon">{item.icon}</span>
				{:else}
					<div class="timeline-dot"></div>
				{/if}
			</div>
			<div class="timeline-content">
				{#if item.date}
					<time class="timeline-date">{item.date}</time>
				{/if}
				<h4 class="timeline-title">{item.title}</h4>
				{#if item.description}
					<p class="timeline-description">{item.description}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.timeline {
		position: relative;
		padding-left: 2.5rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0.6rem;
		top: 0.75rem;
		bottom: 0.75rem;
		width: 2px;
		background: rgba(255, 255, 255, 0.2);
	}

	.timeline-item {
		position: relative;
		padding-bottom: 1.25rem;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -2rem;
		top: 0;
		width: 1.25rem;
		height: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.timeline-dot {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		background: var(--item-color, rgba(255, 255, 255, 0.5));
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

	.timeline-icon {
		font-size: 1em;
	}

	.timeline-content {
		text-align: left;
	}

	.timeline-date {
		font-size: 0.8em;
		opacity: 0.6;
		display: block;
		margin-bottom: 0.2rem;
	}

	.timeline-title {
		margin: 0 0 0.2rem 0;
		font-size: 1em;
	}

	.timeline-description {
		margin: 0;
		font-size: 0.85em;
		opacity: 0.7;
	}
</style>
