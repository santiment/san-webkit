import type { Stripe } from '@stripe/stripe-js'

import { BROWSER } from 'esm-env'
import { ss } from 'svelte-runes'
import { loadStripe } from '@stripe/stripe-js/pure'
import { createCtx } from '$lib/utils/index.js'

const STRIPE_KEY =
  process.env.IS_STAGE_BACKEND || process.env.IS_DEV_MODE
    ? 'pk_test_gy9lndGDPXEFslDp8mJ24C3p'
    : 'pk_live_t7lOPOW79IIVcxjPPK5QfESD'

export const useStripeCtx = createCtx('useStripeCtx', () => {
  const stripe = ss<Stripe | null>(null)

  let loading = null as null | Promise<any>

  return {
    stripe: {
      get $() {
        return this.load()
      },

      load() {
        if (!BROWSER) return null
        if (stripe.$) return stripe.$
        if (loading) return null

        loading = loadStripe(STRIPE_KEY).then((data) => {
          stripe.$ = data
          loading = null
          return data
        })

        return null
      },
    },
  }
})
