import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

const monacoPluginFactory =
	// @ts-expect-error this is a workaround for a known issue with the monaco editor plugin
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
