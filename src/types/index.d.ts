declare namespace NodeJS {
  interface Process {
    browser: boolean
    env: typeof process.env & {
      IS_PROD_BACKEND: boolean
      IS_STAGE_BACKEND: boolean
      IS_DEV_MODE: boolean
      IS_PROD_MODE: boolean
    }
  }
}

interface Window {
  Stripe?: stripe.StripeStatic
  StripeInstance?: stripe.Stripe
  ethereum?: any
  provider?: any
  __onLinkClick?: (e: MouseEvent) => void
}
