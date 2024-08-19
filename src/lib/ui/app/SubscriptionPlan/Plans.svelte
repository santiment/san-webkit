<script lang="ts">
  import { getApiBusinessPlans } from '$ui/app/SubscriptionPlan/api.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import BreakdownTable from './BreakdownTable/index.js'
  import ProductPlans from './ProductPlans.svelte'

  const PLAN_TYPES = ['👨‍🦱 For Individuals', '💼 For Business']
  let planType = $state(PLAN_TYPES[0])
</script>

<div class="self-start">
  <h1 class="mb-16 text-3xl font-medium">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div class="mb-12 inline-flex divide-x rounded-lg border text-base font-medium text-waterloo">
    {#each PLAN_TYPES as item (item)}
      <Button
        class={cn('px-4 py-1.5', planType === item && 'bg-athens text-fiord')}
        onclick={() => (planType = item)}>{item}</Button
      >
    {/each}
  </div>

  {#if planType === PLAN_TYPES[0]}
    <ProductPlans>
      {#snippet children(plans)}
        <BreakdownTable plans={plans?.billingGroupPlans?.map((v) => v.month) || []}
        ></BreakdownTable>
      {/snippet}
    </ProductPlans>
  {:else}
    <ProductPlans productFilter={getApiBusinessPlans}>
      {#snippet children(plans)}
        <BreakdownTable plans={plans?.billingGroupPlans || []}></BreakdownTable>
      {/snippet}
    </ProductPlans>
  {/if}
</div>
