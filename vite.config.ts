// import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// lib: {
		// 	entry: resolve(__dirname, 'src/lib/index.ts'),
		// 	name: 'ArcSvelteComponents',
		// 	fileName: 'arc-svelte-components'
		// },
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: {
					svelte: 'Svelte'
				}
			}
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/style/main.scss";'
			}
		}
	}
});
