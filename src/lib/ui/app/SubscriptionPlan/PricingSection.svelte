<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { PlanType } from './plans.js'

  import { ssd } from 'svelte-runes'

  import {
    getApiBusinessPlans,
    getSanbaseConsumerPlans,
    type TProductsWithPlans,
  } from '$ui/app/SubscriptionPlan/api.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import BreakdownTable from './BreakdownTable/index.js'
  import ProductPlans from './ProductPlans.svelte'
  import { PlanTypeDisplayInfo, planTypes } from './plans.js'
  import { useProductPlansFlow } from './flow.svelte.js'

  type Props = {
    source?: string
    productsWithPlans?: TProductsWithPlans
    class?: string
    children?: Snippet<[{ isConsumerPlans: boolean }]>
    planType?: PlanType
    onPlanTypeChange?: (type: PlanType) => void
  }

  let {
    source = '',
    class: className = '',
    productsWithPlans,
    planType: initialPlanType = 'consumer',
    onPlanTypeChange,
    children,
  }: Props = $props()

  let planType = $state(initialPlanType)
  const isConsumerPlans = $derived(planType === 'consumer')
  const productFilter = ssd(() => (isConsumerPlans ? getSanbaseConsumerPlans : getApiBusinessPlans))

  const { productPlans } = useProductPlansFlow(productsWithPlans, productFilter)

  function handlePlanClick(type: PlanType) {
    planType = type
    onPlanTypeChange?.(type)
    trackEvent('select', {
      value: type,
      type: 'list_plans_for',
      source,
    })
  }
</script>

<section class={cn('sm:px-5', className)}>
  <h1 class="mb-14 max-w-4xl text-start text-3xl font-medium sm:text-center">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div
    class="mb-8 inline-flex rounded-md border text-base font-medium text-waterloo sm:mb-10 sm:text-lg"
  >
    {#each planTypes as item (item)}
      <Button
        class={cn(
          'h-[38px] px-4 py-[8px] sm:py-3.5',
          planType === item &&
            `z-10 rounded-md text-rhino outline outline-1 ${PlanTypeDisplayInfo[planType].className}`,
        )}
        onclick={() => handlePlanClick(item)}
      >
        {PlanTypeDisplayInfo[item].name ?? item}
      </Button>
    {/each}
  </div>

  <ProductPlans {source} productPlans={productPlans.$}></ProductPlans>

  {@render children?.({ isConsumerPlans })}
</section>

<BreakdownTable
  {source}
  plans={productPlans.$?.billingGroupPlans?.map((v) => v.month) || []}
  {isConsumerPlans}
/>
