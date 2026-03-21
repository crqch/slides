<script lang="ts">
	import { slides, type SlideMeta } from '$lib/slides/registry';

	const categories = slides.reduce(
		(acc, slide) => {
			if (!acc[slide.category]) {
				acc[slide.category] = [];
			}
			acc[slide.category].push(slide);
			return acc;
		},
		{} as Record<string, SlideMeta[]>
	);
</script>

<svelte:head>
	<title>Slide Library</title>
</svelte:head>

<div class="index-page h-screen w-screen bg-zinc-900 p-4 text-white/80 md:p-20">
	<h1 class="font-mono text-5xl font-bold">Slides library</h1>
	<p class="text-lg">A collection of my slides built with Svelte and Reveal.js</p>

	<div class="my-8 flex flex-col gap-4">
		{#each Object.entries(categories) as [category, categorySlides] (category)}
			<section>
				<h2 class="mb-4 border-b border-b-white/20 text-3xl">{category}</h2>
				<div class="slides-grid">
					{#each categorySlides as slide (slide.slug)}
						<a
							href="/slides/{slide.slug}"
							class="flex flex-col gap-2 border border-white/40 p-4 text-lg hover:bg-white/10"
						>
							<h3 class="text-2xl font-bold">{slide.title}</h3>
							<p class="slide-description">{slide.description}</p>
							<div class="flex gap-2">
								{#each slide.tags as tag (tag)}
									<span class="rounded-md bg-white/10 px-2 py-1 font-bold">{tag}</span>
								{/each}
							</div>
							{#if slide.date}
								<time class="slide-date">{slide.date}</time>
							{/if}
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
