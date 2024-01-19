<script>var _a;
import Svg from './../../../ui/Svg/svelte';
import { queryBillingHistory } from './../../../api/subscription';
import { CardBrandIllustration } from './../../../ui/PaymentDialog/utils';
import { showUpdatePaymentCardDialog } from './../../../ui/UpdatePaymentCardDialog.svelte';
import { showRemovePaymentCardDialog } from './../../../ui/RemovePaymentCardDialog.svelte';
import { queryPppSettings, querySanbasePlans } from './../../../api/plans';
import { getCustomer$Ctx } from './../../../stores/customer';
import { paymentCard$ } from './../../../stores/paymentCard';
import { Billing, onlyProLikePlans, Plan, getAlternativePlan } from './../../../utils/plans';
import Setting from './Setting.svelte';
import PlanCard from './SubscriptionCard/PlanCard.svelte';
import UserPlanCard from './SubscriptionCard/UserPlanCard.svelte';
import FullAccessCard from './SubscriptionCard/FullAccessCard.svelte';
import { getSuggestions } from './SubscriptionCard/suggestions';
import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte';
import { showCancelSubscriptionDialog } from '../CancelSubscriptionDialog';
let className = '';
export { className as class };
const { customer$ } = getCustomer$Ctx();
let isBillingLoading = true;
let billingHistory = [];
let plans = [];
$: ({ subscription, isEligibleForTrial, annualDiscount, isCanceled } = $customer$);
$: paymentCard = $paymentCard$;
$: plan = (subscription === null || subscription === void 0 ? void 0 : subscription.plan) || { name: Plan.FREE, amount: 0, interval: Billing.MONTH };
$: isFree = ((_a = plan === null || plan === void 0 ? void 0 : plan.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === Plan.FREE;
$: suggestions = getSuggestions(plan, annualDiscount);
$: suggestedPlans = (suggestions, plans, annualDiscount, getPlanSuggestions());
queryPlans();
queryBillingHistory().then((data) => {
    isBillingLoading = false;
    billingHistory = data;
});
async function queryPlans() {
    if (!process.browser)
        return;
    let [pppSettings, sanbasePlans] = await Promise.all([queryPppSettings(), querySanbasePlans()]);
    if (pppSettings === null || pppSettings === void 0 ? void 0 : pppSettings.isEligibleForPpp) {
        sanbasePlans = pppSettings.plans;
    }
    plans = sanbasePlans.filter(onlyProLikePlans);
}
function getPlanSuggestions() {
    return plans.filter((plan) => {
        const isSameBilling = plan.interval === suggestions[0].billing;
        if (suggestions[0].discount) {
            return isSameBilling;
        }
        return ((suggestions[0][plan.name] || (suggestions[1] && suggestions[1][plan.name])) &&
            isSameBilling);
    });
}
</script>

<section id="subscription" class="border {className}">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting class="subscriptions-rngeTM">
    <UserPlanCard
      {plan}
      {subscription}
      {isEligibleForTrial}
      discount={suggestions[0].discount}
      suggestionsCount={suggestedPlans.length}
    />

    {#each suggestedPlans as suggestion, index}
      {@const altPlan = getAlternativePlan(suggestion, plans)}
      {@const currentSuggestion = suggestions[index] || {}}
      {@const planInfo = currentSuggestion[suggestion.name] || {}}
      <PlanCard
        {...planInfo}
        {isEligibleForTrial}
        {altPlan}
        {plans}
        discount={currentSuggestion.discount}
        isUpgrade={currentSuggestion.isUpgrade}
        suggestionsCount={suggestedPlans.length}
        plan={suggestion}
      />
    {:else}
      <FullAccessCard />
    {/each}
  </Setting>

  {#if subscription && !isCanceled && !isFree}
    <Setting class="setting-HUtdzp justify">
      <div>
        Cancel subscription
        <div class="description c-waterloo">
          If you cancel your subscription, you will not be able to see the most recent data
        </div>
      </div>
      <button class="cancel-btn btn c-accent" on:click={() => showCancelSubscriptionDialog()}>
        Cancel subscription
      </button>
    </Setting>
  {/if}

  <Setting class="setting-HUtdzp justify">
    <div>
      Payment method

      {#if paymentCard}
        <div class="card row v-center mrg-s mrg--t">
          <Svg illus {...CardBrandIllustration[paymentCard.brand]} class="mrg-m mrg--r" />

          <div class="dots c-waterloo mrg-s mrg--r">····</div>
          {paymentCard.last4}

          <Svg id="locked" w="14" h="15" class="mrg-m mrg--l" />
        </div>
      {/if}
    </div>

    <div class="payment-actions txt-right">
      {#if paymentCard}
        <button class="btn btn--red mrg-l mrg--r" on:click={showRemovePaymentCardDialog}
          >Remove</button
        >
      {/if}

      <button class="btn-2" on:click={() => showUpdatePaymentCardDialog()}>
        {paymentCard ? 'Update' : 'Add'} card
      </button>
    </div>
  </Setting>

  <Setting class="setting-HUtdzp justify">
    <div>
      Billing history

      <p class="description c-waterloo">Shows an overview of all charges issued for your account</p>
    </div>

    {#if isBillingLoading}
      <div class="loading-spin" />
    {:else if billingHistory.length}
      <button
        class="history-btn btn-0 nowrap"
        on:click={() => showBillingHistoryDialog({ history: billingHistory })}
      >
        Show history
      </button>
    {:else}
      <div class="history nowrap c-waterloo">No history yet</div>
    {/if}
  </Setting>
</section>

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
h4 {
  background: var(--athens);
  padding: 12px 24px;
}

.btn--red {
  --color: var(--red);
  --color-hover: var(--red-hover);
}

.plan {
  padding: 24px;
  background: var(--athens);
  flex-wrap: wrap;
}

.dots {
  font-size: 30px;
  line-height: 4px;
  letter-spacing: 2px;
  margin-top: -4px;
}

.card {
  fill: var(--waterloo);
}

:global(.subscriptions-rngeTM) {
  gap: 16px;
}

.description {
  margin-top: 6px;
}

:global(.phone) section,
:global(.phone-xs) section {
  font: var(--body-2);
}
:global(.phone) h4,
:global(.phone-xs) h4 {
  font: var(--body-3);
}
:global(.phone) .btn-2,
:global(.phone-xs) .btn-2 {
  --v-padding: 7px;
}
:global(.phone) :global(.setting-HUtdzp),
:global(.phone-xs) :global(.setting-HUtdzp) {
  flex-direction: column;
  align-items: flex-start;
}
:global(.phone) .cancel-btn,
:global(.phone) .history,
:global(.phone) .history-btn,
:global(.phone-xs) .cancel-btn,
:global(.phone-xs) .history,
:global(.phone-xs) .history-btn {
  margin-top: 12px;
}
:global(.phone) .payment-actions,
:global(.phone-xs) .payment-actions {
  margin-top: 16px;
}
:global(.phone) .history,
:global(.phone-xs) .history {
  color: var(--fiord);
}

:global(.phone) :global(.subscriptions-rngeTM),
:global(.tablet) :global(.subscriptions-rngeTM),
:global(.phone-xs) :global(.subscriptions-rngeTM) {
  flex-direction: column;
}</style>
