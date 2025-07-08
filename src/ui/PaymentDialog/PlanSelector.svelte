<script lang="ts">
  import { trackPaymentFormPlanSelect } from '@/analytics/events/payment'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip'
  import {
    checkIsYearlyPlan,
    formatMonthlyPrice,
    Billing,
    getAlternativePlan,
    getSavedAmount,
    calculateYearDiscount,
    getPlanName,
  } from '@/utils/plans'

  export let plans: SAN.Plan[]
  export let plan: SAN.Plan
  export let price: string
  export let selectedNameBilling: string
  export let annualDiscount: any

  let isOpened = false

  $: altPlan = getAlternativePlan(plan, plans)
  $: annualPercentOff = annualDiscount.percent
  $: altPlans = altPlan ? getPlansByInterval(plan, altPlan) : [plan]
  $: yearDiscount = altPlan ? calculateYearDiscount(altPlans[0], altPlans[1]) : 0
  $: saveMsg = `Save ${yearDiscount}% 🎉`
  $: isSinglePlan = checkIsSinglePlan(plans)

  function checkIsSinglePlan(plans: SAN.Plan[]) {
    if (plans.length !== 2) return false
    const [first, second] = plans
    if (first.name !== second.name) return false

    return first.interval !== second.interval
  }

  const getPlansByInterval = (plan: SAN.Plan, altPlan: SAN.Plan) =>
    plan.interval === Billing.MONTH ? [plan, altPlan] : [altPlan, plan]

  function select(option) {
    plan = option
    isOpened = false

    trackPaymentFormPlanSelect({
      plan: plan.name,
      planId: +plan.id,
      billing: plan.interval,
      amount: plan.amount,
    })
  }
</script>

<div class="row justify mrg-l mrg--b">
  <div class="relative">
    <Tooltip
      bind:isOpened
      on="click"
      activeClass="$style.opened"
      position="bottom-start"
      clickaway
      margin={{ mainAxis: 2, crossAxis: -16 }}
      let:trigger
    >
      <button type="button" use:trigger class="selector btn body-1 txt-b" on:click>
        {selectedNameBilling}
        <Svg id="arrow" w="10" class="$style.arrow mrg-xs mrg--l" />
      </button>

      <div slot="tooltip" class="column">
        {#each plans as option}
          <button
            type="button"
            class="option btn"
            class:active={plan === option}
            on:click={() => select(option)}
          >
            {isSinglePlan ? 'Bill' : getPlanName(option.name)}
            {option.interval === Billing.YEAR ? 'annual' : 'montly'} -
            <span class="txt-b">{formatMonthlyPrice(option)}/mo</span>

            {#if checkIsYearlyPlan(option)}
              <span class="mrg-s mrg--l caption c-accent">{saveMsg}</span>
            {/if}
          </button>
        {/each}
      </div>
    </Tooltip>

    <div class="caption txt-m c-accent">
      {#if checkIsYearlyPlan(plan)}
        {altPlan ? `You save ${getSavedAmount(plan, altPlan)} a year 🎉` : saveMsg}
      {:else if annualPercentOff}
        Save {annualPercentOff}% with yearly billing
      {/if}
    </div>
  </div>

  <div class="h4">
    {price}
    <span class="body-1 c-casper">/ {plan.interval}</span>
  </div>
</div>

<style>
  .selector {
    --fill: var(--waterloo);
    --fill-hover: var(--waterloo);
  }

  .opened {
    --rotate: 0;
  }

  .arrow {
    transition: transform 0.2s;
    transform: rotate(var(--rotate, 180deg));
  }

  .option {
    position: relative;
    padding: 8px 16px;
    white-space: nowrap;
    border-radius: 0;
    --bg-hover: var(--athens);
  }

  .active::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 8px;
    width: 3px;
    height: 3px;
    background: var(--green);
    border-radius: 50%;
  }
</style>
