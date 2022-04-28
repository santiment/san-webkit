<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import {
    PlanName,
    checkIsYearlyPlan,
    formatMonthlyPrice,
    Billing,
    getAlternativePlan,
    getSavedAmount,
  } from '@/utils/plans'

  export let plans: SAN.Plan[]
  export let plan: SAN.Plan
  export let price: string
  export let selectedNameBilling: string
  export let isSinglePlan: boolean
  export let annualDiscount: SAN.AnnualDiscount

  let isOpened = false

  $: annualPercentOff = annualDiscount.discount?.percentOff || 10
  $: altPlan = getAlternativePlan(plan, plans)

  function select(option) {
    plan = option
    isOpened = false
  }

  const SAVED_MSG = 'Save 10% 🎉'
</script>

<div class="row justify mrg-l mrg--b">
  <div class="relative">
    <Tooltip bind:isOpened on="click" offsetY={0} activeClass="$style.opened">
      <div slot="trigger" class="selector btn body-1 txt-b" on:click>
        {selectedNameBilling}
        <Svg id="arrow" w="8" h="4.5" class="$style.arrow mrg-xs mrg--l" />
      </div>

      <div slot="tooltip" class="column">
        {#each plans as option}
          <div class="option btn" class:active={plan === option} on:click={() => select(option)}>
            {isSinglePlan ? 'Bill' : PlanName[option.name]}
            {option.interval === Billing.YEAR ? 'annual' : 'montly'} -
            <span class="txt-b">{formatMonthlyPrice(option)}/mo</span>

            {#if checkIsYearlyPlan(option)}
              <span class="mrg-s mrg--l caption c-accent">{SAVED_MSG}</span>
            {/if}
          </div>
        {/each}
      </div>
    </Tooltip>

    <div class="caption txt-m c-accent">
      {#if checkIsYearlyPlan(plan)}
        {altPlan ? `You save ${getSavedAmount(plan, altPlan)} a year 🎉` : SAVED_MSG}
      {:else}
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
    --fill: var(--casper);
    --fill-hover: var(--accent);
  }
  .opened {
    --rotate: 0;
  }

  .arrow {
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
