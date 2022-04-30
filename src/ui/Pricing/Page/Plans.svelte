<script>
  import Plan from '../Plan.svelte'

  export let billingPlans
  export let plans
  export let subscription
  export let annualDiscount
  export let isLoggedIn
  export let isEligibleForTrial
</script>

<section id="plans" class="row no-scrollbar">
  <div class="scroll row border">
    {#each billingPlans as plan (plan.id)}
      <Plan
        {plan}
        {plans}
        {subscription}
        {annualDiscount}
        {isLoggedIn}
        {isEligibleForTrial}
        class="$style.plan"
      />
    {/each}
  </div>
</section>

<style lang="scss">
  #plans {
    padding: 0 16px;
    margin: 0 0 80px;
    overflow: auto;
  }

  .scroll {
    margin: 0 auto;
  }

  .plan {
    flex: 1;
    min-width: 256px;
    max-width: 400px;
    border-right: 1px solid var(--porcelain);

    &:last-child {
      border: 0;
    }
  }
</style>
