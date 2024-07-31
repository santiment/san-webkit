<script lang="ts">
  import {
    getSanbaseConsumerPlans,
    queryProductsWithPlans,
    type TProductsWithPlans,
  } from '$ui/app/SubscriptionPlan/api.js'
  import { getFormattedPlan } from '$ui/app/SubscriptionPlan/index.js'
  import { cn } from '$ui/utils/index.js'
  import { tap } from 'rxjs'
  import { useObserve } from 'svelte-runes'
  import Svg from '$ui/core/Svg/index.js'
  import Plan from './Plan.svelte'

  let productsWithPlans = $state.frozen<TProductsWithPlans>([])
  let consumerPlans = $derived(getSanbaseConsumerPlans(productsWithPlans))

  useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans = data))))
</script>

<section class="flex divide-x rounded-lg border">
  {#if consumerPlans}
    {#each consumerPlans.billingGroupPlans as billingGroup}
      <Plan {billingGroup}></Plan>
    {/each}
  {/if}
</section>
