<script lang="ts">
	let data: {
		listy: {
			name: string;
			max_points: number;
			points: {
				[name: string]: {
					done: string[];
					points: number;
					note?: string;
				};
			};
		}[];
	} = {
		listy: [
			{
				name: 'Lista 1',
				max_points: 8,
				points: {
					Agata: {
						done: ['1', '3', '4', '5', '6'],
						points: 7
					},
					Karol: {
						done: ['1', '3', '4', '5'],
						points: 5
					},
					Patryk: {
						done: ['1', '2', '3', '4', '5', '6'],
						points: 8
					},
					Piotr: {
						done: ['1', '4'],
						points: 2,
						note: 'warunkowe zaliczenie, sytuacja nadzwyczajna'
					}
				}
			}
		]
	};

	let open: Record<string, boolean> = $state({});

	// Initialize all lists as expanded
	for (const list of data.listy) {
		open[list.name] = false;
	}

	const toggle = (name: string) => {
		open[name] = !open[name];
	};
</script>

<svelte:head>
	<title>Zestawienie punktów</title>
</svelte:head>
<div
	class="min-h-screen bg-zinc-950 p-6 font-mono text-zinc-300 selection:bg-blue-500/30 selection:text-blue-200"
>
	<main class="mx-auto max-w-5xl space-y-8">
		<header class="border-b border-blue-500/30 pb-4">
			<h1 class="text-3xl font-bold tracking-wide text-zinc-100 sm:text-4xl">
				Zestawienie punktów
			</h1>
		</header>

		<div class="space-y-6">
			{#each data.listy as list (list.name)}
				{@const maxPoints = Math.max(0, ...Object.values(list.points).map((s) => s.points))}
				<section class="overflow-hidden rounded-lg border border-blue-500/20 bg-zinc-900 shadow-lg">
					<button
						class="flex w-full cursor-pointer items-center justify-between bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 focus:outline-none"
						onclick={() => toggle(list.name)}
						aria-expanded={open[list.name]}
					>
						<h2 class="text-xl font-semibold tracking-wide text-zinc-100 uppercase">
							{list.name}
						</h2>
						<span class="text-xl font-bold text-blue-400">
							{open[list.name] ? '[-]' : '[+]'}
						</span>
					</button>

					<div
						class="grid transition-[grid-template-rows] duration-300 ease-in-out"
						style="grid-template-rows: {open[list.name] ? '1fr' : '0fr'};"
					>
						<div class="min-h-0 overflow-hidden">
							<div class="overflow-x-auto border-t border-blue-500/20 bg-zinc-900/50 p-4">
								<table class="w-full border-collapse text-left whitespace-nowrap">
									<thead>
										<tr class="border-b border-blue-500/20 text-sm text-blue-400/80 uppercase">
											<th class="p-3 font-medium">Uczeń</th>
											<th class="p-3 font-medium">Zrobione zadania</th>
											<th class="p-3 text-right font-medium">Punkty</th>
										</tr>
									</thead>
									<tbody>
										{#each Object.entries(list.points) as [name, stats] (name)}
											<tr
												class="border-b border-blue-500/10 transition-colors hover:bg-zinc-800/50 {stats.points ===
													maxPoints && stats.points > 0
													? 'bg-yellow-200/5'
													: ''}"
											>
												<td class="p-3 align-top">
													<span class="font-medium text-zinc-200">{name}</span>
													{#if stats.note}
														<br />
														<span class="mt-1 inline-block text-xs text-zinc-500">
															/* {stats.note} */
														</span>
													{/if}
												</td>
												<td class="p-3 align-top">
													<div class="flex flex-wrap gap-2">
														{#each stats.done as task}
															<span
																class="rounded border border-blue-700/30 bg-blue-900/20 px-2 py-0.5 text-xs font-semibold text-blue-300"
															>
																{task}
															</span>
														{/each}
													</div>
												</td>
												<td class="p-3 text-right align-top">
													<span
														class="text-lg font-bold {stats.points >= list.max_points * 0.5
															? 'text-zinc-100'
															: 'text-red-400'}"
													>
														{stats.points}
													</span>
													<span class="text-zinc-500"> / {list.max_points}</span>
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			{/each}
		</div>
	</main>
</div>
