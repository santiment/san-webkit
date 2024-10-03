<script lang="ts">import { ssd } from "svelte-runes";
import {
  getApiBusinessPlans,
  getSanbaseConsumerPlans
} from "./api.js";
import Button from "../../core/Button/index.js";
import { cn } from "../../utils/index.js";
import BreakdownTable from "./BreakdownTable/index.js";
import ProductPlans from "./ProductPlans.svelte";
import { PlanTypeDisplayNames, planTypes } from "./plans.js";
import { useProductPlansFlow } from "./flow.svelte.js";
import { trackEvent } from "../../../analytics/index.js";
let {
  source = "",
  class: className = "",
  productsWithPlans,
  planType: initialPlanType = "consumer",
  onPlanTypeChange,
  children
} = $props();
let planType = $state(initialPlanType);
const isConsumerPlans = $derived(planType === "consumer");
const productFilter = ssd(() => isConsumerPlans ? getSanbaseConsumerPlans : getApiBusinessPlans);
const { productPlans } = useProductPlansFlow(productsWithPlans, productFilter);
function handlePlanClick(type) {
  planType = type;
  onPlanTypeChange?.(type);
  trackEvent("select", {
    value: type,
    type: "list_plans_for",
    source
  });
}
</script>

<section class={cn('sm:px-5', className)}>
  <h1 class="mb-16 max-w-4xl text-start text-3xl font-medium sm:text-center">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div
    class="mb-12 inline-flex divide-x rounded-lg border text-base font-medium text-waterloo sm:mb-10 sm:text-lg"
  >
    {#each planTypes as item (item)}
      <Button
        class={cn('px-4 py-[7px] sm:py-3.5', planType === item && 'bg-athens text-black')}
        onclick={() => handlePlanClick(item)}
      >
        {PlanTypeDisplayNames[item] ?? item}
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
