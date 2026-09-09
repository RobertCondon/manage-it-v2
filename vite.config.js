import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		},
		// Ensure maximum compression
		chunkSizeWarningLimit: 1600,
		assetsInlineLimit: 4096
	},
	optimizeDeps: {
		include: []
	}
});
