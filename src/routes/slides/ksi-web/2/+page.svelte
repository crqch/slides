<script lang="ts">
	import { code0 } from '$lib/assets/ksi-frontend/0';
	import Slide from '$lib/components/Slide.svelte';
	import LiveHtmlEditor from '$lib/slides/components/LiveHtmlEditor.svelte';
	import Quote from '$lib/slides/components/Quote.svelte';
	import ThreeColumn from '$lib/slides/layouts/ThreeColumn.svelte';
	import TwoColumn from '$lib/slides/layouts/TwoColumn.svelte';
	import { Highlight } from 'svelte-highlight';
	import { css, xml } from 'svelte-highlight/languages';
</script>

<Slide class="relative h-full w-full">
	<img alt="Header" class="absolute top-0 left-1/2 w-max -translate-x-1/2" src="/HeaderUWR.jpg" />

	<div class="flex h-full flex-col items-center justify-center">
		<h1 class="text-white">webowcy #02</h1>
		<ul class="list-none p-0 text-start text-lg">
			<li>
				2. HTML + CSS <span class="text-6 text-white/50">[część 2/2]</span>
			</li>
		</ul>
	</div>

	<div class="absolute right-0 bottom-10 left-0 flex w-full justify-center">
		<span class="text-sm">31.03.2026, KSI</span>
	</div>
</Slide>

<Slide>
	<Slide>
		<h1>Etap 2.</h1>

		<p>Jak styluje się strony? Pewne standardy, techniki. Live coding.</p>
	</Slide>
	<Slide>
		<Quote author="Enter your text here..." text="Sometimes you just have to steal something." />

		<ul class="list-none!">
			<li class="fragment text-white/20 [&.current-fragment]:text-white">
				UX Design to branża trudniąca się wrzucaniem intuicji w stronę internetową
			</li>
			<li class="fragment text-white/20 [&.current-fragment]:text-white">
				Jeśli wejdziesz pierwszy raz na stronę która ma dobry UX, poczujesz się jakbyś już tą stronę
				znał.
			</li>
			<li class="fragment text-white/20 [&.current-fragment]:text-white">
				Bo dobry design jest intuicyjny
			</li>
			<li class="fragment text-white/20 [&.current-fragment]:text-white">
				Nie będziemy się tu wgłębiać w piramidy Maslowa i psychoanalizy użytkowników. Pokażę jak
				kraść dobry design.
			</li>
		</ul>
	</Slide>
	<Slide>
		<h3>Level 1.</h3>
		<p>Forma strony</p>

		<div class="r-stack">
			<img src="/ksi-web/2/steal1-0.jpg" data-fragment-index="0" class="fragment fade-out" alt="" />
			<img src="/ksi-web/2/steal1-1.jpg" data-fragment-index="0" class="fragment" alt="" />
			<img src="/ksi-web/2/steal1-2.jpg" class="fragment" alt="" />
			<img src="/ksi-web/2/steal1-3.jpg" class="fragment" alt="" />
		</div>
	</Slide>
	<Slide>
		<h3>Level 2.</h3>
		<p>Komponenty</p>

		<a href="https://www.apple.com/pl/shop/buy-iphone">Apple Buy iPhone</a>
		<a href="https://www.chaingpt.org/">ChainGPT</a>
		<a href="https://www.stykka.com/">Stykka</a>
	</Slide>
</Slide>

<Slide>
	<p>Koniec</p>
	<p>Może coś tu jeszcze się pojawi</p>
</Slide>
