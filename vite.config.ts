import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { WebkitSvg } from './plugins/vite.js'

export default defineConfig({
  plugins: [sveltekit(), WebkitSvg()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})
