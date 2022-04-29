import { query } from '@/api'
import { Cache } from '@/api/cache'
import { writable } from 'svelte/store'

const CUSTOMER_DATA_QUERY = `{
  currentUser {
    sanBalance
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

const queryCustomerData = () => query<any>(CUSTOMER_DATA_QUERY)

type CustomerData = {
  sanBalance: number
  isEligibleForTrial: boolean
  annualDiscount: SAN.AnnualDiscount
}

const store = {
  fetched: false,
  value: {
    sanBalance: 0,
    isEligibleForTrial: false,
    annualDiscount: {},
  } as CustomerData,
}

const { subscribe, set } = writable<CustomerData>(store.value)
function accessor({ currentUser, annualDiscount }) {
  set(Object.assign({ annualDiscount }, currentUser))
}
export const customerData$ = {
  set,
  query() {
    store.fetched = true
    return queryCustomerData().then(accessor)
  },
  subscribe(run, invalidate) {
    if (!store.fetched) customerData$.query()
    return subscribe(run, invalidate)
  },
  clear() {
    Cache.delete(CUSTOMER_DATA_QUERY)
    store.fetched = false
  },
  refetch() {
    customerData$.clear()
    return customerData$.query()
  },
}
