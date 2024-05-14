import adapter from '@sveltejs/adapter-auto'
import { sequence } from '@sveltejs/kit/hooks'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { componentStyleSelector } from './plugins/svelte.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sequence([vitePreprocess(), componentStyleSelector()]),

  kit: {
    adapter: adapter(),
    alias: {
      '$routes/*': './src/routes/*',
      '$static/*': './static/*',
    },
  },
}

export default config

export { componentStyleSelector }
