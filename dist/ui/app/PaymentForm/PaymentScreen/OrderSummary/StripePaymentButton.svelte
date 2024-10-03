<script lang="ts">import { getDialogControllerCtx } from "../../../../core/Dialog/dialogs.js";
import { useStripeCtx } from "../../../../../ctx/stripe/index.js";
import { useCustomerCtx } from "../../../../../ctx/customer/index.js";
import { trackEvent } from "../../../../../analytics/index.js";
import { usePaymentFormCtx } from "../../state.js";
import { usePaymentFlow } from "../../flow.js";
let {
  isPaymentInProcess = $bindable(false),
  delayStripe = 0,
  onSuccess,
  onError
} = $props();
const { Controller } = getDialogControllerCtx();
const { stripe } = useStripeCtx({ delay: delayStripe });
const { paymentForm, subscriptionPlan, resultPayment, discount } = usePaymentFormCtx.get();
const { customer } = useCustomerCtx();
const { processPayment } = usePaymentFlow();
let clientSecret = $derived(paymentForm.$.setupIntentClientSecret);
let selectedPlan = $derived(subscriptionPlan.$.selected);
let isConsumerPlan = $derived(!subscriptionPlan.$.formatted?.isBusiness);
let isEligibleForSanbaseTrial = $derived(isConsumerPlan && customer.$.isEligibleForSanbaseTrial);
$effect(() => {
  const _stripe = stripe.$;
  if (!_stripe) return;
  const appearance = {
    variables: {
      borderRadius: "8px",
      spacingUnit: "6px"
    }
  };
  const options = {
    buttonHeight: 40,
    layout: {
      overflow: "never"
    },
    paymentMethods: {
      link: "never",
      applePay: "always",
      googlePay: "always"
    },
    buttonType: {
      applePay: "subscribe",
      googlePay: "subscribe"
    }
  };
  const elements = _stripe.elements({
    mode: "subscription",
    amount: 1e7,
    currency: "usd",
    appearance
  });
  $effect(() => {
    if (selectedPlan) elements.update({ amount: resultPayment.$.amount });
  });
  const expressCheckoutElement = elements.create("expressCheckout", options);
  expressCheckoutElement.mount("#payment-request-button");
  expressCheckoutElement.on("click", (event) => {
    event.resolve({
      emailRequired: true,
      billingAddressRequired: true
    });
    trackEvent("press", {
      type: "payment_express_checkout",
      source: "payment_dialog",
      action: event.expressPaymentType,
      method: event.expressPaymentType,
      plan: selectedPlan?.name,
      plan_id: selectedPlan?.id,
      billing: selectedPlan?.interval,
      sanbase_trial: isEligibleForSanbaseTrial,
      discount: discount.$?.description,
      discountPercent: discount.$?.percentOff
    });
  });
  expressCheckoutElement.on("confirm", async (_event) => {
    if (!selectedPlan) {
      return Promise.reject("Missing selected plan");
    }
    const { error, setupIntent } = await _stripe.confirmSetup({
      elements,
      clientSecret,
      redirect: "if_required",
      confirmParams: {
        return_url: "https://app.santiment.net/pricing"
      }
    });
    if (error) {
      return onError?.(error, error.payment_method?.type);
    }
    if (!setupIntent) {
      return onError?.(error, void 0);
    }
    isPaymentInProcess = true;
    Controller.lock();
    return processPayment({
      plan: selectedPlan,
      setupIntent,
      action: _event.expressPaymentType,
      method: _event.expressPaymentType
    }).then(onSuccess).catch((error2) => {
      return onError?.(error2);
    }).finally(() => {
      isPaymentInProcess = false;
      Controller.unlock();
    });
  });
  return () => {
    expressCheckoutElement.destroy();
  };
});
</script>

<div id="payment-request-button"></div>
