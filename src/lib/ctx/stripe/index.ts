import type { Stripe } from '@stripe/stripe-js'

import { BROWSER } from 'esm-env'
import { ss } from 'svelte-runes'
import { loadStripe } from '@stripe/stripe-js/pure'
import { createCtx } from '$lib/utils/index.js'

const STRIPE_KEY =
  process.env.IS_STAGE_BACKEND || process.env.IS_DEV_MODE
    ? 'pk_test_gy9lndGDPXEFslDp8mJ24C3p'
    : 'pk_live_t7lOPOW79IIVcxjPPK5QfESD'

let _stripe = null as null | Stripe
let _loading = null as null | Promise<any>

export const useStripeCtx = createCtx('useStripeCtx', () => {
  const stripe = ss<Stripe | null>(_stripe)

  return {
    stripe: {
      get $() {
        return this.load()
      },

      load() {
        if (!BROWSER) return null
        if (stripe.$) return stripe.$

        const update = (data: Stripe | null) => (stripe.$ = _stripe = data)

        // NOTE: Reusing _loader, otherwise there is memory leak.
        // Internal stripe state with global promise (loadStripe implementation) doesn't work
        if (_loading) _loading.then(update)
        else _loading = loadStripe(STRIPE_KEY).then(update)

        return null
      },
    },
  }
})
