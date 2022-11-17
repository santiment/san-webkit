<script context="module">import { querySanbasePlans, getCachedSanbasePlans } from './../../api/plans';
import { formatPrice, onlyProLikePlans, Plan } from './../../utils/plans';
import { Preloader } from './../../utils/fn';
import { stripe } from './../../stores/stripe';
import { dialogs } from './../../ui/Dialog';
import PaymentDialog from './index.svelte';
export const showPaymentDialog = props => dialogs.show(PaymentDialog, props);

const preloadData = () => (querySanbasePlans(), paymentCard$.query(), stripe.load());

export const dataPreloader = Preloader(preloadData);</script>

<script>import { onDestroy } from 'svelte';
import Dialog from './../../ui/Dialog';
import { DialogLock } from './../../ui/Dialog/dialogs';
import './../../analytics';
import { PlanName } from './../../utils/plans';
import { customerData$ } from './../../stores/user';
import { subscription$ } from './../../stores/subscription';
import { paymentCard$ } from './../../stores/paymentCard';
import { trackPaymentFormClosed, trackPaymentFormOpened } from './../../analytics/events/payment';
import Banner from './Banner.svelte';
import PayerInfo from './PayerInfo.svelte';
import SavedCard from './SavedCard.svelte';
import Confirmation from './Confirmation.svelte';
import Footer from './Footer.svelte';
import { buyPlan, checkSanDiscount, getPaymentFormData, mapPlans } from './utils';
export let DialogPromise;
let defaultPlan = Plan.PRO;
export { defaultPlan as plan };
export let interval = 'year';
export let isSinglePlan = false;
export let plansFilter = onlyProLikePlans;
export let trialDaysLeft = 0;
export let onPaymentSuccess = () => {};
export let onPaymentError;
export let source;
export let planData;
let closeDialog;
let plans = [];
let plan = {};
let loading = false;
let StripeCard;
let savedCard = $paymentCard$;

if (process.browser) {
  const {
    id,
    name,
    amount
  } = planData || {};
  trackPaymentFormOpened({
    plan: name,
    planId: +id,
    billing: interval,
    amount,
    source
  });
  getPlans();
}

$: subscription = $subscription$;

$: isNotCanceled = !(subscription === null || subscription === void 0 ? void 0 : subscription.cancelAtPeriodEnd);

$: ({
  sanBalance,
  isEligibleForTrial,
  annualDiscount
} = $customerData$);

$: name = PlanName[plan.name] || plan.name;

$: price = name ? formatPrice(plan) : '';

function findDefaultPlan({
  name,
  interval: billing
}) {
  return defaultPlan === name && interval === billing;
}

function getPlans() {
  const cached = getCachedSanbasePlans();
  if (cached) setPlans(cached);else querySanbasePlans().then(setPlans);
}

function setPlans(data) {
  plans = mapPlans(data, plansFilter);
  plan = plans.find(findDefaultPlan) || plans[0];
}

function onChange() {
  DialogPromise.locking = DialogLock.WARN;
}

function onSubmit({
  currentTarget
}) {
  loading = true;
  DialogPromise.locking = DialogLock.LOCKED;
  const data = getPaymentFormData(currentTarget);
  buyPlan(plan, $stripe, StripeCard, data, source, savedCard, checkSanDiscount(sanBalance)).then(data => {
    closeDialog();
    onPaymentSuccess(data, source);
  }).catch(onPaymentError).finally(() => {
    loading = false;
    DialogPromise.locking = DialogLock.WARN;
  });
}

const unsub = paymentCard$.subscribe(value => {
  savedCard = value;
});
onDestroy(() => {
  unsub();
  if (process.browser) trackPaymentFormClosed();
});</script>

<Dialog {...$$props} title="Payment details" bind:closeDialog>
  <section class="dialog">
    {#if isNotCanceled}
      <Banner {plan} {name} {price} {trialDaysLeft} {isEligibleForTrial} />
    {/if}

    <form on:submit|preventDefault={onSubmit} on:change={onChange}>
      {#if savedCard}
        <SavedCard bind:savedCard />
      {:else}
        <PayerInfo bind:StripeCard />
      {/if}

      <Confirmation
        bind:plan
        {plans}
        {name}
        {price}
        {sanBalance}
        {annualDiscount}
        {isSinglePlan}
        {isEligibleForTrial}
        {loading}
      />
    </form>
  </section>

  <Footer />
</Dialog>

<style >.dialog {
  padding: 16px 40px 24px;
  overflow: auto;
  width: 900px;
  max-width: 100%;
}

form {
  display: grid;
  grid: "info confirmation" 1fr/1fr 1fr;
  gap: 0 32px;
}

:global(body:not(.desktop)) .dialog {
  padding: 16px;
}
:global(body:not(.desktop)) form {
  display: block;
}

.dialog :global(a) {
  color: var(--green);
}
.dialog :global(a):hover {
  color: var(--green-hover);
}</style>
