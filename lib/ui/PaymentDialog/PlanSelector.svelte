<script>import { trackPaymentFormPlanSelect } from './../../analytics/events/payment';
import Svg from './../../ui/Svg/svelte';
import Tooltip from './../../ui/Tooltip/svelte';
import { PlanName, checkIsYearlyPlan, formatMonthlyPrice, Billing, getAlternativePlan, getSavedAmount, } from './../../utils/plans';
export let plans;
export let plan;
export let price;
export let selectedNameBilling;
export let isSinglePlan;
export let annualDiscount;
let isOpened = false;
$: annualPercentOff = annualDiscount.percent || 10;
$: altPlan = getAlternativePlan(plan, plans);
function select(option) {
    plan = option;
    isOpened = false;
    trackPaymentFormPlanSelect({
        plan: plan.name,
        planId: +plan.id,
        billing: plan.interval,
        amount: plan.amount,
    });
}
const SAVED_MSG = 'Save 10% 🎉';
</script>

<div class="row justify mrg-l mrg--b">
  <div class="relative">
    <Tooltip bind:isOpened on="click" offsetY={0} activeClass="opened-GG2orY">
      <button type="button" slot="trigger" class="selector btn body-1 txt-b" on:click>
        {selectedNameBilling}
        <Svg id="arrow" w="8" h="4.5" class="arrow-jQqfeN mrg-xs mrg--l" />
      </button>

      <div slot="tooltip" class="column">
        {#each plans as option}
          <button
            type="button"
            class="option btn"
            class:active={plan === option}
            on:click={() => select(option)}
          >
            {isSinglePlan ? 'Bill' : PlanName[option.name]}
            {option.interval === Billing.YEAR ? 'annual' : 'montly'} -
            <span class="txt-b">{formatMonthlyPrice(option)}/mo</span>

            {#if checkIsYearlyPlan(option)}
              <span class="mrg-s mrg--l caption c-accent">{SAVED_MSG}</span>
            {/if}
          </button>
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
  :global(.opened-GG2orY) {
    --rotate: 0;
  }

  :global(.arrow-jQqfeN) {
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
