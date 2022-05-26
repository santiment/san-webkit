import type { Subscriber, Unsubscriber } from 'svelte/store'
import { writable } from 'svelte/store'
import { initStripe, bootStripe } from '@/analytics/stripe'

type Value = null | stripe.Stripe
type Store = {
  load: () => void
  subscribe: (this: void, run: Subscriber<Value>, invalidate?: any) => Unsubscriber
}

let loaded = false
const { subscribe, set } = writable<Value>(null)
const onLoad = () => set(bootStripe())

export const stripe: Store = {
  load() {
    if (loaded || process.browser !== true) return
    loaded = true
    initStripe(onLoad)

    if (process.env.IS_DEV_MODE) {
      console.log(
        '%c[DEV ONLY]',
        'background:#FFCB47;color:black;padding:3px;border-radius:4px',
        'Preloading stripe',
      )
    }
  },
  subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
    stripe.load()
    return subscribe(run, invalidate)
  },
}
