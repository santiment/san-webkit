<script lang="ts">import { getApiBusinessPlans } from "../../SubscriptionPlan/api.js";
import Button from "../../../core/Button/index.js";
import { cn } from "../../../utils/index.js";
import Plans from "./Plans.svelte";
const PLAN_TYPES = ["\u{1F468}\u200D\u{1F9B1} For Individuals", "\u{1F4BC} For Business"];
let planType = $state(PLAN_TYPES[0]);
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
    <Plans></Plans>
  {:else}
    <Plans productFilter={getApiBusinessPlans}></Plans>
  {/if}
</div>
