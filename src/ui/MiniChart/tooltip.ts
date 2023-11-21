import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

const CTX = 'mini-tooltip-context'
const DEFAULT_KEY = '__DEFAULT_OFFSET'

export const TooltipContext$$ = () => {
  type OffsetMap = Map<string, number | null>
  const offsetMap = writable<OffsetMap>(new Map())

  return setContext(CTX, {
    offsetMap,
    updateOffset: (value: number | null, key = DEFAULT_KEY) => {
      offsetMap.update((offsets) => offsets.set(key, value))
    },
    getOffset: (offsets: OffsetMap, key = DEFAULT_KEY) => offsets.get(key) ?? null,
  })
}

export const getTooltipContext = () => getContext<ReturnType<typeof TooltipContext$$>>(CTX)
