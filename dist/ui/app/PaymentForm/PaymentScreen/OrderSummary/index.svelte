<script lang="ts">import Button from "../../../../core/Button/index.js";
import { useCustomerCtx } from "../../../../../ctx/customer/index.js";
import { getFormattedMonthDayYear, modifyDate } from "../../../../../utils/dates.js";
import Discount from "./Discount.svelte";
import Explanation from "./Explanation.svelte";
import StripePaymentButton from "./StripePaymentButton.svelte";
import { usePaymentFormCtx } from "../../state.js";
import { useStripeCtx } from "../../../../../ctx/stripe/index.js";
import { usePaymentFlow } from "../../flow.js";
import { getDialogControllerCtx } from "../../../../core/Dialog/dialogs.js";
import { onSupportClick } from "../../../../../utils/support.js";
const { Controller } = getDialogControllerCtx();
const { stripe: _stripe } = useStripeCtx();
const { customer } = useCustomerCtx();
const { paymentForm, billingPeriod, subscriptionPlan, discount } = usePaymentFormCtx();
const { startCardPaymentFlow } = usePaymentFlow();
let plan = $derived(subscriptionPlan.$);
let planPrice = $derived(plan.formatted?.price[billingPeriod.$]);
let discountedPrice = $derived(discount.$?.price || planPrice);
let isConsumerPlan = $derived(!plan.formatted?.isBusiness);
let isEligibleForSanbaseTrial = $derived(customer.$.isEligibleForSanbaseTrial && isConsumerPlan);
let trialDaysLeft = $derived(customer.$.trialDaysLeft);
let isCardPayment = $derived(paymentForm.$.isCardPayment);
let isAnnualBilling = $derived(billingPeriod.$ === "year");
let isMetamaskConnected = false;
let isPaymentIsProcess = $state(false);
async function onPayClick() {
  isPaymentIsProcess = true;
  startCardPaymentFlow().then(() => {
    onPaymentSuccess();
  }).catch((e) => {
    onPaymentError(e);
  });
}
function onPaymentSuccess(data) {
  console.log(data);
  Controller.close();
}
function onPaymentError(e) {
  console.log(e);
  isPaymentIsProcess = false;
}
</script>

<div
  class="min-w-[400px] max-w-[480px] gap-4 self-start column md:mt-10 md:min-w-0 md:max-w-full md:gap-2 md:[&>*]:-mx-5 md:[&>*]:rounded-none"
>
  <section class="gap-8 rounded-lg bg-athens px-8 py-6 column">
    <h2 class="text-lg font-semibold text-rhino">
      <div class="flex justify-between">
        {#if plan.formatted}
          {plan.formatted.name} - Billed {isAnnualBilling ? 'annually' : 'monthly'}
          <span class="text-base font-normal text-waterloo">
            ${planPrice}/ {isAnnualBilling ? 'Year' : 'Month'}
          </span>
        {:else}
          Unknown plan
        {/if}
      </div>

      {#if isEligibleForSanbaseTrial}
        <span class="text-green">14 day Free Trial</span>
      {/if}
    </h2>

    {#if isConsumerPlan}
      <Discount></Discount>
    {/if}

    <div class="mt-4 gap-4 column">
      {#if isConsumerPlan && discount.$}
        <div class="flex justify-between border-b pb-3 text-base font-medium text-waterloo">
          {discount.$.description}
          {discount.$.percentOff}%
          <span class="text-green">- ${discount.$.priceOff}</span>
        </div>
      {/if}

      {#if isEligibleForSanbaseTrial}
        {@const now = new Date()}
        <h4 class="flex justify-between text-base font-medium text-waterloo">
          Total you pay on {getFormattedMonthDayYear(modifyDate(now, { days: +14 }))}
          <span> ${discountedPrice}</span>
        </h4>
      {/if}

      <h3 class="justify-between text-lg font-medium row">
        Today you pay <span>
          {#if isEligibleForSanbaseTrial}
            $0
          {:else}
            ${discountedPrice}
          {/if}
        </span>
      </h3>

      {#if isConsumerPlan && isEligibleForSanbaseTrial === false && trialDaysLeft < 1}
        <p class="-mt-1">
          Your trial has expired! If you have accidentally bypassed the free trial, please get in
          touch with
          <a href="mailto:support@santiment.net" class="text-green" onclick={onSupportClick}>
            our support team</a
          >.
        </p>
      {/if}
    </div>

    <div class="gap-3 column">
      {#if isCardPayment === false}
        {#if isEligibleForSanbaseTrial || isMetamaskConnected}
          <Button
            variant="fill"
            size="lg"
            class="center"
            href="mailto:support@santiment.net"
            data-source="payment_form_order"
            data-type="contact_us"
            onclick={onSupportClick}
          >
            Contact us
          </Button>
        {:else}
          <Button variant="fill" size="lg" class="center">
            <img src="/webkit/icons/metamask.svg" alt="MetaMask" class="h-4" />
            Connect MetaMask
          </Button>
        {/if}
      {:else}
        <Button
          variant="fill"
          size="lg"
          class="center"
          loading={isPaymentIsProcess}
          onclick={onPayClick}
        >
          {#if isEligibleForSanbaseTrial}
            Start Free Trial
          {:else}
            Activate subscription
          {/if}
        </Button>
      {/if}

      {#if isCardPayment}
        <StripePaymentButton onSuccess={onPaymentSuccess} onError={onPaymentError}
        ></StripePaymentButton>
      {/if}

      {#if isConsumerPlan && isEligibleForSanbaseTrial && isCardPayment}
        <p class="text-center text-waterloo">
          Cancel anytime. No charge before the end of the free trial
        </p>
      {/if}
    </div>
  </section>

  {#if isCardPayment || isAnnualBilling}
    <section class="gap-6 rounded-lg bg-athens px-8 py-6 text-rhino column md:-mb-10">
      <Explanation price={planPrice}></Explanation>
    </section>
  {/if}
</div>
