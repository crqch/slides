<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		title,
		subtitle,
		author,
		date,
		image,
		logo,
		children
	}: {
		title: string;
		subtitle?: string;
		author?: string;
		date?: string;
		image?: string;
		logo?: string;
		children?: Snippet;
	} = $props();
</script>

<div class="title-slide">
	{#if image}
		<div class="title-image">
			<img src={image} alt="" />
		</div>
	{/if}

	<div class="title-content">
		{#if logo}
			<div class="title-logo">
				<img src={logo} alt="" />
			</div>
		{/if}

		<h1 class="text-balance">{title}</h1>

		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}

		{#if author}
			<div class="title-meta">
				{#if author}
					<span class="author">{author}</span>
				{/if}
			</div>
		{/if}

		{#if date}
			<span class="text-white/50">{date}</span>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	.title-slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		gap: 2rem;
	}

	.title-image {
		max-width: 300px;
		max-height: 200px;
		overflow: hidden;
		border-radius: 8px;
	}

	.title-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.title-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.title-logo {
		max-width: 150px;
		max-height: 80px;
	}

	.title-logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	h1 {
		margin: 0;
		font-size: 2em;
		line-height: 1.1;
	}

	.subtitle {
		font-size: 1.2em;
		opacity: 0.8;
		margin: 0;
	}

	.title-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9em;
		opacity: 0.7;
		margin-top: 0.75rem;
	}
</style>
