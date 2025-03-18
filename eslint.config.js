import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import compat from 'eslint-plugin-compat';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//
// Add .gitignore paths to the ignore list
// https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default ts.config(
	includeIgnoreFile(gitignorePath),
	{
		ignores: ['tauri/**/*', 'src/static/**/*']
	},
	{
		files: ['**/*.js', '**/*.mjs'],
		...js.configs.recommended
	},
	...ts.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	prettier,
	...svelte.configs['flat/recommended'].map((c) => ({
		files: ['**/*.svelte'],
		...c
	})),
	...svelte.configs['flat/prettier'].map((c) => ({
		files: ['**/*.svelte'],
		...c
	})),
	{
		files: ['src/**'],
		...compat.configs['flat/recommended']
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_|e',
					ignoreRestSiblings: true
				}
			]
		}
	}
);
