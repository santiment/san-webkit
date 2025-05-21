import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'

import {
  DEFAULT_METRICS_RESTRICTIONS,
  queryGetAccessRestrictions,
  type TMetricRestrictions,
} from './api.js'

export { type TMetricRestrictions } from './api.js'

export const useMetricsRestrictionsCtx = createCtx('webkit_useMetricsRestrictionsCtx', () => {
  const { customer } = useCustomerCtx.get()
  const planName = $derived(customer.$.planName) // NOTE: Using explicit derived to fix refeteches on `customer.$` changes

  let MetricsRestrictions = $state.raw<Record<string, undefined | TMetricRestrictions>>(
    DEFAULT_METRICS_RESTRICTIONS,
  )

  $effect(() => {
    // NOTE: Refetching restrictions info when customer plan changed
    if (!planName || planName.toLowerCase() === 'free') {
      MetricsRestrictions = DEFAULT_METRICS_RESTRICTIONS
      return
    }

    let race = false
    queryGetAccessRestrictions(Query)().then((data) => {
      if (race) return

      MetricsRestrictions = data
    })

    return () => (race = true)
  })

  return {
    MetricsRestrictions: {
      get $() {
        return MetricsRestrictions
      },
    },
  }
})
