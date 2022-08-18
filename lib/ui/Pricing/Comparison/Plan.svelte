<script>
  import { subscription$ } from './../../../stores/subscription'
  import { formatMonthlyPrice, Plan, PlanName } from './../../../utils/plans'
  import PlanButton from '../PlanButton.svelte'
  export let plan
  export let plans
  export let discount = 0
  export let isEligibleForTrial
  export let isLoggedIn = false

  $: ({ name } = plan)

  $: isFreePlan = name.includes(Plan.FREE)
</script>

<div class="fluid">
  <h3 class="row v-center">
    <span class="h4 txt-m">{PlanName[name]}</span>

    {#if discount && !isFreePlan}<span class="discount mrg-m mrg--l">50% Off</span>{/if}

    <span class="c-waterloo mrg-a mrg--l">
      {formatMonthlyPrice(plan)}
      {#if !isFreePlan}/ mo{/if}
    </span>
  </h3>

  <PlanButton
    {plan}
    {plans}
    {isEligibleForTrial}
    {isLoggedIn}
    {isFreePlan}
    subscription={$subscription$}
    class="mrg-m mrg--t"
  />
</div>

<style>
  .discount {
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--green-light-1);
    color: var(--green);
  }
</style>
