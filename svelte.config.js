import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Inline stylesheets under 2 KB into the HTML (removes a render-blocking
		// request for the tiny per-page CSS; the large shared stylesheet stays
		// external and cacheable).
		inlineStyleThreshold: 2048,
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
