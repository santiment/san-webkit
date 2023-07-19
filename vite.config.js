import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import { defineConfig } from 'vitest/config'

const mode = process.env.NODE_ENV
const dev = mode !== 'production'

process.env.MEDIA_PATH = '/webkit'
process.env.ICONS_PATH = process.env.MEDIA_PATH + '/icons'

const BACKEND_URL = process.env.BACKEND_URL || 'https://api.santiment.net'
process.env.BACKEND_URL = BACKEND_URL
const GQL_SERVER_FALLBACK = process.env.BACKEND_URL + '/graphql'
const IS_STAGE_BACKEND = process.env.BACKEND_URL.includes('-stage')
const IS_PROD_BACKEND = !IS_STAGE_BACKEND

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom',
  },

  server: {
    port: 3000,
  },

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'webkit', replacement: path.resolve(__dirname, './src') },
    ],
  },

  define: {
    'process.browser': false,

    'process.env.IS_DEV_MODE': dev,
    'process.env.IS_PROD_MODE': !dev,

    'process.env.MEDIA_PATH': JSON.stringify(process.env.MEDIA_PATH),
    'process.env.ICONS_PATH': JSON.stringify(process.env.ICONS_PATH),

    'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL),
    'process.env.GQL_SERVER_URL': JSON.stringify(GQL_SERVER_FALLBACK),

    'process.env.IS_STAGE_BACKEND': IS_STAGE_BACKEND,
    'process.env.IS_PROD_BACKEND': IS_PROD_BACKEND,
  },

  clientDefines: {
    'process.browser': true,
  },
})
