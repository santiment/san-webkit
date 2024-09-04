<script lang="ts">import Table from "./Table.svelte";
import {
  BUSINESS_PLANS_BREAKDOWN,
  CONSUMER_PLANS_BREAKDOWN,
  SubscriptionPlanBreakdown
} from "./breakdown.js";
import { cn } from "../../../utils/index.js";
import Plan from "./Plan.svelte";
let {
  class: className,
  plans,
  isConsumerPlans = true
} = $props();
let activeSlide = 0;
let comparedPlans = $derived(getPlansLayout(plans, activeSlide));
let plansFeatures = $derived(
  comparedPlans.map(({ name }) => SubscriptionPlanBreakdown[name]).filter(Boolean)
);
function getPlansLayout(plans2, _slide) {
  return plans2;
}
</script>

<h2 class="mb-16 mt-[120px] text-center text-3xl font-medium">Detailed breakdown of plans</h2>

<section id="comparison" class={cn('rounded border', className)} class:business={!isConsumerPlans}>
  <Table
    plans={plansFeatures}
    breakdown={isConsumerPlans ? CONSUMER_PLANS_BREAKDOWN : BUSINESS_PLANS_BREAKDOWN}
  >
    <div class="tr sticky top-0 bg-white">
      {#if comparedPlans.length > 1}
        <div class="td-h"></div>

        {#each comparedPlans as plan}
          <div class="td">
            <Plan {plan}></Plan>
          </div>
        {/each}
      {:else}
        <!--
       <Slides amount={plans.length} bind:active={activeSlide} class="$style.slides fluid">
          {#each plans as plan (plan.id)}
             <Plan {plan} {plans} />
          {/each}
        </Slides>
         -->
      {/if}
    </div>
  </Table>
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

  .slides {
    --slides-v-padding: 22px 0 52px;
    --slides-h-padding: 16px;
    --indicators-bottom: 20px;
  }

  .business {
    --c-green: var(--c-blue);
    --orange: var(--blue);
  }
</style>
