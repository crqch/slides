<script lang="ts">
	import { emmetHTML } from 'emmet-monaco-es';
	import * as monaco from 'monaco-editor';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	let { initialSteps = [''] } = $props();

	// Stan
	let steps = $state<string[]>(initialSteps);
	let currentIndex = $state(0);
	let editorValue = $state(steps[0]);
	let isEditMode = $state(false);

	let editorElement = $state<HTMLElement | undefined>();
	let editor: monaco.editor.IStandaloneCodeEditor;

	// Czy obecny kod pasuje do któregoś zapisanego kroku?
	let matchedStepIndex = $derived(steps.findIndex((s) => s.trim() === editorValue.trim()));

	// Musimy to ustawić zanim stworzymy edytor
	if (typeof window !== 'undefined') {
		(window as any).MonacoEnvironment = {
			getWorker(_: any, label: string) {
				if (label === 'html') return new htmlWorker();
				if (label === 'css') return new cssWorker();
				return new editorWorker();
			}
		};
	}

	$effect(() => {
		if (editorElement && !editor) {
			emmetHTML(monaco);

			editor = monaco.editor.create(editorElement, {
				value: editorValue,
				language: 'html',
				theme: 'vs-dark',
				minimap: { enabled: false },
				automaticLayout: true,
				fontSize: 14, // Nieco mniejszy font do gęstszego layoutu
				lineNumbers: 'off',
				glyphMargin: false,
				folding: false,
				scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
				overviewRulerLanes: 0,
				lineDecorationsWidth: 0,
				renderLineHighlight: 'none',
				wordWrap: 'on'
			});

			editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
				editor.getAction('editor.action.formatDocument')?.run();

				if (isEditMode) {
					updateCurrent();
				}
			});
			editor.onDidChangeModelContent(() => {
				editorValue = editor.getValue();
			});
		}
	});

	const goToStep = (index: number) => {
		currentIndex = index;
		editorValue = steps[index];
		editor.setValue(editorValue);
	};

	const saveAsNew = () => {
		steps = [...steps, editorValue];
		currentIndex = steps.length - 1;
	};

	const updateCurrent = () => {
		steps[currentIndex] = editorValue;
	};

	const exportJson = () => {
		const data = JSON.stringify(steps, null, 2);
		navigator.clipboard.writeText(data);
		alert('Eksportowano do schowka!');
	};

	function handleKeydown(e: KeyboardEvent) {
		e.stopPropagation();
	}
</script>

<div
	class="mx-auto flex h-[600px] w-[950px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl"
>
	<div class="grid flex-grow grid-cols-[60px_1fr_1fr] overflow-hidden">
		<aside
			class="relative flex h-full flex-col items-center gap-3 overflow-y-scroll border-r border-white/5 bg-[#111] pb-4"
		>
			<div
				class="sticky top-0 left-0 flex h-8 w-full items-center justify-between bg-zinc-900 text-base text-white/40"
			>
				<button
					class="flex-1 cursor-pointer hover:bg-zinc-400/10 hover:text-white"
					onclick={() => {
						if (currentIndex > 0) goToStep(currentIndex - 1);
					}}
				>
					{'<'}
				</button>
				<button
					class="flex-1 cursor-pointer hover:bg-zinc-400/10 hover:text-white"
					onclick={() => {
						if (currentIndex < steps.length - 1) goToStep(currentIndex + 1);
					}}
				>
					{'>'}
				</button>
			</div>
			{#each steps as _, i}
				<button
					onclick={() => goToStep(i)}
					class="flex size-8 min-h-8 cursor-pointer items-center justify-center rounded-md border-2 text-[10px] font-bold transition-all
                    {currentIndex === i
						? 'border-blue-500 bg-blue-500/20 text-white'
						: 'border-neutral-700 text-neutral-500 hover:border-neutral-500'}
                    {matchedStepIndex === i
						? 'border-green-500 bg-green-500/20 text-green-400'
						: ''}"
				>
					{i + 1}
				</button>
			{/each}

			{#if isEditMode}
				<button
					onclick={saveAsNew}
					class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-neutral-600 text-lg text-neutral-600 transition-colors hover:border-blue-400 hover:text-blue-400"
				>
					+
				</button>
			{/if}
		</aside>

		<section
			class="relative top-0! left-0! m-4 h-full border-r border-white/5 bg-[#1e1e1e]"
			onkeydown={handleKeydown}
		>
			<div bind:this={editorElement} class="h-full w-full"></div>
		</section>

		<section class="h-full w-full bg-white">
			<iframe
				title="Live Preview"
				srcdoc={editorValue}
				class="h-full w-full border-none"
				sandbox="allow-scripts"
			></iframe>
		</section>
	</div>

	<footer
		class="relative flex h-[30px] items-center justify-between border-t border-white/10 bg-[#181818] px-4"
	>
		<div
			class="flex items-center gap-4 text-[10px] font-medium tracking-widest text-neutral-500 uppercase"
		>
			<span>Step: {currentIndex + 1} / {steps.length}</span>
			{#if matchedStepIndex !== -1}
				<span class="font-bold text-green-500">● MATCHED {matchedStepIndex + 1}</span>
			{/if}
		</div>

		{#if isEditMode}
			<div
				class="absolute right-4 bottom-[35px] flex gap-2 rounded-md border border-white/10 bg-[#252526] p-2 shadow-2xl"
			>
				<button
					onclick={updateCurrent}
					class="rounded bg-neutral-700 px-3 py-1 text-[10px] text-white hover:bg-neutral-600"
				>
					Nadpisz klatkę
				</button>
				<button
					onclick={exportJson}
					class="rounded bg-blue-600 px-3 py-1 text-[10px] font-bold text-white hover:bg-blue-500"
				>
					JSON
				</button>
			</div>
		{/if}

		<button
			onclick={() => (isEditMode = !isEditMode)}
			class="group flex items-center gap-2 transition-opacity hover:opacity-80"
		>
			<span
				class="text-[10px] font-bold tracking-tighter uppercase {isEditMode
					? 'text-red-500'
					: 'text-neutral-500'}"
			>
				{isEditMode ? 'Recording' : 'Studio'}
			</span>
			<div class="relative flex h-3 w-3 items-center justify-center">
				{#if isEditMode}
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
					></span>
				{/if}
				<span
					class="relative inline-flex h-2 w-2 rounded-full {isEditMode
						? 'bg-red-500'
						: 'bg-neutral-600'}"
				></span>
			</div>
		</button>
	</footer>
</div>
