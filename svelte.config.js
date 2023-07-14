import { styleChildComponent } from 'svelte-preprocess-style-child-component'
import preprocess from 'svelte-preprocess'
import cssModules from 'svelte-preprocess-cssmodules'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import './src/styles/fn.scss';`,
      },
    }),

    styleChildComponent(),

    cssModules(),
  ],
}

export default config
