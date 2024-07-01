<script>var _a, _b;
import Svg from './../../../ui/Svg/svelte';
import { queryBillingHistory } from './../../../api/subscription';
import { CardBrandIllustration } from './../../../ui/PaymentDialog/utils';
import { showUpdatePaymentCardDialog } from './../../../ui/UpdatePaymentCardDialog.svelte';
import { showRemovePaymentCardDialog } from './../../../ui/RemovePaymentCardDialog.svelte';
import { getBusinessPlans, getIndividualPlans, queryPlans, queryPppSettings } from './../../../api/plans';
import { getCustomer$Ctx } from './../../../stores/customer';
import { paymentCard$ } from './../../../stores/paymentCard';
import { Billing, Plan, PlanName, ProductId } from './../../../utils/plans';
import { checkIsActiveSubscription } from './../../../utils/subscription';
import Setting from './Setting.svelte';
import UserPlanCard from './SubscriptionCard/UserPlanCard.svelte';
import FullAccessCard from './SubscriptionCard/FullAccessCard.svelte';
import { getIndividualSuggestions, getBusinessSuggestions } from './SubscriptionCard/suggestions';
import { showBillingHistoryDialog } from './BillingHistoryDialog.svelte';
import { showCancelSubscriptionDialog } from '../CancelSubscriptionDialog';
import PlanSuggestions from './SubscriptionCard/PlanSuggestions.svelte';
let className = '';
export { className as class };
const { customer$ } = getCustomer$Ctx();
const DEFAULT_PLAN = {
    id: '0',
    name: Plan.FREE,
    amount: 0,
    interval: Billing.MONTH,
    product: { id: ProductId.SANBASE },
};
let isBillingLoading = true;
let billingHistory = [];
let plans = [];
$: customer = $customer$;
$: ({ subscriptions, isEligibleForTrial, annualDiscount, isCanceled } = customer);
$: paymentCard = $paymentCard$;
$: subscription = subscriptions.find((sub) => checkIsActiveSubscription(sub));
$: plan = (_a = subscription === null || subscription === void 0 ? void 0 : subscription.plan) !== null && _a !== void 0 ? _a : DEFAULT_PLAN;
$: isFree = ((_b = plan === null || plan === void 0 ? void 0 : plan.name) === null || _b === void 0 ? void 0 : _b.toUpperCase()) === Plan.FREE;
$: individualSuggestions = getIndividualSuggestions(plan, annualDiscount);
$: businessSuggestions = getBusinessSuggestions(plan);
$: if (process.browser) {
    fetchPlans();
}
queryBillingHistory().then((data) => {
    isBillingLoading = false;
    billingHistory = data;
});
async function fetchPlans() {
    let [pppSettings, allPlans] = await Promise.all([queryPppSettings(), queryPlans()]);
    let individualPlans = getIndividualPlans(allPlans);
    const businessPlans = getBusinessPlans(allPlans);
    if (pppSettings === null || pppSettings === void 0 ? void 0 : pppSettings.isEligibleForPpp) {
        individualPlans = pppSettings.plans;
    }
    plans = individualPlans
        .concat(businessPlans)
        .sort((a, b) => a.name === Plan.CUSTOM ? 1 : b.name === Plan.CUSTOM ? -1 : a.amount - b.amount);
}
</script>

<section id="subscription" class="border {className}">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting class="column subscriptions-1AeuF_">
    <plans-section>
      <UserPlanCard
        {plan}
        {subscription}
        {isEligibleForTrial}
        discount={individualSuggestions.length && individualSuggestions[0].discount}
        suggestionsCount={individualSuggestions.length}
      />

      <PlanSuggestions suggestions={individualSuggestions} {plans} {isEligibleForTrial}>
        <FullAccessCard currentPlanName={PlanName[plan.name]} />
      </PlanSuggestions>
    </plans-section>

    <plans-section>
      <PlanSuggestions suggestions={businessSuggestions} {plans} />
    </plans-section>
  </Setting>

  {#if subscription && !isCanceled && !isFree}
    <Setting class="setting-lZxDN5 justify">
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

  <Setting class="setting-lZxDN5 justify">
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

  <Setting class="setting-lZxDN5 justify">
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

:global(.subscriptions-1AeuF_) {
  gap: 28px;
}

plans-section {
  width: 100%;
  display: flex;
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
:global(.phone) :global(.setting-lZxDN5),
:global(.phone-xs) :global(.setting-lZxDN5) {
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

:global(.phone) :global(.subscriptions-1AeuF_),
:global(.tablet) :global(.subscriptions-1AeuF_),
:global(.phone-xs) :global(.subscriptions-1AeuF_) {
  flex-direction: column;
}
:global(.phone) plans-section,
:global(.tablet) plans-section,
:global(.phone-xs) plans-section {
  flex-direction: column;
}</style>
