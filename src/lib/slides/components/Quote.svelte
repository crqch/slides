<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		text,
		author,
		source,
		variant = 'default',
		children,
		class: classVal
	}: {
		text?: string;
		author?: string;
		source?: string;
		variant?: 'default' | 'large';
		children?: Snippet;
		class?: ClassValue;
	} = $props();
</script>

<blockquote class="quote {variant} {classVal ?? ''}">
	<div class="quote-icon">&ldquo;</div>
	<div class="quote-content">
		{#if children}
			{@render children()}
		{:else if text}
			<p>{text}</p>
		{/if}

		{#if author || source}
			<footer class="quote-attribution">
				{#if author}
					<cite class="author">{author}</cite>
				{/if}
				{#if source}
					<span class="source">&mdash; {source}</span>
				{/if}
			</footer>
		{/if}
	</div>
</blockquote>

<style>
	.quote {
		margin: 0;
		padding: 1.5rem 2rem;
		position: relative;
		text-align: left;
	}

	.quote.large {
		font-size: 1.3em;
	}

	.quote-icon {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 4em;
		opacity: 0.2;
		font-family: Georgia, serif;
		line-height: 1;
	}

	.quote-content p {
		margin: 0;
		font-style: italic;
	}

	.quote-attribution {
		margin-top: 1rem;
		font-size: 0.9em;
		opacity: 0.8;
	}

	.author {
		font-style: normal;
		font-weight: 600;
	}

	.source {
		opacity: 0.7;
	}
</style>
