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
	<aside class="notes">
		What's going on everybody, today we would like to show you our findings about the architectural
		growth of the University of Wrocław's buildings. We will take you on a rapid journey through the
		busy streets of Wrocław.
	</aside>
</Slide>

<Slide>
	<Slide>
		<h2>When exactly does a building become the University's?</h2>
	</Slide>
	<Slide align="center">
		<img src="/architecture/s1.jpg" alt="" />
		<aside class="notes">So... First of all, when does a building belong to the University?</aside>
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

<Slide>
	<Slide align="center">
		<h2>Period 1: The Baroque Beginnings</h2>
		<h3>(1702 - late 18th Century)</h3>
	</Slide>
	<Slide>
		<h3 class="fragment fade-out" data-fragment-index="0">The University's Main Building</h3>
		<div class="r-stack" style="height: 550px;">
			<img
				src="/architecture/barok_1.jpg"
				alt=""
				data-fragment-index="0"
				class="fragment current-visible size-full contain-content"
			/>
			{#each new Array(13).fill(1) as _, i}
				<img
					src={`/architecture/barok_${i + 2}.jpg`}
					alt=""
					class="fragment current-visible width-full height-full contain-content"
				/>
			{/each}
			<img
				src={`/architecture/barok_2.jpg`}
				alt=""
				class="fragment width-full height-full contain-content"
			/>
		</div>
		<aside class="notes">
			The construction of University's Main Building began in 1728 with a great spatial constraint
			that forced the buildings floor plan to be narrow and long. The building is situated alongside
			the Odra river. Although the master architect is not certainly known, the building is
			attributed to Christoph Tausch. His work blends the boundaries between sculpture, painting and
			structure seamlessly. Despite the monumental scale, minimal details are present. Beautifully
			decorated blue doors greet us at the entrance to the building, with the University's coat of
			arms suited neatly within the golden composition. Inside the Main Building, we can explore
			historical rooms that are a part of the university's museum, such as the famous Leopoldine
			Hall, Oratorium Marianum or Mathematical Tower. The building's main stairway is a magnificent
			piece of architectural design that will make anyone climbing up the stairs stop for a brief
			moment to glance at the beautifully painted pieces placed on the ceiling. Climbing those
			stairs 40 meters up will take us to the Mathematical Tower's gallery, that was a host to an
			astronomical observatorium until it was moved to a new location. There were supposed to be
			three towers in the main building, and the building was intended to be 200 meters long, but
			due to financial crisis and Seven Years' war, the plans were never fully implemented.
		</aside>
	</Slide>

	<Slide>
		<div class="grid grid-cols-2 grid-rows-2">
			<div>
				<h3>Palace of hr. D. von Hornes</h3>
				<p>
					Originally erected in 1721, has been seriously damaged in 1806 and was reconstructed in
					Classical forms.
				</p>
				<p>Currently being house to the Institute of Archeology</p>
			</div>

			<img src="/architecture/barok_15.jpg" alt="" />
			<img src="/architecture/barok_17.jpg" alt="" />
			<img src="/architecture/barok_16.jpg" alt="" />
		</div>
	</Slide>
	<Slide>
		<img src="/architecture/barok_17.jpg" alt="" />
	</Slide>
	<Slide>
		<img src="/architecture/barok_16.jpg" alt="" />
	</Slide>
	<Slide>
		<div class="r-stack">
			<div data-fragment-index="0" class="fragment fade-out grid grid-cols-2 grid-rows-2">
				<img src="/architecture/barok_18.jpg" alt="" />
				<img src="/architecture/barok_19.jpg" alt="" />
				<img src="/architecture/barok_20.jpg" alt="" />
				<img src="/architecture/barok_21.jpg" alt="" />
			</div>

			<img data-fragment-index="0" src="/architecture/barok_18.jpg" class="fragment" alt="" />
			<img src="/architecture/barok_19.jpg" class="fragment" alt="" />
			<img src="/architecture/barok_20.jpg" class="fragment" alt="" />
			<img src="/architecture/barok_21.jpg" class="fragment" alt="" />
			<aside class="notes">
				First image: This image shows the building which was the host to a Premonstratensian
				Monastery (Klasztor Norbertanów), this is why the baroque style is much more moderate, but
				is still very deeply present. This building was one of the biggest baroque pieces that
				survived Festung Breslau in a relatively good condition.
			</aside>
		</div>
	</Slide>

	<Slide>
		<div class="r-stack">
			<img
				src="/architecture/barok_22.jpg"
				class="fragment fade-out"
				data-fragment-index="0"
				alt=""
			/>
			<img
				src="/architecture/classic_1.jpg"
				class="fragment current-visible"
				data-fragment-index="0"
				alt=""
			/>
		</div>
	</Slide>
</Slide>

<Slide>
	<Slide>
		<div class="r-stretch grid w-full grid-cols-2 grid-rows-2">
			<div class="flex flex-col justify-center">
				<h2>Period 2: 19th Century Expansion & Visionaries</h2>
				<h3>(1811 – early 20th Century)</h3>
			</div>
			<img src="/architecture/classic_3.jpg" alt="" class="h-full w-full object-cover" />
			<img src="/architecture/classic_5.jpg" alt="" class="h-full w-full object-cover" />
			<img src="/architecture/classic_6.jpg" alt="" class="h-full w-full object-cover" />
		</div>
	</Slide>
	<Slide>
		<div class="r-stack">
			<img src="/architecture/classic_3.jpg" alt="" />
			<img src="/architecture/classic_2.jpg" class="fragment" alt="" />
		</div>
	</Slide>
	<Slide>
		<div class="r-stack r-stretch">
			<img src="/architecture/classic_4.jpg" class="h-full object-contain" alt="" />
			<img src="/architecture/classic_5.jpg" class="fragment h-full object-contain" alt="" />
		</div>
	</Slide>
	<Slide>
		<img src="/architecture/classic_6.jpg" alt="" />
	</Slide>
</Slide>

<!-- PRESENTATIONAL SECTION 3 -->
<Slide>
	<Slide align="center">
		<h2>Period 3: Post-War Reconstruction & Modernity</h2>
		<h3>(1945 – Present)</h3>
	</Slide>
	<Slide>
		<div class="grid grid-cols-2 grid-rows-2">
			<div>
				<h3>The Modern Campus</h3>
				<ul class="text-[20px]!">
					<li class="fragment">Expansion beyond the Old Town</li>
					<li class="fragment">
						New, contemporary architectural structures like the new University Library
					</li>
					<li class="fragment">
						Integration of modern scientific and educational facilities into the historic urban
						fabric
					</li>
				</ul>
			</div>

			<img src="/architecture/wspolczesnosc_2.jpg" alt="" />
			<img src="/architecture/wspolczesnosc_4.jpg" alt="" />
			<img src="/architecture/wspolczesnosc_17.jpg" alt="" />
		</div>
	</Slide>
	<Slide>
		<div class="r-stack" style="height: 550px;">
			<img
				src="/architecture/wspolczesnosc_1.jpg"
				alt=""
				data-fragment-index="0"
				class="fragment fade-out width-full height-full contain-content"
			/>
			<img
				src="/architecture/wspolczesnosc_2.jpg"
				alt=""
				data-fragment-index="0"
				class="fragment current-visible width-full height-full contain-content"
			/>
			{#each new Array(15).fill(1) as _, i}
				<img
					src={`/architecture/wspolczesnosc_${i + 3}.jpg`}
					alt=""
					class="fragment current-visible width-full height-full contain-content"
				/>
			{/each}
		</div>
	</Slide>
</Slide>

<Slide>
	<h3>Q: How does each architectural style affect the ordinary life of a student?</h3>
	<h3>
		Q2: Speaking of faculty buildings, would you rather a baroque building with history or a modern,
		fitted with technology complex?
	</h3>
</Slide>
<Slide align="center">
	<h2>Thank You!</h2>
</Slide>
