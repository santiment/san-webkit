import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import importPlugin from 'eslint-plugin-import'
import svelteParser from 'svelte-eslint-parser'

import svelteConfig from './svelte.config.js'

const importResolverConfig = {
  'import/resolver': {
    typescript: true,
    node: true,

    'eslint-import-resolver-custom-alias': {
      alias: {
        $app: 'node_modules/@sveltejs/kit/src/runtime/app',
        '@sveltejs/kit': 'node_modules/@sveltejs/kit/src/exports/index.js',
      },
      extensions: ['.js'],
    },
  },
}

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    ignores: [
      '**/.DS_Store',
      '**/node_modules',
      'build',
      'dist',
      'vite.config.ts.timestamp-*',
      '.svelte-kit',
      'package',
      '**/.env',
      '**/.env.*',
      '!**/.env.example',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
      'src/stories/*',
    ],
  },

  {
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        $$Generic: 'readonly',
      },
    },

    rules: {
      'svelte/require-each-key': 'off',
      'no-self-assign': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-constant-binary-import/resolverexpression': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'svelte/no-at-html-tags': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^\\$\\$(Props|Events|Slots)$|^_',
        },
      ],
      'import/no-duplicates': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
          ],
          'newlines-between': 'always',
        },
      ],
    },

    settings: {
      ...importResolverConfig,
    },
  },

  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig,
      },
    },
    settings: {
      ...importResolverConfig,
    },
  },
]
