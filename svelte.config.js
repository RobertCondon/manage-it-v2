import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Prerender all pages by default
			fallback: '200.html'
		}),
		// Enable prerendering for static pages
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
