<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const {
		steps,
		vertical = false,
		class: classVal
	}: {
		steps: { title: string; description?: string }[];
		vertical?: boolean;
		class?: ClassValue;
	} = $props();
</script>

<ol class="steps {vertical ? 'vertical' : 'horizontal'} {classVal ?? ''}">
	{#each steps as step, i (step.title)}
		<li class="step">
			<div class="step-number">{i + 1}</div>
			<div class="step-content">
				<h4 class="step-title">{step.title}</h4>
				{#if step.description}
					<p class="step-description">{step.description}</p>
				{/if}
			</div>
		</li>
	{/each}
</ol>

<style>
	.steps {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.horizontal {
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
	}

	.vertical {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.step {
		display: flex;
		gap: 1rem;
		text-align: left;
	}

	.horizontal .step {
		flex: 1;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.step-number {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.1em;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-title {
		margin: 0 0 0.25rem 0;
		font-size: 1em;
	}

	.step-description {
		margin: 0;
		font-size: 0.85em;
		opacity: 0.7;
	}
</style>
