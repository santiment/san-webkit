import { writable } from 'svelte/store'
import { query } from '@/api'
import { Cache } from '@/api/cache'
import { getSanbaseSubscription } from '@/utils/subscription'

// NOTE: Backend doesn't return INCOMPLETE subscription in primaryUserSanbaseSubscription [@vanguard | 03 Mar, 2023]
// const USER_SANBASE_SUBSCRIPTION_QUERY = `{
//   currentUser {
//     subscription:primaryUserSanbaseSubscription {
//       id
//       status
//       trialEnd
//       currentPeriodEnd
//       cancelAtPeriodEnd
//       plan {
//         id
//         name
//         amount
//         interval
//       }
//     }
//   }
// }`

const USER_SANBASE_SUBSCRIPTION_QUERY = `{
  currentUser {
    subscriptions {
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
        product {id}
      }
    }
  }
}`

const querySanbaseSubscription = () =>
  query<any>(USER_SANBASE_SUBSCRIPTION_QUERY).then(({ currentUser }) =>
    currentUser ? getSanbaseSubscription(currentUser.subscriptions) : null,
  )

const store = {
  fetched: false,
  value: null,
}
const { subscribe, set } = writable<null | SAN.Subscription>(store.value)

export const subscription$ = {
  set,
  query() {
    store.fetched = true
    return querySanbaseSubscription().then(set)
  },
  subscribe(run: Parameters<typeof subscribe>[0], invalidate): ReturnType<typeof subscribe> {
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
