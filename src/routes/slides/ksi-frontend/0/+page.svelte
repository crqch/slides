<script lang="ts">
	import { code0 } from '$lib/assets/ksi-frontend/0';
	import Slide from '$lib/components/Slide.svelte';
	import LiveHtmlEditor from '$lib/slides/components/LiveHtmlEditor.svelte';
	import ThreeColumn from '$lib/slides/layouts/ThreeColumn.svelte';
	import TwoColumn from '$lib/slides/layouts/TwoColumn.svelte';
	import { Highlight } from 'svelte-highlight';
	import { css, xml } from 'svelte-highlight/languages';
</script>

<Slide class="relative h-full w-full">
	<img alt="Header" class="fragment absolute top-0 left-0 w-max" src="/HeaderUWR.jpg" />

	<div class="flex h-full flex-col items-center justify-center">
		<h1 class="text-white">frontendowcy #00</h1>
		<ul class="list-none p-0 text-start text-lg">
			<li>0. organizacja pracy w grupie</li>
			<li>
				1. HTML + CSS <span class="text-6 fragment text-white/50">[część 1/2]</span>
			</li>
		</ul>
	</div>

	<div class="absolute right-0 bottom-10 left-0 flex w-full justify-center">
		<span class="text-sm">24.03.2026, KSI</span>
	</div>
</Slide>

<Slide>
	<Slide>
		<h1>Organizacja pracy w grupie</h1>
	</Slide>
	<Slide class="flex h-screen flex-col py-40 text-start">
		<h1 class="text-white">grupa frontendowcy</h1>
		<ul class="list-disc p-0 text-start text-lg">
			<li class="fragment" data-fragment-index="0">główne zadanie: strona KSI</li>
			<img
				src="/0/ksi-core.png"
				alt=""
				class="fragment current-visible absolute top-1/4 left-1/2 z-20 aspect-auto h-160 -translate-x-1/2 -translate-y-1/2"
				data-fragment-index="1"
			/>
			<li class="fragment">budujemy użyteczne rzeczy, które znajdą swoich użytkowników</li>
			<li class="fragment relative">
				jesteśmy otwarci na współprace z firmami, instytucjami, organizacjami, jeśli potrzebują
				pomocy <p class="fragment font-bold text-green-300">Możliwość uzyskania grantów</p>
			</li>
		</ul>
	</Slide>
	<Slide>
		<h1 class="text-white">spotkania</h1>
		<ul class="list-disc p-0 text-start text-lg">
			<li class="fragment">odbywają się w każdy wtorek 16:00, fizycznie w pokoju koła</li>
			<li class="fragment">obecność/bycie na bieżąco obowiązkowe</li>
		</ul>
	</Slide>
	<Slide>
		<h1 class="text-white">dyscyplina pracy</h1>
		<ul class="list-disc p-0 text-start text-lg">
			<li class="fragment">
				cotygodniowe raporty z zrealizowanych rzeczy, czasu poświęconego na działanie grupy
			</li>
			<li class="fragment">wzajemne code review (wymagane do wprowadzania zmian)</li>
		</ul>
	</Slide>
</Slide>

<Slide>
	<Slide>
		<h1>nauka</h1>
	</Slide>
	<Slide class="text-start">
		<h1>Rozkład jazdy</h1>
		<ul class="list-none p-0 text-start text-xl">
			<li class="fragment">
				<i>Etap 1.</i>
				Czym jest HTML i jak go ładnie ubrać? Podstawy web designu.
			</li>
			<li class="fragment">
				<i>Etap 2.</i>
				JavaScript, TypeScript. Typy danych, wbudowane API, asynchroniczne funkcje.
			</li>
			<li class="fragment">
				<i>Etap 3.</i>
				Reaktywność na stronach. Svelte jako nowoczesny framework do budowania stron SPA.
			</li>
			<li class="fragment">
				<i>Etap 4.</i>
				Backend. Podstawy przy użyciu frameworka ElysiaJS.
			</li>
		</ul>
	</Slide>
</Slide>

