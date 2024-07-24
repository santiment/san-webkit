import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import mkcert from 'vite-plugin-mkcert'
import { StaticAssetLogos, WebkitSvg } from './plugins/vite.js'

const BACKEND_URL = process.env.BACKEND_URL || 'https://api-stage.santiment.net'
const GQL_SERVER_FALLBACK = BACKEND_URL + '/graphql'

export default defineConfig({
  plugins: [mkcert({ savePath: './mkcert' }), sveltekit(), WebkitSvg(), StaticAssetLogos()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },

  define: {
    'process.env.GQL_SERVER_URL': JSON.stringify(GQL_SERVER_FALLBACK),
  },
})
