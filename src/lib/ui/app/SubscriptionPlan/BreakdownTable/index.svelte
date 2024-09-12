<script lang="ts">
  import type { TSubscriptionPlan } from '../types.js'

  import { ssd } from 'svelte-runes'
  import { cn } from '$ui/utils/index.js'
  import Slides from '$ui/core/Slides/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import {
    BUSINESS_PLANS_BREAKDOWN,
    CONSUMER_PLANS_BREAKDOWN,
    SubscriptionPlanBreakdown,
  } from './breakdown.js'
  import Table from './Table.svelte'
  import Plan from './Plan.svelte'

  const {
    class: className,
    plans,
    isConsumerPlans = true,
  }: { class?: string; plans: TSubscriptionPlan[]; isConsumerPlans?: boolean } = $props()

  const { device } = useDeviceCtx()

  const activePlan = ssd(() => plans[0])

  const isPhone = $derived(device.$.isPhone)

  const plansFeatures = $derived(
    isPhone
      ? activePlan.$
        ? [SubscriptionPlanBreakdown[activePlan.$.name]]
        : []
      : plans.map(({ name }) => SubscriptionPlanBreakdown[name]).filter(Boolean),
  ) as Record<string, any>[]

  function onSlideChange(plan: TSubscriptionPlan) {
    activePlan.$ = plan
  }
</script>

<!-- TODO: Make a note about margin here -->
<section id="comparison" class={cn('sm:-mx-5', className)}>
  <h2 class="mb-16 text-center text-3xl font-medium sm:hidden">Detailed breakdown of plans</h2>

  <section class="flex overflow-clip rounded border" class:business={!isConsumerPlans}>
    <Table
      plans={plansFeatures}
      breakdown={isConsumerPlans ? CONSUMER_PLANS_BREAKDOWN : BUSINESS_PLANS_BREAKDOWN}
    >
      <div class="tr sticky top-[var(--plans-sticky-top,0)] bg-white">
        <div class="td-h sm:!hidden"></div>

        {#if isPhone}
          <Slides items={plans} onChange={onSlideChange}>
            {#snippet item(plan)}
              <Plan {plan} class="px-4"></Plan>
            {/snippet}
          </Slides>
        {:else}
          {#each plans as plan}
            <div class="td">
              <Plan {plan}></Plan>
            </div>
          {/each}
        {/if}
      </div>
    </Table>
  </section>
</section>

<style>
  #comparison {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);

    :global(.desktop) & {
      border-radius: 4px;
    }
  }

  .business {
    --c-green: var(--c-blue);
    --orange: var(--blue);
  }
</style>
