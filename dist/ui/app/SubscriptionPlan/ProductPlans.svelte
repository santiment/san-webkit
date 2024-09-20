<script lang="ts">import PlanCard from "./PlanCard.svelte";
let { source = "", productPlans } = $props();
</script>

<section class="flex divide-x rounded-lg border sm:flex-col sm:divide-x-0 sm:divide-y">
  {#if productPlans}
    {#each productPlans.billingGroupPlans as billingGroup (billingGroup)}
      <PlanCard {source} {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>