<Slide>
	<Slide class="flex w-screen flex-row">
		<ThreeColumn
			columnClass="flex flex-col font-script text-blue-300 [&>div]:flex [&>div]:flex-col [&>div]:items-center items-center justify-center"
		>
			{#snippet first()}
				<div>
					<img src="/0/skeleton.png" class="flex h-[40vh] flex-col self-center" alt="" />
					<p>HTML</p>
				</div>
			{/snippet}
			{#snippet second()}
				<div data-fragment-index="2" class="fragment">
					<img src="/0/skin.jpg" class="h-[10vh]" alt="" />
					<p>CSS</p>
				</div>
			{/snippet}
			{#snippet third()}
				<div data-fragment-index="1" class="fragment">
					<img src="/0/human.jpg" class="h-[10vh]" alt="" />
					<p>Gotowa strona</p>
				</div>
			{/snippet}
		</ThreeColumn>
	</Slide>

	<Slide class="flex w-screen flex-row">
		<TwoColumn
			columnClass="flex flex-col font-script text-blue-300 [&>div]:flex [&>div]:flex-col [&>div]:items-center items-center justify-center"
		>
			{#snippet left()}
				<div>
					<img src="/0/skeleton.png" class="flex h-[40vh] flex-col self-center" alt="" />
					<p>HTML</p>
				</div>
			{/snippet}
			{#snippet right()}
				<div>
					<img src="/0/skin.jpg" class="h-[10vh]" alt="" />
					<p>CSS</p>
				</div>
			{/snippet}
		</TwoColumn>
	</Slide>
	<Slide class="flex-start h-screen w-screen">
		<h1>HTML</h1>
		<code class="text-2xl whitespace-nowrap">
			<span
				class="fragment always-visible transition-colors [&.current-fragment]:text-fuchsia-400"
				data-fragment-index="1">Hyper Text</span
			>
			<span
				class="fragment always-visible transition-colors [&.current-fragment]:text-green-400"
				data-fragment-index="2">Markup Language</span
			>
		</code>
		<div class="relative mt-8">
			<div class="fragment fade-in-then-out absolute top-0" data-fragment-index="1">
				<h2 class="font-bold text-fuchsia-400!">Hyper Text?</h2>
				<p>Tekst zawierający odnośniki (hiperłącza) do innych dokumentów.</p>
			</div>

			<div class="fragment fade-in-then-out absolute top-0" data-fragment-index="2">
				<h2 class="font-bold text-green-400!">Markup Language?</h2>
				<p>Grupa języków określających strukturę dokumentu. Przykłady: XML, HTML, SVG.</p>
			</div>
		</div>
		<div class="fragment mt-8">
			<h2>Składnia HTML</h2>
			<p>
				Każdy poprawny składniowo element HTML (z jednym wyjątkiem) składa się z tagu oraz
				zawartości:
			</p>
			<Highlight language={xml} code="<tag>zawartość</tag>" />
			<div class="fragment current-visible absolute">
				<p>W zawartości możemy łamać wiersze!</p>
				<Highlight
					language={xml}
					code={`<tag>zawartość
ze
złamaniem
wiersza</tag>`}
				/>
			</div>
			<div class="fragment">
				<p>Zazwyczaj formatujemy zawartość w ten sposób:</p>

				<Highlight
					language={xml}
					code={`<tag>
  zawartość
  ze
  złamaniem
  wiersza
</tag>`}
				/>
			</div>
		</div>
	</Slide>
	<Slide class="flex-start h-screen w-screen">
		Niektóre tagi nie wykorzystują zawartości. Wtedy możemy je zapisać w skrócocnej formie:
		<Highlight language={xml} code={`<tag />`} />

		<div class="fragment">
			Każdemu elementowi HTML możemy nadać jakieś atrybuty (attributes), np:
			<Highlight language={xml} code={`<tekst kolor="zielony">Hello World!</tekst>`} />
		</div>

		<div class="fragment">
			Można ustawiać atrybuty na pusty string ('') używając skróconej formy:
			<Highlight language={xml} code={`<tekst pogrubiony>Hello World!</tekst>`} />
			Zazwyczaj tej formy stosuje się do wartości reprezentującą boolean.
		</div>
	</Slide>
	<Slide>
		Języki markup charakteryzują się tym, że każdy element jest strukturalnie drzewem. To oznacza,
		że dziećmi każdego elementu, są również elementy
		<Highlight
			language={xml}
			code={`<grupa>
  <dziecko1>Hej! Jestem dzieckiem tagu grupa</dziecko1>
  <dziecko2>Jestem rodzeństwem dziecko1 i dzieckiem tagu grupa</dziecko2>
  <!-- (komentarz) W szczególności, element domyślnie może mieć dzieci
    tego samego tagu co on sam -->
  <grupa>
    Jestem kolejną grupą
  </grupa>
</grupa>`}
		/>
	</Slide>
	<Slide>
		<h2>Semantyka HTML</h2>
		<div class="h-full w-full -translate-x-8">
			<LiveHtmlEditor initialSteps={code0.html} />
		</div>
		<div></div>
	</Slide>
	<Slide class="flex-start h-screen w-screen">
		<h1>Bloki vs Linie</h1>
		<p class="mb-8">
			To, jak element zachowuje się w układzie, zależy od jego domyślnego typu wyświetlania.
		</p>

		<TwoColumn columnClass="gap-8 text-lg">
			{#snippet left()}
				<div
					class="flex flex-col gap-4 rounded-lg border-2 border-fuchsia-400 bg-fuchsia-400/5 p-6"
				>
					<h2 class="font-bold! text-fuchsia-400">
						Block (np. <code>{'<div>'}</code>, <code>{'<p>'}</code>)
					</h2>
					<ul class="list-disc space-y-2 text-start">
						<li>Zajmuje <b>całą dostępną szerokość</b> (100%).</li>
						<li>Zawsze wypycha następny element do <b>nowej linii</b>.</li>
						<li>Możemy mu swobodnie nadawać wymiary (width/height).</li>
					</ul>
					<div class="mt-4 flex flex-col gap-2">
						<div class="bg-fuchsia-400 p-2 text-sm text-black">Blok 1</div>
						<div class="bg-fuchsia-400 p-2 text-sm text-black">Blok 2</div>
					</div>
				</div>
			{/snippet}

			{#snippet right()}
				<div class="flex flex-col gap-4 rounded-lg border-2 border-green-400 bg-green-400/5 p-6">
					<h2 class="font-bold! text-green-400">
						Inline (np. <code>{'<span>'}</code>, <code>{'<b>'}</code>)
					</h2>
					<ul class="list-disc space-y-2 text-start">
						<li>Zajmuje tylko <b>tyle miejsca, ile potrzebuje</b>.</li>
						<li>Pozwala innym elementom stać <b>obok siebie</b> w tym samym wierszu.</li>
						<li>Ignoruje szerokość (width) i wysokość (height).</li>
					</ul>
					<div class="mt-4">
						<span class="inline-block bg-green-400 p-2 text-sm text-black">Linia 1</span>
						<span class="inline-block bg-green-400 p-2 text-sm text-black">Linia 2</span>
					</div>
				</div>
			{/snippet}
		</TwoColumn>

		<div class="fragment mt-12 w-full">
			<Highlight
				language={xml}
				code={`<div>Jestem szeroki i samotny w tej linii</div>
<span>My się</span> <span>mieścimy razem!</span>`}
			/>
		</div>
	</Slide>
</Slide>

<Slide>
	<Slide>
		<h2>CSS, czyli skóra naszej strony</h2>
		<p>Korzystamy z CSS aby zmienić domyślny wygląd elementów HTML.</p>
	</Slide>
	<Slide>
		<p>
			Przed zrozumieniem składni, musimy wiedzieć w jaki sposób powiedzieć CSSowi by zmienił <b
				>ten, konkretny</b
			>
			element. Robimy to za pomocą selektorów. Te działają trochę jak soki-bary z przedmiotu
			<i>Logika dla informatyków</i>. Możemy wybrać wszelkie elementy spełniające dane kryterium.
			Rzeczy, które można uprawiać na selektorach CSS to materiał na magisterkę, wiec skupimy się na
			tych najczęściej używanych selektorach (kryteriach):
		</p>
		<ul>
			<li>tag(name)</li>
			<li>class(name)</li>
			<li>id</li>
		</ul>
	</Slide>
	<Slide>
		<h2>tag(name)</h2>
		<p>
			Już wiemy czym są tagi w HTML. CSS działa w tandemie z HTMLem, więc selektor tag(name)
			wykorzystuje to, jaki tag ma dany element HTML. Aby wykorzystać to kryterium dla tagu <code
				>tag</code
			>, wystarczy napisać
		</p>
		<code class="text-fuchsia-400">tag</code>
	</Slide>
	<Slide>
		<h2>class(name)</h2>
		<p>
			Gdybyśmy mieli aplikować jakiś styl do wszystkich elementów w naszym dokumencie, które mają
			dany tag, to szybko zabrakło by nam tagów. Z pomocą przychodzi selektor class(name). Możemy
			wybranym elementom, bezpośrednio w HTML za pomocą atrybutu <code>class</code> nadać daną klasę,
			której wygląd później specyfikujemy w CSS.
		</p>
		<Highlight
			language={xml}
			code={`<p class="name">Adam Nowak</p>
<p class="age">Wiek: 29 lat</p>`}
		/>
		<p>Aby wybrać klasę <code>name</code>, należy przed nazwą klasy dodać kropkę (.)</p>
		<div class="flex flex-row">
			<div>
				<code class="text-fuchsia-400">.<span class="text-green-300">name</span></code><br />
				<code class="text-fuchsia-400">.<span class="text-green-300">age</span></code>
			</div>
			<p class="pl-8 text-base! text-blue-200">
				Te selektory nie są tym samym, w przeciwieństwie do selektora tag pozwalają nam odróżnić te
				dwa <code>p</code> elementy z góry.
			</p>
		</div>
	</Slide>
	<Slide>
		<h2>id</h2>
		<p>
			Czasem potrzebujemy jeszcze większej precyzji, ku temu może służyć selektor id. Id jak
			identyfikator, powinien być zaaplikowany tylko do jednego elementu na stronie. Można sobie
			wyobrazić sytuację, że śledzimy który element z listy użytkownik ma zaznaczony. Wtedy (poza
			innymi selektorami) moglibyśmy użyć id i ustawić temu elementowi <code>id="selected"</code>.
			Robimy to następująco:
		</p>

		<Highlight
			language={xml}
			code={`<p class="produkt">Chipsy Ways Hoover Broke</p>
<p class="produkt">KukaKola</p>
<p class="produkt" id="selected">Bananas</p>
<p class="produkt">Wózek widłowy</p>`}
		/>
		<p>
			Aby wybrać id <code>selected</code>, należy przed nazwą identyfikatora dodać hash/krzyżyk (#)
		</p>
		<code class="text-fuchsia-400">#<span class="text-green-300">selected</span></code>
		<p class="text-base! text-red-300">
			Uwaga: identyfikatory w HTML są pomocne, ale używa się ich głównie przy pisaniu skryptów w
			JavaScriptcie (to jeszcze przed nami). Tak więc nie powinniśmy używać identyfikatorów w celu
			stylowania. Można by bez problemu użyć klasy <code>produkt-selected</code>, efekt byłby ten
			sam.
		</p>
	</Slide>
	<Slide>
		<h2>Łączenie selektorów</h2>
		<p>
			Nie bez przyczyny nawiązałem do soki-bary. Tam można było łączyć wiele warunków czy
			kwantyfikatorów w jedno wielkie zapytanie. Podobnie jest w CSS. Rozważmy następujący przykład:
		</p>

		<Highlight
			language={xml}
			code={`<p class="zwierzak ryba">Nemo</p>
<p class="zwierzak">Pimpek</p>
<p class="jedzenie karma">Pédegree</p>
<p class="jedzenie ryba">Tuńczyk w puszce</p>
<p class="jedzenie">Żelki</p>`}
		/>
		<p class="fragment">
			Chcielibyśmy, aby jedzenie było domyślnie <span class="text-amber-500">złote</span>, jedzenie
			które jest rybą <span class="text-cyan-300">cyjanowe</span>, podobnie
			<span class="text-violet-400">jedzenie-karma</span>,
			<span class="text-red-300">zwierzaki</span>, <span class="text-blue-600">zwierzak-ryba</span>.
		</p>
	</Slide>
	<Slide class="text-base!">
		<p>
			<span class="text-amber-500">jedzenie</span>,
			<span class="text-cyan-300">jedzenie-ryba</span>,
			<span class="text-violet-400">jedzenie-karma</span>,
			<span class="text-red-300">zwierzak</span>, <span class="text-blue-600">zwierzak-ryba</span>
		</p>
		<Highlight
			language={xml}
			code={`<p class="zwierzak ryba">Nemo</p>
<p class="zwierzak">Pimpek</p>
<p class="jedzenie karma">Pédegree</p>
<p class="jedzenie ryba">Tuńczyk w puszce</p>
<p class="jedzenie">Żelki</p>`}
		/>
		<p class="fragment">
			Oczywiste będzie połączenie <code>.jedzenie -> złoty</code>, <code>.zwierzak -> różowy</code>
		</p>
		<p class="fragment">
			Zastanówmy się nad jedzenie-ryba. Jakich selektorów moglibyśmy użyć, aby wybrać <Highlight
				class="m-0! inline-flex! w-min! p-0!"
				code={`<p class="jedzenie ryba">Tuńczyk w puszce</p>`}
				language={xml}
			/>?
		</p>
		<p class="fragment">
			Zarówno <code>.jedzenie</code>, jak i <code>.ryba</code> wybiorą nam ten element. Odpowiedzią
			na nasze pytanie jest koniunkcja tych dwóch selektorów. Koniunkcję robimy przez konkatenację
			selektorów. Zatem wychodzi nam <code>.jedzenie.ryba</code>, i to jest poprawna odpowiedź.
		</p>
		<p class="fragment">
			Podobnie dla jedzenie-karma, wychodzi <code>.jedzenie.karma</code> oraz
			<code>.zwierzak.ryba</code> dla zwierzak-ryba. Kolejność selektorów nie ma znaczenia, bo przekrój
			zbiorów jest operacją przemienną.
		</p>
		<p class="fragment">
			Można się jeszcze zastanowić, jaki kolor będzie miał Tuńczyk w puszce, skoro mówimy <code
				>.jedzenie -> złoty</code
			>, ale <code>.jedzenie.ryba -> cyjanowy</code>.
		</p>
		<p class="fragment">
			Wtedy, mimo że tuńczyk ląduje w obu selektorach, priorytet bierze bardziej precyzyjne
			zapytanie. Więc tuńczyk będzie cyjanowy. <span class="text-[8px]!">(chyba mało jadalny)</span>
		</p>
	</Slide>
	<Slide>
		<h2>Składnia CSS</h2>
		<p>
			Składnia CSS jest bardzo powtarzalna. To po prostu blok instrukcji przypisany do selektora.
		</p>
		<div class="mt-8 flex flex-col items-center">
			<Highlight
				language={css}
				code={`.selector {
  property: value;
}`}
			/>
		</div>
		<ul class="mt-8 list-none p-0 text-start text-lg">
			<li class="fragment">
				<b class="text-fuchsia-400">selector</b> — nasze soki-bary (kogo zmieniamy?)
			</li>
			<li class="fragment">
				<b class="text-green-300">property</b> — cecha (co zmieniamy? np. kolor, szerokość)
			</li>
			<li class="fragment">
				<b class="text-blue-300">value</b> — nowa wartość (na co zmieniamy?)
			</li>
		</ul>
		<p class="fragment mt-4 text-red-400">
			Uwaga: średnik (<code>;</code>) jest wredny i zapominając o nim, można stracić sporo czasu.
		</p>
	</Slide>
</Slide>
