<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import TitleSlide from '$lib/slides/layouts/TitleSlide.svelte';
</script>

<Slide>
	<TitleSlide
		title="Architectural Styles of some of the University's buildings"
		subtitle="Exploring the architectural history captured on matter."
		author="Michał Kosior, Patryk Pujanek, Bartłomiej Kuźma"
		date="March-April 2026"
	/>
</Slide>

<Slide>
	<Slide align="center">
		<h2>How much buildings does the University have?</h2>
		<span class="fragment">
			<p>many...</p>
			<p>Almost 50 different buildings!</p>
		</span>
	</Slide>
	{#each [0, 1, 2] as key}
		<Slide align="center" transition={'zoom'}>
			<img src={`/architecture/map${key}.png`} alt="" />
			<p class="text-xs! opacity-50">
				Buildings queried via <a href="https://overpass-turbo.eu/">overpass-turbo</a>, displayed in
				QGIS Desktop software
			</p>
		</Slide>
	{/each}
</Slide>

<Slide align="center">
	<h2>Thank You!</h2>
</Slide>
