import path from 'node:path'
import { execSync } from 'node:child_process'
import { defineConfig, mergeConfig } from 'vite'
import { sveltekit as _sveltekit } from '@sveltejs/kit/vite'
import { StaticAssetLogos, WebkitSvg } from './plugins/vite.js'
import { mkcert } from './scripts/mkcert.js'

export const IS_DEV_MODE = process.env.NODE_ENV === 'development'

export const BACKEND_URL = process.env.BACKEND_URL || 'https://api-stage.santiment.net'
export const GQL_SERVER_URL = process.env.GQL_SERVER_URL || BACKEND_URL + '/graphql'
export const IS_STAGE_BACKEND = BACKEND_URL.includes('-stage')
export const IS_PROD_BACKEND = !IS_STAGE_BACKEND

export const GIT_HEAD =
  process.env.GIT_HEAD || execSync('git rev-parse HEAD').toString().trim().slice(0, 7)

export const GIT_HEAD_DATETIME = getGitHeadDate()

export const SENTRY_DSN = process.env.SENTRY_DSN
export const SENTRY_URL = SENTRY_DSN && new URL(SENTRY_DSN).origin

export const ROOT = path.resolve('.')

export function createConfig({
  corsOrigin = 'https://santiment.net',
  sveltekit = _sveltekit,
}: {
  corsOrigin?: string
  sveltekit?: typeof _sveltekit
} = {}) {
  const corsHostname = new URL(corsOrigin).hostname

  const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN

  const isSentryEnabled = IS_DEV_MODE === false && SENTRY_AUTH_TOKEN

  return defineConfig({
    plugins: [mkcert(), WebkitSvg(), sveltekit()],

    build: {
      sourcemap: isSentryEnabled ? 'hidden' : false,
      rollupOptions: {
        output: {
          sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
            const absPath = path.resolve(path.dirname(sourcemapPath), relativeSourcePath)
            return absPath.replace(ROOT, '')
          },
        },
      },
    },

    test: {
      include: ['src/**/*.{test,spec}.{js,ts}'],
    },

    server: {
      port: 3000,
    },

    define: {
      __SENTRY_TRACING__: false,

      'process.env.NODE_ENV': IS_DEV_MODE ? '"development"' : '"production"',
      'process.env.IS_DEV_MODE': IS_DEV_MODE,
      'process.env.IS_PROD_MODE': !IS_DEV_MODE,
      'process.env.IS_LOGGING_ENABLED': IS_DEV_MODE || IS_STAGE_BACKEND,

      'process.env.SENTRY_DSN': JSON.stringify(SENTRY_DSN),

      'process.env.GQL_SERVER_URL': JSON.stringify(GQL_SERVER_URL),
      'process.env.NODE_GQL_SERVER_URL': JSON.stringify(process.env.NODE_GQL_SERVER_URL),
      'process.env.CORS_HOSTNAME': JSON.stringify(corsHostname),

      'process.env.BACKEND_URL': JSON.stringify(BACKEND_URL),
      'process.env.IS_STAGE_BACKEND': IS_STAGE_BACKEND,
      'process.env.IS_PROD_BACKEND': IS_PROD_BACKEND,

      'process.env.GIT_HEAD': JSON.stringify(GIT_HEAD),
      'process.env.GIT_HEAD_DATETIME': JSON.stringify(GIT_HEAD_DATETIME),
    },
  })
}

export default mergeConfig(createConfig(), {
  plugins: [StaticAssetLogos()],
})

function getGitHeadDate() {
  const date: null | Date = new Date(
    execSync('git show --no-patch --format=%ci ' + GIT_HEAD).toString(),
  )

  return Number.isNaN(+date) ? null : date
}
