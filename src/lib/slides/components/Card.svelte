<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		title,
		icon,
		href,
		accent,
		children,
		class: classVal
	}: {
		title?: string;
		icon?: string;
		href?: string;
		accent?: string;
		children: Snippet;
		class?: ClassValue;
	} = $props();
</script>

{#if href}
	<a class="card {classVal ?? ''}" {href} style:--accent={accent}>
		{#if title || icon}
			<header>
				{#if icon}
					<span class="card-icon">{icon}</span>
				{/if}
				{#if title}
					<h3 class="card-title">{title}</h3>
				{/if}
			</header>
		{/if}
		<div class="card-content">
			{@render children()}
		</div>
	</a>
{:else}
	<div class="card {classVal ?? ''}" style:--accent={accent}>
		{#if title || icon}
			<header>
				{#if icon}
					<span class="card-icon">{icon}</span>
				{/if}
				{#if title}
					<h3 class="card-title">{title}</h3>
				{/if}
			</header>
		{/if}
		<div class="card-content">
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.card {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		padding: 1rem;
		text-align: left;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	a.card {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	a.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--accent, rgba(255, 255, 255, 0.1));
	}

	.card-icon {
		font-size: 1.2em;
	}

	.card-title {
		margin: 0;
		font-size: 1em;
	}

	.card-content {
		font-size: 0.9em;
		opacity: 0.9;
	}

	.card-content :global(p) {
		margin: 0;
	}
</style>
