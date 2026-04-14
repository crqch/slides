<script lang="ts">
	import { code3 } from '$lib/assets/ksi-frontend/3';
	import Slide from '$lib/components/Slide.svelte';
	import LiveHtmlEditor from '$lib/slides/components/LiveHtmlEditor.svelte';
	import { Highlight } from 'svelte-highlight';
	import { bash, javascript } from 'svelte-highlight/languages';
</script>

<Slide class="relative h-full w-full">
	<img alt="Header" class="absolute top-0 left-1/2 w-max -translate-x-1/2" src="/HeaderUWR.jpg" />

	<div class="flex h-full flex-col items-center justify-center">
		<h1 class="text-white">webowcy #03</h1>
		<ul class="list-none p-0 text-start text-lg">
			<li>3. podstawy języka JavaScript</li>
			<li>4. środowisko node.js, npm, bun</li>
		</ul>
	</div>

	<div class="absolute right-0 bottom-10 left-0 flex w-full justify-center">
		<span class="text-sm">14.04.2026, KSI</span>
	</div>
</Slide>

<!-- JAVASCRIPT IN BROWSER -->
<Slide>
	<Slide>
		<h1>JavaScript w przeglądarce</h1>
		<p>Interaktywność i manipulacja dokumentem</p>
	</Slide>

	<Slide class="text-start">
		<h2>Skrypty w HTML</h2>
		<p>
			Kod JS jest wykonywany przez silnik przeglądarki (np. V8 w Chrome, SpiderMonkey w Firefox).
		</p>
		<p class="fragment">Główny punkt styku to obiekt <code>document</code>.</p>
		<ul class="list-disc pl-8">
			<li class="fragment">
				<code>document.getElementById('id')</code> - wybór konkretnego elementu
			</li>
			<li class="fragment"><code>el.innerText</code> - zmiana widocznego tekstu</li>
			<li class="fragment"><code>el.innerHTML</code> - zmiana struktury HTML wewnątrz elementu</li>
		</ul>
	</Slide>

	<Slide>
		<h2>Live Demo: Pierwsze kroki</h2>
		<div class="h-full w-full -translate-x-8">
			<LiveHtmlEditor initialSteps={code3.intro} />
		</div>
	</Slide>

	<Slide class="text-start">
		<h2>Zmienne i Typy</h2>
		<p>Dla osób znających OCaml/C/Python:</p>
		<ul class="list-disc pl-8">
			<li class="fragment">
				<code>const</code> - stała (nie można zmienić przypisania, preferowana domyślnie)
			</li>
			<li class="fragment"><code>let</code> - zmienna z zasięgiem blokowym</li>
			<li class="fragment">
				<code>var</code> - model historyczny, niezalecany w nowoczesnym kodzie
			</li>
		</ul>
		<div class="fragment mt-4 text-sm">
			<Highlight
				language={javascript}
				code={`const imie = "Michał"; // String
let wiek = 21;       // Number
const tablica = [1, 2, 3]; // Array
const obiekt = { a: 1 };   // Object`}
			/>
		</div>
	</Slide>

	<Slide class="text-start">
		<h2>Template Literals</h2>
		<p>
			Zamiast żmudnego łączenia stringów przez <code>+</code>, stosuje się backticki <code>`</code>.
		</p>
		<Highlight
			language={javascript}
			code={`const user = "KSI";
const msg = \`Witaj w \${user}!\`; // Interpolacja`}
		/>
	</Slide>

	<Slide>
		<h2>Zmienne, Tablice i Obiekty</h2>
		<div class="h-full w-full -translate-x-8">
			<LiveHtmlEditor initialSteps={code3.variables} />
		</div>
	</Slide>
</Slide>

<!-- NODE.JS -->
<Slide>
	<Slide>
		<h1>Node.js</h1>
		<p>JavaScript poza przeglądarką</p>
	</Slide>

	<Slide class="text-start">
		<h2>Czym jest Node?</h2>
		<p>To środowisko uruchomieniowe oparte na silniku V8 z Chrome.</p>
		<div class="mt-6 grid grid-cols-2 gap-8">
			<div class="rounded border border-blue-400 p-4">
				<h3 class="text-blue-400">Browser</h3>
				<ul class="list-disc pl-4 text-sm">
					<li>DOM (document, window)</li>
					<li>Sandbox (bezpieczeństwo)</li>
					<li>Brak dostępu do plików</li>
				</ul>
			</div>
			<div class="rounded border border-green-400 p-4">
				<h3 class="text-green-400">Node.js</h3>
				<ul class="list-disc pl-4 text-sm">
					<li>Brak DOM i UI</li>
					<li>Dostęp do systemu plików (fs)</li>
					<li>Dostęp do sieci (serwery)</li>
				</ul>
			</div>
		</div>
	</Slide>

	<Slide class="text-start">
		<h2>Uruchamianie kodu</h2>
		<p>Kod wykonuje się z terminala:</p>
		<Highlight language={bash} code="$ node index.js" />
		<p class="mt-4">Node posiada też REPL (Interactive Shell):</p>
		<Highlight
			language={bash}
			code={`$ node
> 2 + 2
4
> .exit`}
		/>
	</Slide>
</Slide>

<!-- NPM -->
<Slide>
	<Slide>
		<h1>npm & bun</h1>
		<p>Zarządzanie paczkami i alternatywy</p>
	</Slide>

	<Slide class="text-start">
		<h2>Tworzenie projektu</h2>
		<Highlight
			language={bash}
			code={`mkdir demo
cd demo
npm init -y   # Tworzy plik package.json`}
		/>
		<p class="mt-4">
			Plik <code>package.json</code> to manifest projektu zawierający jego nazwę, wersję i listę bibliotek.
		</p>
	</Slide>

	<Slide class="text-start">
		<h2>Instalacja paczek</h2>
		<Highlight
			language={bash}
			code={`npm install lodash

# Paczka trafia do node_modules/`}
		/>
		<p class="mt-8">
			Baza wszystkich bibliotek:
			<a href="https://www.npmjs.com" target="_blank" class="text-red-400 underline"
				>www.npmjs.com</a
			>
		</p>
	</Slide>

	<Slide class="text-start">
		<h2>Bun – nowoczesna alternatywa</h2>
		<p>Szybszy runtime, manager paczek i bundler w jednym.</p>
		<ul class="list-disc pl-8">
			<li>Zamiast <code>node</code> używamy <code>bun</code></li>
			<li>Zamiast <code>npm install</code> używamy <code>bun install</code></li>
			<li>Wspiera TypeScript "out of the box"</li>
		</ul>
		<div class="mt-4">
			<Highlight language={bash} code="$ bun run script.ts" />
		</div>
	</Slide>
</Slide>

<Slide>
	<h2>Co dalej?</h2>
	<p>
		W przyszłym tygodniu: wbudowane funkcje, złożone struktury danych, klasy i obietnice (Promises).
	</p>
	<p class="mt-10 font-bold">Michał Kosior</p>
</Slide>
