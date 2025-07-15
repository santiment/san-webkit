import type { RequestEvent } from '@sveltejs/kit'
import type { Prettify } from '@melt-ui/svelte/internal/types'

import { BROWSER } from 'esm-env'

import { createCtx, getCookie, setCookie } from '$lib/utils/index.js'

export type TBaseABSchema = {
  key: string
  cookieKey: string
  variants: string[]
}

export type ABSettings<GSchema extends TBaseABSchema> = Prettify<{
  [K in GSchema as K['key']]: K['variants'][number]
}>

export function createABTestCtx<T extends TBaseABSchema = TBaseABSchema>(testSchemas: T[] = []) {
  const initABSettings = (event: RequestEvent) =>
    testSchemas.reduce((prev, schema) => {
      const cookieValue = event.cookies.get(schema.cookieKey)

      const fitValue = cookieValue && schema.variants.includes(cookieValue)
      const abValue = fitValue
        ? cookieValue
        : schema.variants[Math.floor(Math.random() * schema.variants.length)]

      return { ...prev, [schema.key]: abValue }
    }, {} as ABSettings<T>)

  return {
    initABSettings,
    useABTestCtx: createCtx('webkit_useABTestCtx', (settings: ABSettings<T>) => ({
      abTests: {
        get $() {
          return settings
        },

        setCookies() {
          if (!BROWSER) return

          testSchemas.forEach((schema: T) => {
            const cookieValue = getCookie(schema.cookieKey)
            if (cookieValue) return

            const key = schema.key as keyof ABSettings<T>
            const abValue = settings[key]

            setCookie(schema.cookieKey, abValue as string)
          })
        },
      },
    })),
  }
}
