<script>import { Billing } from './../../utils/plans';
import { dataPreloader, showPaymentDialog } from './../../ui/PaymentDialog/index.svelte';
import { showPlanChangeDialog } from './PlanChangeDialog.svelte';
import { checkIsUpgrade, PLAN_BUTTON_CLICKED } from './utils';
let className = '';
export { className as class };
export let plan;
export let subscription;
export let isEligibleForTrial = false;
export let annualDiscount = {};
export let isLoggedIn = false;
export let isFreePlan = false;

$: ({
  id
} = plan);

$: isCurrentPlan = subscription ? subscription.plan.id === id : isFreePlan && isLoggedIn;

$: isUpgrade = checkIsUpgrade(plan, subscription);

$: isDowngrade = isUpgrade !== undefined && !isUpgrade;

$: label = (plan, subscription, getLabel());

function getLabel() {
  if (!isLoggedIn) return isFreePlan ? 'Create an account' : 'Get started';

  if (annualDiscount.isEligible) {
    if (plan.interval === Billing.YEAR) return `Pay now ${annualDiscount.discount == null ? void 0 : annualDiscount.discount.percentOff}% Off`;
    return 'Pay now';
  }

  if (isCurrentPlan) return 'Your current plan';
  if (isEligibleForTrial) return 'Start 14-day Free trial';
  if (isUpgrade) return 'Upgrade';
  if (isDowngrade) return 'Downgrade';
  return 'Buy now';
}

function onClick() {
  window.dispatchEvent(new CustomEvent(PLAN_BUTTON_CLICKED));

  if (!isLoggedIn) {
    return window.__onLinkClick('/login');
  }

  if (!annualDiscount.isEligible) {
    if (isUpgrade || isDowngrade) {
      return showPlanChangeDialog({
        isUpgrade,
        plan,
        subscription
      });
    }
  }

  showPaymentDialog({
    plan: plan.name,
    interval: plan.interval,
    isEligibleForTrial,
    annualDiscount
  });
}</script>

<button
  class="btn-1 fluid body-2 {className}"
  class:disabled={isCurrentPlan && !annualDiscount.isEligible}
  class:downgrade={label === 'Downgrade'}
  class:btn--green={isFreePlan && !isLoggedIn}
  on:click={onClick}
  use:dataPreloader>{label}</button
>

<style >.btn-1 {
  --v-padding: 8px;
}

.disabled {
  color: var(--fiord);
}

.downgrade {
  background: var(--white);
  border: 1px solid var(--porcelain);
  --color: var(--black);
  --v-padding: 7px;
  --color-hover: var(--accent);
}</style>
