import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

const CTX = 'mini-chart-tooltip-context'

export const TooltipContext$$ = () => {
  const offset$ = writable(0)
  const syncKey$ = writable('')

  return setContext(CTX, {
    offset$,
    syncKey$,
    updateOffset: (value: number, key?: string) => {
      if (key) {
        syncKey$.set(key)
      }
      offset$.set(value)
    },
  })
}

export const getTooltipContext = () =>
  getContext<ReturnType<typeof TooltipContext$$> | undefined>(CTX)
