// TODO: Support server side page context
/* NOTE: Shares svelte contexts between isolated Astro islands. Wraps the svelteCtxPath module
   into a fake component scope (push without pop, like mount() does), so its setContext
   calls become visible to every island mounted after it. */
export function AstroSvelteCtx(svelteCtxPath: string) {
  return {
    name: 'astro-svelte-ctx',
    hooks: {
      'astro:config:setup': (options: {
        injectScript: (stage: string, content: string) => void
        updateConfig: (config: Record<string, unknown>) => unknown
      }) => {
        const { injectScript, updateConfig } = options

        injectScript('before-hydration', `import "${svelteCtxPath}"`)

        updateConfig({
          vite: {
            plugins: [
              {
                name: 'astro-svelte-ctx:transform',
                enforce: 'pre',

                transform(src: string, id: string) {
                  if (id.includes(svelteCtxPath)) {
                    const code =
                      src.replace(
                        /(import .*\n)+/g,
                        `import { effect_root, push } from 'svelte/internal/client';
                          $&
                          push({}, true, () => {});
                          effect_root(() => {
                        `,
                      ) + '});'

                    return { code, map: null }
                  }
                },
              },
            ],
          },
        })
      },
    },
  }
}
