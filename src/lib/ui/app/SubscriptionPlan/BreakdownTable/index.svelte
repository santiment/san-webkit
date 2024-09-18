<script lang="ts">
  import type { TSubscriptionPlan } from '../types.js'

  import { ssd } from 'svelte-runes'
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
    source = '',
    class: className,
    plans,
    isConsumerPlans = true,
  }: {
    source?: string
    class?: string
    plans: TSubscriptionPlan[]
    isConsumerPlans?: boolean
  } = $props()

  const { device } = useDeviceCtx()

  const activePlan = ssd(() => plans[0])
  const isPhone = $derived(device.$.isPhone)
  const plansFeatures = $derived(getPlanFeatures(plans, activePlan.$, isPhone))

  function getPlanFeatures(
    plans: TSubscriptionPlan[],
    activePlan: TSubscriptionPlan,
    isPhone: boolean,
  ) {
    if (!isPhone) {
      return plans
        .map(({ name }) => SubscriptionPlanBreakdown[name])
        .filter((f): f is Exclude<typeof f, undefined> => Boolean(f))
    }

    const activePlanBreakdown = SubscriptionPlanBreakdown[activePlan?.name]
    return activePlanBreakdown ? [activePlanBreakdown] : []
  }

  function onSlideChange(plan: TSubscriptionPlan) {
    activePlan.$ = plan
  }
</script>

<section id="comparison" class={className}>
  <h2 class="mb-16 text-center text-3xl font-medium sm:hidden">Detailed breakdown of plans</h2>

  <section
    class="flex overflow-clip rounded border sm:rounded-none sm:border-x-0"
    class:business={!isConsumerPlans}
  >
    <Table
      plans={plansFeatures}
      breakdown={isConsumerPlans ? CONSUMER_PLANS_BREAKDOWN : BUSINESS_PLANS_BREAKDOWN}
    >
      <div class="tr bg-white">
        {#if isPhone}
          <Slides items={plans} onChange={onSlideChange}>
            {#snippet item(plan)}
              <Plan {plan} class="px-4"></Plan>
            {/snippet}
          </Slides>
        {:else}
          <div class="td-h"></div>

          {#each plans as plan}
            <div class="td">
              <Plan {source} {plan}></Plan>
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
  }

  .business {
    --c-green: var(--c-blue);
    --orange: var(--blue);
    --accent: var(--blue);
  }
</style>
