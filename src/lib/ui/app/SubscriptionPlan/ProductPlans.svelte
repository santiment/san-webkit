<script lang="ts">
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
  }: { productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans } = $props()

  const { stripe } = useStripeCtx()

  let productsWithPlans = $state.frozen<TProductsWithPlans>([])
  let consumerPlans = $derived(productFilter(productsWithPlans))

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans = data))))

  $effect(() => {
    stripe.load()
  })
</script>

<section class="flex min-h-[680px] divide-x rounded-lg border">
  {#if consumerPlans}
    {#each consumerPlans.billingGroupPlans as billingGroup}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>
