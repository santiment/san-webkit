import { onMount } from 'svelte'
import { type SS } from 'svelte-runes'

import { useStripeCtx } from '$lib/ctx/stripe/index.js'
import { Query } from '$lib/api/executor.js'

import {
  getApiBusinessPlans,
  getSanbaseConsumerPlans,
  queryProductsWithPlans,
  type TProductsWithPlans,
} from './api.js'

export function useProductPlansFlow(
  defaultProductsWithPlans: TProductsWithPlans = [],
  productFilter: SS<typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans>,
) {
  const { stripe } = useStripeCtx()

  let productsWithPlans = $state.raw(defaultProductsWithPlans)
  const productPlans = $derived(productFilter.$(productsWithPlans))

  onMount(() => stripe.load())
  onMount(() => queryProductsWithPlans(Query)().then((data) => (productsWithPlans = data)))

  return {
    productPlans: {
      get $() {
        return productPlans
      },
    },
  }
}
