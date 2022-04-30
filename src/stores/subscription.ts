import { query } from '@/api'
import { Cache } from '@/api/cache'
import { writable } from 'svelte/store'

const USER_SANBASE_SUBSCRIPTION_QUERY = `{
  currentUser {
    subscription:primaryUserSanbaseSubscription {
      id
      status
      trialEnd
      currentPeriodEnd
      cancelAtPeriodEnd
      plan {
        id
        name
        amount
        interval
      }
    }
  }
}`

const querySanbaseSubscription = () => query<any>(USER_SANBASE_SUBSCRIPTION_QUERY)

const store = {
  fetched: false,
  value: null,
}
const { subscribe, set } = writable<null | SAN.Subscription>(store.value)

function accessor({ currentUser }) {
  set(currentUser?.subscription || null)
}

export const subscription$ = {
  set,
  query() {
    store.fetched = true
    return querySanbaseSubscription().then(accessor)
  },
  subscribe(run, invalidate): ReturnType<typeof subscribe> {
    if (!store.fetched) subscription$.query()
    return subscribe(run, invalidate)
  },
  clear() {
    Cache.delete(USER_SANBASE_SUBSCRIPTION_QUERY)
    store.fetched = false
  },
  refetch() {
    subscription$.clear()
    return subscription$.query()
  },
}
