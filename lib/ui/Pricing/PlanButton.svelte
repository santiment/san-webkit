<script>import { getCustomer$Ctx } from './../../stores/customer';
import { Billing, Plan, checkIsBusinessPlan } from './../../utils/plans';
import { dataPreloader, showPaymentDialog } from './../../ui/PaymentDialog/index.svelte';
import { showPlanChangeDialog } from './PlanChangeDialog.svelte';
import { checkIsUpgrade, PLAN_BUTTON_CLICKED } from './utils';
let className = '';
export { className as class };
export let plan;
export let source;
export let plans = [];
const { customer$ } = getCustomer$Ctx();
$: customer = $customer$;
$: ({ isLoggedIn, isEligibleForTrial, annualDiscount, subscription } = customer);
$: ({ id, name } = plan);
$: isBusinessPlan = checkIsBusinessPlan(plan);
$: isCustomPlan = name === Plan.CUSTOM;
$: isFreePlan = name === Plan.FREE;
$: isCurrentPlan = subscription ? subscription.plan.id === id : isFreePlan && isLoggedIn;
$: isUpgrade = checkIsUpgrade(plan, subscription);
$: isDowngrade = isUpgrade !== undefined && !isUpgrade;
$: label = (() => {
    if (isCustomPlan)
        return 'Let’s talk!';
    if (!isLoggedIn)
        return isFreePlan ? 'Create an account' : 'Get started';
    if (subscription && isFreePlan) {
        return 'Default plan';
    }
    if (!isBusinessPlan && annualDiscount.isEligible) {
        if (plan.interval === Billing.YEAR)
            return `Pay now ${annualDiscount.percent}% Off`;
        return 'Pay now';
    }
    if (isCurrentPlan)
        return 'Your current plan';
    if (!isBusinessPlan) {
        if (isEligibleForTrial)
            return 'Start 14-day Free trial';
        if (isUpgrade)
            return 'Upgrade';
        if (isDowngrade)
            return 'Downgrade';
    }
    return 'Buy now';
})();
function onClick() {
    var _a;
    window.dispatchEvent(new CustomEvent(PLAN_BUTTON_CLICKED));
    if (isCustomPlan) {
        window.open('https://calendly.com/santiment-team/santiment-enterprise-plan-enquiry', '_blank');
        return;
    }
    if (!isLoggedIn) {
        return (_a = window.__onLinkClick) === null || _a === void 0 ? void 0 : _a.call(window, '/login');
    }
    if (!isBusinessPlan) {
        if (!annualDiscount.isEligible) {
            if (isUpgrade || isDowngrade) {
                return showPlanChangeDialog({ isUpgrade, plan, subscription });
            }
        }
    }
    showPaymentDialog({
        plans,
        plan: plan.name,
        interval: plan.interval,
        planData: plan,
        isEligibleForTrial,
        annualDiscount,
        source,
    });
}
</script>

<button
  type="button"
  class="btn-1 fluid body-2 {className}"
  class:disabled={(isCurrentPlan && !annualDiscount.isEligible) || (subscription && isFreePlan)}
  class:downgrade={label === 'Downgrade'}
  class:btn--green={isFreePlan && !isLoggedIn}
  on:click={onClick}
  use:dataPreloader
>
  {label}
</button>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.btn-1 {
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
