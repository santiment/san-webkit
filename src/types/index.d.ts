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
  // eslint-disable-next-line no-undef
  Stripe?: stripe.StripeStatic
  // eslint-disable-next-line no-undef
  StripeInstance?: stripe.Stripe
  ethereum?: any
  twttr?: any
  provider?: any
  __onLinkClick?: (e: MouseEvent) => void
  showCancelSubscriptionDialog?: (e: MouseEvent) => void
  twq?: any
  __SAPPER__?: any

  amplitude?: {
    track: (action: string, eventProperties: { [key: string]: any }) => void
    flush: () => void
    Identify: any
    identify: any
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace MediumEditor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface MediumEditor {
    Extension: {
      extend: (any) => any
    }

    selection: {
      getSelectionRange: (document: HTMLElement) => Range
      clearSelection: (document: HTMLElement) => void
    }

    util: {
      getKeyCode: (e: KeyboardEvent) => number
      keyCode: {
        [key: string]: number
      }
    }
  }
}

declare namespace SAN {
  type Walkthrough = {
    id: string
    nodeId?: string
    title: string
    description: string
    align?: 'left' | 'right'
  }
}
