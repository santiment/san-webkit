import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import importPlugin from 'eslint-plugin-import'

const importResolverConfig = {
  'import/resolver': {
    typescript: true,
    node: true,
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
      globals: {
        ...globals.browser,
        ...globals.node,
        $$Generic: 'readonly',
      },
    },

    rules: {
      'no-self-assign': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-constant-binary-expression': 'off',
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
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
    settings: {
      ...importResolverConfig,
    },
  },
]
