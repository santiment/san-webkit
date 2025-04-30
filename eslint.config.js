// @ts-check

import js from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import svelteParser from 'svelte-eslint-parser'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

/**
 * @typedef {import('typescript-eslint').ConfigWithExtends} Config
 */

/**
 * @type Config['languageOptions']
 */
const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.node,
    ...globals.browser,
  },
}

/**
 * @type Config['rules']
 */
const rules = {
  'no-undef': 'off',
  'no-constant-binary-expression': 'off',
  'no-self-assign': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',
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
      groups: ['type', 'builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
      'newlines-between': 'always',
      pathGroups: [
        {
          // Minimatch pattern used to match against specifiers
          pattern: '$app/**',
          // The predefined group this PathGroup is defined in relation to
          group: 'external',
          // How matching imports will be positioned relative to "group"
          position: 'after',
        },
      ],
    },
  ],
  'import/no-unresolved': ['error', { ignore: ['^\\$app\\/'] }],
}

const importResolverConfig = {
  'import/resolver': {
    typescript: true,
    node: true,
  },
}

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/prettier'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  eslintPluginPrettierRecommended,
  {
    files: ['*.svelte', '**/*.svelte'],
    languageOptions: {
      ...languageOptions,
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
        ecmaFeatures: {},
      },
    },
    rules: rules,
    settings: {
      ...importResolverConfig,
    },
  },
  {
    files: ['*.ts', '**/*.ts', '*.js', '**/*.js'],
    languageOptions: {
      ...languageOptions,
      parser: tseslint.parser,
    },
    rules: rules,
    settings: {
      ...importResolverConfig,
    },
  },
  {
    ignores: [
      'node_modules',
      'build',
      'dist',
      '.svelte-kit',
      'package',
      'static',
      'vite.config.js.timestamp-*',
      'src/stories/*',
    ],
  },
)
