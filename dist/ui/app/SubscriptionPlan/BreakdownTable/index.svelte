<script lang="ts">import { ssd } from "svelte-runes";
import Slides from "../../../core/Slides/index.js";
import { useDeviceCtx } from "../../../../ctx/device/index.svelte.js";
import {
  BUSINESS_PLANS_BREAKDOWN,
  CONSUMER_PLANS_BREAKDOWN,
  SubscriptionPlanBreakdown
} from "./breakdown.js";
import Table from "./Table.svelte";
import Plan from "./Plan.svelte";
const {
  class: className,
  plans,
  isConsumerPlans = true
} = $props();
const { device } = useDeviceCtx();
const activePlan = ssd(() => plans[0]);
const isPhone = $derived(device.$.isPhone);
const plansFeatures = $derived(getPlanFeatures(plans, activePlan.$, isPhone));
function getPlanFeatures(plans2, activePlan2, isPhone2) {
  if (!isPhone2) {
    return plans2.map(({ name }) => SubscriptionPlanBreakdown[name]).filter((f) => Boolean(f));
  }
  const activePlanBreakdown = SubscriptionPlanBreakdown[activePlan2?.name];
  return activePlanBreakdown ? [activePlanBreakdown] : [];
}
function onSlideChange(plan) {
  activePlan.$ = plan;
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
  }

  .business {
    --c-green: var(--c-blue);
    --orange: var(--blue);
    --accent: var(--blue);
  }
</style>
