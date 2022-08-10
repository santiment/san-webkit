import { query } from '@/api'
import { Cache } from '@/api/cache'
import { writable } from 'svelte/store'

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

const accessor = ({ currentUser, annualDiscount }) =>
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
  isEligibleForTrial: true,
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
