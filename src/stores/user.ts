import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { Universal, query } from '@/api'
import { Cache } from '@/api/cache'
import { setSessionValue } from './utils'

export const ANNUAL_DISCOUT_FRAGMENT = `
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
`

const CUSTOMER_DATA_QUERY = `{
  currentUser {
    sanBalance
    isEligibleForTrial:isEligibleForSanbaseTrial
  }
  ${ANNUAL_DISCOUT_FRAGMENT}
}`

export const accessor = ({ currentUser, annualDiscount }) =>
  Object.assign({ annualDiscount, isLoggedIn: !!currentUser }, currentUser)
export const queryCustomerData = () => query<any>(CUSTOMER_DATA_QUERY).then(accessor)

export type CustomerData = {
  isLoggedIn: boolean
  sanBalance: number
  isEligibleForTrial: boolean
  annualDiscount?: SAN.AnnualDiscount
}

export const DEFAULT = {
  isLoggedIn: false,
  sanBalance: 0,
  isEligibleForTrial: false,
  annualDiscount: undefined,
} as CustomerData

const { subscribe, set } = writable<CustomerData>(DEFAULT)

export const customerData$ = {
  fetched: false,
  set,
  setValue(value) {
    customerData$.set(value)
    return value
  },
  setDefault() {
    this.set(DEFAULT)
  },
  query() {
    this.fetched = true
    return queryCustomerData()
      .then(this.setValue)
      .catch((e) => {
        console.error(e)
        this.set(DEFAULT)
      })
  },
  subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
    if (!this.fetched) this.query()
    return subscribe(run, invalidate)
  },
  clear() {
    Cache.delete(CUSTOMER_DATA_QUERY)
    this.fetched = false
  },
  refetch() {
    this.clear()
    return this.query()
  },
}

// ------------------------------

export type PromoCode = {
  campaign: string
  coupon: string
  percentOff: number
  timesRedeemed: number
  maxRedemptions: number
}

export type CurrentUserType = {
  id: number
  email: string | null
  username: string | null
  name: string | null
  privacyPolicyAccepted: boolean
  marketingAccepted: boolean
  firstLogin: boolean
  avatarUrl?: string
  isModerator?: boolean
  isEligibleForTrial: boolean
  apikeys: string[]

  ethAccounts?: { address: string }[]

  settings: {
    theme: string
    hasTelegramConnected: boolean
    isPromoter: boolean

    alertNotifyEmail: boolean
    alertNotifyTelegram: boolean
  }

  promoCodes?: PromoCode[]
}

export type CurrentUser$Type = ReturnType<typeof CurrentUser$$>['currentUser$']

export const CURRENT_USER_FRAGMENT = `
    id
    email
    username
    name
    privacyPolicyAccepted
    marketingAccepted
    avatarUrl
    apikeys
    firstLogin
    isModerator
    isEligibleForTrial:isEligibleForSanbaseTrial
    settings {
      theme
      alertNotifyEmail
      alertNotifyTelegram
      hasTelegramConnected
      isPromoter
    }
    following {
      count
      users {id}
    }
    ethAccounts {
      address
    }
    promoCodes {
      campaign
      coupon
      percentOff
      timesRedeemed
      maxRedemptions
    }
`

export const CURRENT_USER_QUERY = `
  {
    currentUser {
      ${CURRENT_USER_FRAGMENT}
    }
  }
`

export const queryCurrentUser = Universal(
  (query) => () => query<SAN.API.Query<'currentUser', CurrentUserType | null>>(CURRENT_USER_QUERY),
)

const CTX = 'CurrentUser$$'
export function CurrentUser$$(currentUser: null | CurrentUserType) {
  const { set, subscribe } = writable(currentUser)

  const currentUser$ = {
    subscribe,
    set(currentUser: null | CurrentUserType) {
      setSessionValue({ currentUser })
      set(currentUser)
    },
  }

  return setContext(CTX, { currentUser$ })
}

export const getCurrentUser$Ctx = () => getContext(CTX) as ReturnType<typeof CurrentUser$$>
