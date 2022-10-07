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
    max-width: var(--page-width, 1140px);
    margin: 0 auto var(--plans-margin-bottom, 80px);
    overflow: auto;
  }

  .scroll {
    margin: 0 auto;
  }

  .plan {
    --h-padding: 40px;
    flex: 1;
    width: 100%;
    min-width: 256px;
    max-width: 386px;
    border-right: 1px solid var(--porcelain);

    &:last-child {
      border: 0;
    }
  }
</style>
