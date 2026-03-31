<script lang="ts">
	import { Van, X } from 'lucide-svelte';
	import { cubicOut } from 'svelte/easing';

	let open = $state(false);

	const modalPopup = (
		node: HTMLElement,
		{ inner = false, duration = 150 }: { inner?: boolean; duration?: number }
	) => {
		return {
			easing: cubicOut,
			duration: duration,
			css: (t: number, u: number) =>
				inner
					? `
                    transform: translateY(${u * 20}px);
                    filter: blur(${u * 5}px);
            `
					: `
            opacity: ${t};
            `
		};
	};
</script>

<div class="p-20">
	<h1 class="mb-8 text-3xl font-semibold">
		Wszystkie modele. <span class="opacity-50">Który dla Ciebie?</span>
	</h1>
	<div class="flex items-center gap-4">
		<div
			role="button"
			tabindex="0"
			onkeydown={() => {}}
			class="transition-[transform box-shadow group background-color] flex cursor-pointer flex-col gap-4 rounded-2xl border border-zinc-200 bg-[#fefefe] p-8 pt-16! drop-shadow-lg duration-300 hover:scale-[1.01] hover:bg-white hover:drop-shadow-xl"
			onclick={() => (open = true)}
		>
			<h2 class="font text-[1.75rem]/[35px] font-[500]">
				Goophone 42 Pro <br /> i Goophone 42 Pro Max
			</h2>
			<img src="/goophone.png" class="max-w-[300px]" alt="Goophone 42 Pro i Goophone 42 Pro Max" />
			<div class="flex items-end justify-between">
				<p class="text-sm opacity-70">
					Od 799 zł <br /> <span class="text-xs">(dla studentów 50% taniej)</span>
				</p>
				<button class="button"> Kup </button>
			</div>
			<button
				class="button button-black absolute top-2/3 left-1/2 -translate-x-1/2 opacity-0 blur-sm transition-all! duration-500 ease-out group-hover:translate-y-[-20px] group-hover:opacity-100 group-hover:blur-none"
				>W zbliżeniu</button
			>
		</div>
	</div>
</div>

{#if open}
	<div
		transition:modalPopup={{}}
		onclick={(e) => {
			if (e.target === e.currentTarget) {
				open = false;
			}
		}}
		role="dialog"
		tabindex="0"
		onkeydown={(e) => {
			if (e.key === 'Escape') {
				open = false;
			}
		}}
		class="absolute top-0 left-0 flex h-screen w-screen justify-center bg-black/85"
	>
		<div
			transition:modalPopup={{ inner: true, duration: 350 }}
			class="mx-auto flex w-245 flex-col items-center gap-4 py-4"
		>
			<button
				class=" flex size-8 cursor-pointer items-center justify-center self-end rounded-full bg-zinc-50 text-zinc-400 hover:text-zinc-600"
				onclick={() => (open = false)}
			>
				<X class="size-4" />
			</button>

			<div class="flex w-max items-center gap-1 rounded-full bg-zinc-200 p-1 font-semibold">
				<button class="button button-black"> Goophone 42 Pro </button>
				<button class="button button-white"> Goophone 42 Pro </button>
				<button class="button button-white"> Goophone 42 Pro </button>
				<button class="button button-white"> Goophone 42 Pro </button>
				<button class="button button-white"> Goophone 42 Pro </button>
			</div>

			<div class="flex w-full flex-col overflow-hidden rounded-3xl bg-white">
				<div class="grid grid-cols-1 p-12 md:grid-cols-2">
					<div class="flex flex-col items-center gap-4">
						<div class="mb-20 flex gap-4">
							<button class="button button-black"> Goophone 42 Pro </button>
							<button class="button button-white">Goophone 42 Pro Max</button>
						</div>

						<img src="/goophone.png" alt="Goophone 42 Pro" class="max-w-[400px]" />
					</div>
					<div class="flex flex-col">
						<h2 class="mt-4 text-3xl font-[600]">Goophone 42 Pro</h2>
					</div>
				</div>
				<div class="flex w-full gap-2 bg-zinc-100 p-8">
					<Van class="size-8 text-green-700" />
					<p>
						<b>Bezpłatna dostawa</b><br />
						<span>I bezpłatne zwroty. Daty dostawy zostaną podane po przejściu do kasy.</span>
					</p>
				</div>
			</div>

			<p class="w-full px-2 text-sm text-white">
				↓ Kwota przybliżona. Wysokość opłat może ulegać zmianom. <br />
			</p>
			<ol class="list-decimal pl-8 text-sm text-white">
				<li>
					System Goo Intelligence jest dostępny w wersji beta. Niektóre funkcje mogą nie być
					dostępne we wszystkich regionach i językach. Informacje o dostępnych funkcjach, językach i
					wymaganiach systemowych znajdziesz na stronie <a
						href="https://support.goophone.com/121115/">support.goophone.com/121115</a
					>
					.
				</li>
				<li>
					Wyświetlacz ma zaokrąglone rogi, które wpisują się w kształt regularnego prostokąta i
					podkreślają opływowe kształty urządzenia. Przy założeniu, że powierzchnia ekranu jest
					prostokątem, jego przekątna wynosi 6,27 cala (Goophone 42, Goophone 42 Pro), 6,55 cala
					(Goophone Air) lub 6,86 cala (Goophone 42 Pro Max). Faktyczny obszar wyświetlania jest
					mniejszy.
				</li>
				<li>
					Deklarowane czasy pracy przy zasilaniu z baterii zależą od sieci komórkowej, położenia,
					siły sygnału, konfiguracji funkcji, sposobu użytkowania i wielu innych czynników;
					rzeczywiste wyniki mogą się różnić. Liczba cykli ładowania baterii jest ograniczona – w
					razie osiągnięcia tej liczby konieczna może być wymiana baterii. Wydajność baterii i
					liczba cykli ładowania mogą się różnić w zależności od ustawień i sposobu użytkowania.
					Testy baterii przeprowadzono na konkretnych egzemplarzach Goophone’a. Więcej informacji
					można znaleźć na stronach <a href="https://goophone.com/pl/batteries/"
						>goophone.com/pl/batteries</a
					>
					i
					<a href="https://goophone.com/pl/goophone/compare/">goophone.com/pl/goophone/compare</a>.
				</li>
			</ol>
		</div>
	</div>
{/if}

<style>
	@import 'tailwindcss';

	a {
		@apply text-[#2997ff] underline;
	}

	.button {
		@apply cursor-pointer rounded-full border-2 border-transparent bg-[#0071e3] px-4 py-2 text-sm text-white transition-colors select-none;
	}
	.button-black {
		@apply bg-zinc-900 text-white hover:bg-[#0071e3];
	}
	.button-white {
		@apply bg-zinc-200 text-black hover:opacity-80;
	}
</style>
