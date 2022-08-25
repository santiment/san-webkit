import { query } from './../api'
import { Cache } from './../api/cache'
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
export const queryCustomerData = () => query(CUSTOMER_DATA_QUERY).then(accessor)
export const DEFAULT = {
  isLoggedIn: false,
  sanBalance: 0,
  isEligibleForTrial: false,
  annualDiscount: undefined,
}
const { subscribe, set } = writable(DEFAULT)
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
  subscribe(run, invalidate) {
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
//# sourceMappingURL=user.js.map
