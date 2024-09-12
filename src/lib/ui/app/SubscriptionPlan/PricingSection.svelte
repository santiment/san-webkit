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
    class?: string
    children?: Snippet
    planType?: PlanType
    onPlanTypeChange?: (type: PlanType) => void
  }

  let {
    class: className = '',
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

<section
  style:--phone-px="var(--phone-section-px, 1.25rem)"
  class={cn('sm:px-[var(--phone-px)]', className)}
>
  <h1 class="mb-16 max-w-4xl text-start text-3xl font-medium sm:text-center">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div
    class="mb-12 inline-flex divide-x rounded-lg border text-base font-medium text-waterloo sm:mb-10"
  >
    {#each planTypes as item (item)}
      <Button
        class={cn(
          'px-4 py-1.5 text-base font-medium sm:py-3 sm:text-lg',
          planType === item && 'bg-athens text-black',
        )}
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
          class="mt-[120px] sm:mt-[104px]"
          plans={plans?.billingGroupPlans?.map((v) => v.month) || []}
          {isConsumerPlans}
        />
      {/snippet}
    </ProductPlans>
  {/key}
</section>
