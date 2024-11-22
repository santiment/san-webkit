import type { MeltActionReturn } from '@melt-ui/svelte/internal/types'
import type { Builder } from 'bits-ui'
import type { SS } from 'svelte-runes'

import { onMount } from 'svelte'

export function useMelt(
  ref: SS<null | HTMLElement>,
  meltStore: { subscribe: (value: any) => () => any } & ((
    node: HTMLElement,
  ) => MeltActionReturn<any>),
) {
  onMount(() => {
    const node = ref.$

    if (!node) return

    const { destroy } = meltStore(node)
    const unsubscribe = meltStore.subscribe(({ action: _action, ...attrs }: Builder) => {
      for (const key in attrs) {
        const value = attrs[key]
        if (value !== undefined) node.setAttribute(key, value)
      }
    })

    return () => {
      destroy?.()
      unsubscribe()
    }
  })
}
