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

  let {
    productFilter = getSanbaseConsumerPlans,
  }: { productFilter?: typeof getSanbaseConsumerPlans | typeof getApiBusinessPlans } = $props()

  let productsWithPlans = $state.frozen<TProductsWithPlans>([])
  let consumerPlans = $derived(productFilter(productsWithPlans))

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans = data))))
</script>

<section class="flex min-h-[680px] divide-x rounded-lg border">
  {#if consumerPlans}
    {#each consumerPlans.billingGroupPlans as billingGroup}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>
