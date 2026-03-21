<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const {
		code,
		language,
		caption,
		showLineNumbers = false,
		class: classVal
	}: {
		code?: string;
		language?: string;
		caption?: string;
		showLineNumbers?: boolean;
		class?: ClassValue;
	} = $props();
</script>

<figure class="code-block {classVal ?? ''}">
	{#if language}
		<div class="code-header">
			<span class="language-badge">{language}</span>
		</div>
	{/if}

	<pre><code
			class="language-{language ?? ''}"
			data-trim
			data-line-numbers={showLineNumbers ? '' : null}>{code ?? ''}</code
		></pre>

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.code-block {
		margin: 0;
		text-align: left;
	}

	.code-header {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0.25rem;
	}

	.language-badge {
		font-size: 0.7em;
		padding: 0.2em 0.6em;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
		opacity: 0.6;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	pre {
		margin: 0;
		text-align: left;
		overflow-x: auto;
	}

	pre code {
		font-size: 0.85em;
		line-height: 1.5;
	}

	figcaption {
		text-align: center;
		font-size: 0.8em;
		opacity: 0.7;
		margin-top: 0.5rem;
		font-style: italic;
	}
</style>
