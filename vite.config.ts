import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { StaticAssetLogos, WebkitSvg } from './plugins/vite.js'

export default defineConfig({
  plugins: [sveltekit(), WebkitSvg(), StaticAssetLogos()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})
