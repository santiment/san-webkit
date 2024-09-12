<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { TProductsWithPlans } from '$ui/app/SubscriptionPlan/api.js'

  import {
    getApiBusinessPlans,
    getSanbaseConsumerPlans,
    queryProductsWithPlans,
  } from '$ui/app/SubscriptionPlan/api.js'
  import { tap } from 'rxjs'
  import { useObserve } from 'svelte-runes'
  import PlanCard from './PlanCard.svelte'
  import { useStripeCtx } from '$lib/ctx/stripe/index.js'

  let {
    productsWithPlans = [],
    productFilter = getSanbaseConsumerPlans,
    children,
  }: {
    productsWithPlans?: TProductsWithPlans
    productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans
    children?: Snippet<[typeof plans]>
  } = $props()

  const { stripe } = useStripeCtx()

  let plans = $derived(productFilter(productsWithPlans))

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans = data))))

  $effect(() => {
    stripe.load()
  })
</script>

<section class="flex divide-x rounded-lg border sm:flex-col sm:divide-y">
  {#if plans}
    {#each plans.billingGroupPlans as billingGroup}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>

{@render children?.(plans)}
