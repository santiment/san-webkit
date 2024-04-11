<script context="module">import { queryPlans, getCachedProducts, getBusinessPlans, getIndividualPlans } from './../../api/plans';
import { formatPrice, checkIsBusinessPlan, checkIsPlanWithPrice, Plan } from './../../utils/plans';
import { Preloader } from './../../utils/fn';
import { stripe } from './../../stores/stripe';
import { dialogs } from './../../ui/Dialog';
import PaymentDialog from './index.svelte';
export const showPaymentDialog = (props) => dialogs.show(PaymentDialog, props);
const preloadData = () => (queryPlans(), paymentCard$.query(), stripe.load());
export const dataPreloader = Preloader(preloadData);
</script>

<script>import { onDestroy } from 'svelte';
import Dialog from './../../ui/Dialog';
import { DialogLock } from './../../ui/Dialog/dialogs';
import { PlanName } from './../../utils/plans';
import { paymentCard$ } from './../../stores/paymentCard';
import { getCustomer$Ctx } from './../../stores/customer';
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
export let plansFilter = (_) => true;
export let onPaymentSuccess = () => { };
export let onPaymentError;
export let source;
export let planData;
export let plans = [];
const { customer$ } = getCustomer$Ctx();
let closeDialog;
let plan = planData !== null && planData !== void 0 ? planData : {};
let loading = false;
let StripeCard;
let savedCard = $paymentCard$;
$: isBusiness = checkIsBusinessPlan(plan);
$: customer = $customer$;
$: ({ subscription } = customer);
$: isNotCanceled = !(subscription === null || subscription === void 0 ? void 0 : subscription.cancelAtPeriodEnd);
// TODO: make customer data accesible via context
$: ({ sanBalance, isEligibleForTrial, annualDiscount } = $customer$);
$: name = PlanName[plan.name] || plan.name;
$: price = name ? formatPrice(plan) : '';
$: if (process.browser) {
    const { id, name, amount } = planData || {};
    trackPaymentFormOpened({
        plan: name,
        planId: planData && +id,
        billing: interval,
        amount,
        source,
    });
    getPlans(plans, isBusiness);
}
function findDefaultPlan({ name, interval: billing }) {
    return defaultPlan === name && interval === billing;
}
async function getDefaultPlans(isBusiness) {
    var _a;
    const products = (_a = getCachedProducts()) !== null && _a !== void 0 ? _a : (await queryPlans());
    return isBusiness ? getBusinessPlans(products) : getIndividualPlans(products);
}
async function getPlans(plans, isBusiness) {
    const cachedPlans = plans.length ? plans : await getDefaultPlans(isBusiness);
    setPlans(cachedPlans);
}
function setPlans(data) {
    plans = mapPlans(data, checkIsPlanWithPrice, plansFilter);
    plan = plans.find(findDefaultPlan) || plans[0];
}
function onChange() {
    DialogPromise.locking = DialogLock.WARN;
}
let formNode = null;
function onSubmit() {
    if (!formNode)
        return;
    const isInvalid = !formNode.reportValidity();
    if (isInvalid)
        return;
    loading = true;
    DialogPromise.locking = DialogLock.LOCKED;
    const data = getPaymentFormData(formNode);
    buyPlan(customer$, plan, $stripe, StripeCard, data, source, savedCard, checkSanDiscount(sanBalance))
        .then((data) => {
        closeDialog();
        onPaymentSuccess(data, source);
    })
        .catch(onPaymentError)
        .finally(() => {
        loading = false;
        DialogPromise.locking = DialogLock.WARN;
    });
}
const unsub = paymentCard$.subscribe((value) => {
    savedCard = value;
});
onDestroy(() => {
    unsub();
    if (process.browser)
        trackPaymentFormClosed();
});
</script>

<Dialog {...$$props} title="Payment details" bind:closeDialog>
  <section class="dialog">
    {#if isNotCanceled && isBusiness === false}
      <Banner {plan} {name} {price} />
    {/if}

    <form bind:this={formNode} on:submit|preventDefault on:change={onChange}>
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
        annualDiscount={isBusiness ? {} : annualDiscount}
        isEligibleForTrial={isBusiness ? false : isEligibleForTrial}
        {loading}
        {source}
        {closeDialog}
        {onSubmit}
      />
    </form>
  </section>

  <Footer />
</Dialog>

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
.dialog {
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
