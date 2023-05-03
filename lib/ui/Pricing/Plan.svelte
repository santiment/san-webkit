<script>var _a;

import Svg from './../../ui/Svg/svelte';
import { Billing, formatMonthlyPrice, getAlternativePlan, getSavedAmount, Plan, PlanName } from './../../utils/plans';
import { checkIsTrialSubscription } from './../../utils/subscription';
import PlanButton from './PlanButton.svelte';
import { PlanDescription } from './description';
let className = '';
export { className as class };
export let plan;
export let plans;
export let subscription;
export let annualDiscount = {};
export let isEligibleForTrial;
export let isLoggedIn = false;

$: ({
  id,
  name,
  interval
} = plan);

$: isOnTrial = subscription && checkIsTrialSubscription(subscription);

$: isTrialPlan = isOnTrial && (subscription === null || subscription === void 0 ? void 0 : subscription.plan.id) === id;

$: isAnnualPlan = interval === Billing.YEAR;

$: isFreePlan = name.includes(Plan.FREE);

$: altPlan = getAlternativePlan(plan, plans);

$: ({
  description,
  features
} = PlanDescription[name]);

$: percentOff = isAnnualPlan && ((_a = annualDiscount.discount) === null || _a === void 0 ? void 0 : _a.percentOff) || 0;

$: monthlyPrice = formatMonthlyPrice(plan, percentOff);

function getBillingDescription(currentPlan, fallbackPlan, discount) {
  if (isFreePlan) {
    return 'Free forever';
  }

  if (isAnnualPlan) {
    return `You save ${getSavedAmount(currentPlan, fallbackPlan, discount)} a year`;
  }

  return `${formatMonthlyPrice(fallbackPlan, discount)} if billed yearly`;
}</script>

<div class="plan txt-center relative {className}" class:free={isFreePlan}>
  <div class="name h4 txt-m c-accent">{PlanName[name]}</div>

  {#if isTrialPlan}<div class="trial label">Your trial plan</div>{/if}

  {#if isAnnualPlan && percentOff}<div class="discount label">{percentOff}% Off</div>{/if}

  <div class="description c-waterloo">{description}</div>

  <div class="price row h-center h2 txt-m mrg-xs mrg--b">
    {monthlyPrice}
    {#if !isFreePlan}<span class="h4 txt-r c-waterloo mrg-xs mrg--l mrg--b">/ mo</span>{/if}
  </div>

  <div class="body-2 c-waterloo">
    {getBillingDescription(plan, altPlan, percentOff)}
  </div>

  <PlanButton
    {plan}
    {plans}
    {subscription}
    {annualDiscount}
    {isEligibleForTrial}
    {isLoggedIn}
    {isFreePlan}
    class="mrg-l mrg--t mrg--b"
    source="pricing-card"
  />

  {#each features as feature}
    <div class="row txt-left mrg-l mrg--t">
      <Svg id="checkmark-circle" w="16" class="checkmark-LQ6NL4" />
      {feature}
    </div>
  {/each}
</div>

<style>
  .plan {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);
    padding: 32px var(--h-padding, 24px);
  }

  .name {
    padding: 4px 12px;
    background: var(--name-bg, var(--accent-light-1));
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
    color: var(--name-color, var(--accent));
  }

  .price {
    align-items: flex-end;
  }

  .free {
    --name-bg: var(--athens);
    --name-color: var(--fiord);
    --fill-checkmark: var(--waterloo);
  }

  .label {
    position: absolute;
    padding: 4px 8px;
    top: 9px;
    border-radius: 4px;
  }

  .trial {
    left: 9px;
    color: var(--fiord);
    background: var(--athens);
  }

  .discount {
    right: 9px;
    color: var(--green);
    background: var(--green-light-1);
  }

  .description {
    margin: 16px auto;
    max-width: 160px;
  }

  :global(.checkmark-LQ6NL4) {
    margin: 2px 10px 0 0;
    fill: var(--fill-checkmark, var(--accent));
  }
</style>
