import { BROWSER } from 'esm-env'
import { UniQuery } from '$lib/api/executor.js'
import { Fetcher } from '$lib/api/index.js'
import { calculateDaysTo } from '$lib/utils/dates.js'
import {
  getApiSubscription,
  getCustomerSubscriptionData,
  getPrimarySubscription,
  getSanbaseSubscription,
  type TSubscription,
} from '$ui/app/SubscriptionPlan/subscription.js'
import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'

export type TCustomer = {
  currentUser: null | {
    id: string
    email: null | string
    name: null | string
    username: null | string
    avatarUrl: null | string
    privacyPolicyAccepted: boolean
    marketingAccepted: boolean
    firstLogin: boolean
    isModerator: boolean

    settings: {
      theme: null | 'nightmode'
      isPromoter: boolean
      sanbaseVersion: null | string
    }

    ethAccounts: { address: string }[]
  }

  isLoggedIn: boolean

  sanBalance: number
  isEligibleForSanbaseTrial: boolean
  annualDiscount: null | {
    isEligible: boolean
    expireAt: null | string
    percent: null | number
    daysLeft: number
  }

  isBusinessSubscription: boolean
  isConsumerSubscription: boolean

  isCanceledSubscription: boolean
  isIncompleteSubscription: boolean

  isFree: boolean
  isPro: boolean
  isProPlus: boolean
  isMax: boolean
  isBusinessPro: boolean
  isBusinessMax: boolean
  isCustom: boolean

  isTrialSubscription: boolean
  trialDaysLeft: number

  plan: null | TSubscriptionPlan
  planName: string

  primarySubscription: null | TSubscription
  sanbaseSubscription: null | TSubscription
  apiSubscription: null | TSubscription
  subscriptions: null | TSubscription[]
}

export const DEFAULT: TCustomer = {
  currentUser: null,

  isLoggedIn: false,
  sanBalance: 0,
  isEligibleForSanbaseTrial: false,
  annualDiscount: normalizeAnnualDiscount(null),

  isCanceledSubscription: false,
  isIncompleteSubscription: false,

  planName: '',
  plan: null,

  isFree: true,
  isPro: false,
  isMax: false,
  isProPlus: false, // deprecated
  isBusinessPro: false,
  isBusinessMax: false,
  isCustom: false,

  isBusinessSubscription: false,
  isConsumerSubscription: false,

  isTrialSubscription: false,
  trialDaysLeft: 0,

  primarySubscription: null,
  sanbaseSubscription: null,
  apiSubscription: null,
  subscriptions: [],
}

export const queryCurrentUserSubscriptions = Fetcher(
  () => `{
  currentUser {
    id
    email
    name
    username
    avatarUrl
    privacyPolicyAccepted
    marketingAccepted
    firstLogin
    isModerator
    isEligibleForSanbaseTrial
    ethAccounts { address }
    settings {
      theme
      isPromoter
      sanbaseVersion
    }
    subscriptions {
      id
      status
      trialEnd
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product { id }
      }
    }
  }
}`,
  (gql: {
    currentUser: null | {
      id: string
      email: null | string
      name: null | string
      username: null | string
      avatarUrl: null | string
      privacyPolicyAccepted: boolean
      marketingAccepted: boolean
      firstLogin: boolean
      isModerator: boolean

      settings: {
        theme: null | 'nightmode'
        isPromoter: boolean
        sanbaseVersion: null | string
      }

      ethAccounts: { address: string }[]

      isEligibleForSanbaseTrial: boolean
      subscriptions: null | TSubscription[]
    }
  }) => gql.currentUser,
  { cache: false },
)

type TApiAnnualDiscount = null | {
  isEligible: boolean
  discount: null | {
    percentOff: number
    expireAt: string
  }
}
export const queryCustomerAnnualDiscount = Fetcher(
  () => `{
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`,
  (gql: { annualDiscount: TApiAnnualDiscount }) => gql.annualDiscount,
  { cache: false },
)

export const queryCurrentUserSanBalance = Fetcher(
  () => '{currentUser{sanBalance}}',
  (gql: {
    currentUser: null | {
      sanBalance: number
    }
  }) => gql.currentUser,
  { cache: false },
)

export function normalizeAnnualDiscount(
  annualDiscount: undefined | null | TApiAnnualDiscount,
): TCustomer['annualDiscount'] {
  const { isEligible = false, discount } = annualDiscount || {}
  const expireAt = discount?.expireAt ?? null
  const discountExpireAt = isEligible && expireAt

  return {
    isEligible,
    expireAt,
    percent: discount && isEligible ? discount.percentOff : null,
    daysLeft: discountExpireAt ? calculateDaysTo(discountExpireAt) : 0,
  }
}

export function loadCustomerData(
  fetcher: Parameters<typeof UniQuery>[0],
  update: (
    customerData: TCustomer | Pick<TCustomer, 'sanBalance'> | Pick<TCustomer, 'annualDiscount'>,
  ) => void,
) {
  const executor = UniQuery(fetcher)
  const defaultValue = Object.assign({}, DEFAULT)

  const subscriptionsPromise = queryCurrentUserSubscriptions(executor)()
  const sanBalancePromise = BROWSER ? queryCurrentUserSanBalance(executor)() : Promise.resolve()

  return subscriptionsPromise
    .then((currentUser) => {
      if (!currentUser) return update(defaultValue)

      const annualDiscountPromise = queryCustomerAnnualDiscount(executor)()

      const { subscriptions } = currentUser
      const sanbaseSubscription = getSanbaseSubscription(subscriptions)
      const apiSubscription = getApiSubscription(subscriptions)
      const primarySubscription = getPrimarySubscription(subscriptions)

      update(
        Object.assign(
          {},
          defaultValue,
          currentUser,
          { currentUser },
          getCustomerSubscriptionData(primarySubscription),
          {
            isLoggedIn: true,

            primarySubscription,
            sanbaseSubscription,
            apiSubscription,
          },
        ),
      )

      sanBalancePromise
        .then((data) => update({ sanBalance: data?.sanBalance ?? 0 }))
        .catch(() => {})
      return annualDiscountPromise
        .then((data) => update({ annualDiscount: normalizeAnnualDiscount(data) }))
        .catch(() => {})
    })
    .catch(() => update(defaultValue))
}
