import { getContext, setContext } from 'svelte'
import { get, writable } from 'svelte/store'

const CTX = 'mini-tooltip-context'

export const TooltipContext$$ = () => {
  const offset$ = writable<number | null>(null)
  const syncKey$ = writable<string | null>(null)

  return setContext(CTX, {
    offset$,
    updateOffset: (value: number | null, key?: string) => {
      if (key) {
        syncKey$.set(key)
      }
      offset$.set(value)
    },
    checkKey: (key: string) => get(syncKey$) === key,
  })
}

export const getTooltipContext = () => getContext<ReturnType<typeof TooltipContext$$>>(CTX)
