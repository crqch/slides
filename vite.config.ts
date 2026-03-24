import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

const monacoPluginFactory =
	typeof monacoEditorPlugin === 'function' ? monacoEditorPlugin : monacoEditorPlugin.default;

export default defineConfig(({ command }) => ({
	plugins: [
		tailwindcss(),
		sveltekit(),
		...(command === 'build'
			? [
					monacoPluginFactory({
						languageWorkers: ['html', 'css', 'typescript']
					})
				]
			: [])
	]
}));
