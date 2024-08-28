import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [svelte()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'ArcSvelteComponents',
			fileName: 'arc-svelte-components'
		},
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: {
					svelte: 'Svelte'
				}
			}
		}
	}
});
