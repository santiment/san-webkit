<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'
  import type { PlanType } from './plans.js'

  import { getApiBusinessPlans } from '$ui/app/SubscriptionPlan/api.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import BreakdownTable from './BreakdownTable/index.js'
  import ProductPlans from './ProductPlans.svelte'
  import { PlanTypeDisplayNames, planTypes } from './plans.js'

  type Props = Pick<ComponentProps<ProductPlans>, 'productsWithPlans'> & {
    children?: Snippet
    planType?: PlanType
    onPlanTypeChange?: (type: PlanType) => void
  }

  let {
    productsWithPlans,
    planType: initialPlanType = 'consumer',
    onPlanTypeChange,
    children: _children,
  }: Props = $props()

  let planType = $state(initialPlanType)
  let isConsumerPlans = $derived(planType === 'consumer')

  function handlePlanClick(type: PlanType) {
    planType = type
    onPlanTypeChange?.(type)
  }
</script>

<div class="self-start">
  <h1 class="mb-16 max-w-4xl text-3xl font-medium">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div class="mb-12 inline-flex divide-x rounded-lg border text-base font-medium text-waterloo">
    {#each planTypes as item (item)}
      <Button
        class={cn('px-4 py-1.5', planType === item && 'bg-athens text-fiord')}
        onclick={() => handlePlanClick(item)}
      >
        {PlanTypeDisplayNames[item] ?? item}
      </Button>
    {/each}
  </div>

  {#key isConsumerPlans}
    <ProductPlans
      {productsWithPlans}
      productFilter={isConsumerPlans ? undefined : getApiBusinessPlans}
    >
      {#snippet children(plans)}
        {@render _children?.()}

        <BreakdownTable
          plans={plans?.billingGroupPlans?.map((v) => v.month) || []}
          {isConsumerPlans}
        />
      {/snippet}
    </ProductPlans>
  {/key}
</div>
