import { query, Universal } from '@/api'
import { Cache } from '@/api/cache'
import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { QueryStore } from './utils'

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

export const CUSTOMER_QUERY = `{
  currentUser {
    isEligibleForTrial:isEligibleForSanbaseTrial
  }
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`

const BALANCE_QUERY = '{currentUser{sanBalance}}'

const accessor = ({ currentUser, annualDiscount }) =>
  Object.assign({ annualDiscount, isLoggedIn: !!currentUser }, currentUser)
export const queryCustomerData_legacy = () => query<any>(CUSTOMER_DATA_QUERY).then(accessor)

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
    return queryCustomerData_legacy()
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

export const queryCustomerData = Universal(
  (query) => () =>
    query<any>(CUSTOMER_QUERY)
      .then(accessor)
      .catch(() => DEFAULT) as Promise<CustomerData>,
)

const CTX = 'CustomerData$$'
export function CustomerData$$(defaultValue: CustomerData) {
  function fetch() {
    return Promise.all([queryCustomerData(), query<any>(BALANCE_QUERY)]).then(
      ([customerQuery, balanceQuery]) => {
        return Object.assign(customerQuery, balanceQuery.currentUser)
      },
    )
  }

  const store = QueryStore(defaultValue, fetch, '')
  store.clear = function () {
    Cache.delete(CUSTOMER_QUERY)
    Cache.delete(BALANCE_QUERY)
    this.fetched = false
  }

  return setContext(CTX, store)
}

export const getCustomerData$Ctx = () => getContext<ReturnType<typeof CustomerData$$>>(CTX)
