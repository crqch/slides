<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const {
		src,
		alt = '',
		caption,
		fit = 'contain',
		rounded = false,
		shadow = true,
		maxHeight,
		class: classVal
	}: {
		src: string;
		alt?: string;
		caption?: string;
		fit?: 'contain' | 'cover' | 'fill' | 'none';
		rounded?: boolean;
		shadow?: boolean;
		maxHeight?: string;
		class?: ClassValue;
	} = $props();
</script>

<figure class="image-block {classVal ?? ''}">
	<img {src} {alt} style:object-fit={fit} style:max-height={maxHeight} class:rounded class:shadow />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.image-block {
		margin: 0;
		text-align: center;
	}

	img {
		max-width: 100%;
		max-height: 70vh;
	}

	img.rounded {
		border-radius: 8px;
	}

	img.shadow {
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	figcaption {
		font-size: 0.85em;
		opacity: 0.7;
		margin-top: 0.75rem;
		font-style: italic;
	}
</style>
