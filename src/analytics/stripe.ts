import { newHeadScript } from './utils'

const STRIPE_KEY =
  process.env.BACKEND_URL === process.env.IS_STAGE_BACKEND || process.env.IS_DEV_MODE
    ? 'pk_test_gy9lndGDPXEFslDp8mJ24C3p'
    : 'pk_live_t7lOPOW79IIVcxjPPK5QfESD'

export const bootStripe = () => (window.StripeInstance = window.Stripe?.(STRIPE_KEY))

export function initStripe(onload: (e?: Event) => any = bootStripe) {
  newHeadScript(undefined, {
    async: true,
    src: 'https://js.stripe.com/v3',
  }).onload = onload
}
