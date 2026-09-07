import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

export default [
	{
		ignores: ['build/', '.svelte-kit/', '.netlify/', 'dist/', 'node_modules/', 'reports/', 'playwright-report/', 'test-results/', '**/*.cjs']
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			// Allow console in development
			'no-console': [
				process.env.NODE_ENV === 'production' ? 'error' : 'warn',
				{ allow: ['warn', 'error'] }
			],
			// Allow unused vars with underscore prefix
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			// Allow any type in some cases
			'@typescript-eslint/no-explicit-any': 'warn',
			// The site is served from the domain root with no base path, so
			// plain href strings are correct here.
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		// Build/CI scripts and tests report progress on stdout by design.
		files: ['scripts/**/*.js', 'tests/**/*.js', 'playwright.config.js'],
		rules: {
			'no-console': 'off'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser
			}
		}
	}
];
