<script lang="ts">
  import type { TProductPlans } from '$ui/app/SubscriptionPlan/api.js'

  import EnterpriseCard from './EnterpriseCard.svelte'
  import PlanCard from './PlanCard.svelte'

  let { source = '', productPlans }: { source?: string; productPlans: TProductPlans } = $props()
</script>

<div class="gap-6 column">
  <section class="flex divide-x rounded-lg border sm:flex-col sm:divide-x-0 sm:divide-y">
    {#if productPlans}
      {#each productPlans.billingGroupPlans as billingGroup (billingGroup)}
        <PlanCard {source} {billingGroup}></PlanCard>
      {/each}
    {/if}
  </section>

  {#if productPlans?.customPlan}
    <EnterpriseCard {source} billingGroup={productPlans.customPlan}></EnterpriseCard>
  {/if}
</div>
