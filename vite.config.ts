import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, mergeConfig } from 'vitest/config'
import mkcert from 'vite-plugin-mkcert'
import { execSync } from 'node:child_process'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { StaticAssetLogos, WebkitSvg } from './plugins/vite.js'

const BACKEND_URL = process.env.BACKEND_URL || 'https://api-stage.santiment.net'
const GQL_SERVER_FALLBACK = BACKEND_URL + '/graphql'
const IS_STAGE_BACKEND = BACKEND_URL.includes('-stage')
const IS_PROD_BACKEND = !IS_STAGE_BACKEND

const GIT_HEAD =
  process.env.GIT_HEAD || execSync('git rev-parse HEAD').toString().trim().slice(0, 7)

export const config = defineConfig({
  plugins: [
    mkcert({ savePath: './mkcert', hosts: ['local.santiment.net'] }),
    sveltekit(),
    WebkitSvg(),

    // Put the Sentry vite plugin after all other plugins
    sentryVitePlugin({
      debug: true,
      org: 'sentry',
      project: 'sanbase-app',
      url: process.env.SENTRY_URL,

      sourcemaps: {
        filesToDeleteAfterUpload: '**/*.map',
      },

      // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },

  server: {
    port: 3000,
  },

  define: {
    'process.env.SENTRY_DSN': JSON.stringify(''),

    'process.env.IS_DEV_MODE': process.env.NODE_ENV === 'development',
    'process.env.GQL_SERVER_URL': JSON.stringify(GQL_SERVER_FALLBACK),

    'process.env.IS_STAGE_BACKEND': IS_STAGE_BACKEND,
    'process.env.IS_PROD_BACKEND': IS_PROD_BACKEND,

    'process.env.GIT_HEAD': JSON.stringify(GIT_HEAD),
  },
})

export default mergeConfig(config, {
  plugins: [StaticAssetLogos()],
})
