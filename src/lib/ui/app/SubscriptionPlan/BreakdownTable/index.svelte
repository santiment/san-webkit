<script lang="ts">
  import type { TPlanBillingGroup } from '../api.js'

  import { trackEvent } from '$lib/analytics/index.js'
  import Slides from '$ui/core/Slides/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  import {
    BUSINESS_PLANS_BREAKDOWN,
    CONSUMER_PLANS_BREAKDOWN,
    SubscriptionPlanBreakdown,
  } from './breakdown.js'
  import Table from './Table.svelte'
  import Plan from './Plan.svelte'
  import { getFormattedPlan } from '../utils.js'

  type TBillingGroup = TPlanBillingGroup[string]

  type TProps = {
    source?: string
    class?: string
    billingGroupPlans: TBillingGroup[]
    isConsumerPlans?: boolean
  }

  const {
    source = '',
    class: className,
    billingGroupPlans,
    isConsumerPlans = true,
  }: TProps = $props()

  let active = $derived(billingGroupPlans[0])

  const activeBillingGroup = {
    get $() {
      return active
    },

    set $(value: TBillingGroup) {
      active = value
    },
  }

  const { device } = useDeviceCtx()
  const isPhone = $derived(device.$.isPhone)
  const plansFeatures = $derived(
    getBillingGroupFeatures(billingGroupPlans, activeBillingGroup.$, isPhone),
  )

  function getBillingGroupFeatures(
    billingGroupPlans: TBillingGroup[],
    activeBillingGroup: TBillingGroup,
    isPhone: boolean,
  ) {
    if (!isPhone) {
      return billingGroupPlans
        .map((billingGroup) => SubscriptionPlanBreakdown[getFormattedPlan(billingGroup).key])
        .filter((f): f is Exclude<typeof f, undefined> => Boolean(f))
    }

    if (!activeBillingGroup) return []

    const activePlanBreakdown = SubscriptionPlanBreakdown[getFormattedPlan(activeBillingGroup).key]
    return activePlanBreakdown ? [activePlanBreakdown] : []
  }

  function onSlideChange(billingGroup: TBillingGroup, i: number) {
    activeBillingGroup.$ = billingGroup

    const plan = getFormattedPlan(billingGroup).intervals[0].plan

    trackEvent('slides', {
      slide: i,
      type: 'plans_slides',
      plan: plan.name,
      plan_id: plan.id,
      billing: plan.interval,
      source,
    })
  }
</script>

<section id="comparison" class={className}>
  <h2 class="mb-16 text-center text-3xl font-medium sm:hidden">Detailed breakdown of plans</h2>

  <section
    class="flex overflow-clip rounded border sm:rounded-none sm:border-x-0"
    class:business={!isConsumerPlans}
  >
    <Table
      {source}
      plans={plansFeatures}
      breakdown={isConsumerPlans ? CONSUMER_PLANS_BREAKDOWN : BUSINESS_PLANS_BREAKDOWN}
    >
      <div class="tr bg-white">
        {#if isPhone}
          <Slides items={billingGroupPlans} onChange={onSlideChange}>
            {#snippet item(billingGroup)}
              <Plan {billingGroup} class="px-4"></Plan>
            {/snippet}
          </Slides>
        {:else}
          <div class="td-h"></div>

          {#each billingGroupPlans as billingGroup}
            <div class="td">
              <Plan {source} {billingGroup}></Plan>
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
