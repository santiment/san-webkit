<script lang="ts">import PlanCard from "./PlanCard.svelte";
let { productPlans } = $props();
</script>

<section class="flex divide-x rounded-lg border sm:flex-col sm:divide-x-0 sm:divide-y">
  {#if productPlans}
    {#each productPlans.billingGroupPlans as billingGroup (billingGroup)}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>
