<script lang="ts">
  import type { Snippet } from 'svelte'
  import {
    getApiBusinessPlans,
    getSanbaseConsumerPlans,
    queryProductsWithPlans,
    type TProductsWithPlans,
  } from '$ui/app/SubscriptionPlan/api.js'
  import { tap } from 'rxjs'
  import { useObserve } from 'svelte-runes'
  import PlanCard from './PlanCard.svelte'
  import { useStripeCtx } from '$lib/ctx/stripe/index.js'

  let {
    productFilter = getSanbaseConsumerPlans,
    children,
  }: {
    productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans
    children?: Snippet<[typeof plans]>
  } = $props()

  const { stripe } = useStripeCtx()

  let productsWithPlans = $state.raw<TProductsWithPlans>([])
  let plans = $derived(productFilter(productsWithPlans))

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans = data))))

  $effect(() => {
    stripe.load()
  })
</script>

<section class="flex min-h-[680px] divide-x rounded-lg border">
  {#if plans}
    {#each plans.billingGroupPlans as billingGroup}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>

{@render children?.(plans)}
