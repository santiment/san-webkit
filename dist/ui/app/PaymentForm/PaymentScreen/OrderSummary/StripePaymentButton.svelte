<script lang="ts">import { onMount } from "svelte";
import { useStripeCtx } from "../../../../../ctx/stripe/index.js";
import { usePaymentFormCtx } from "../../state.js";
import { usePaymentFlow } from "../../flow.js";
let {
  delayStripe = 0,
  onSuccess,
  onError
} = $props();
const { stripe } = useStripeCtx();
const { paymentForm, subscriptionPlan, discount } = usePaymentFormCtx();
const { processPayment } = usePaymentFlow();
let isMounted = $state(false);
let clientSecret = $derived(paymentForm.$.setupIntentClientSecret);
let selectedPlan = $derived(subscriptionPlan.$.selected);
onMount(() => {
  const timer = setTimeout(() => isMounted = true, delayStripe);
  return () => clearTimeout(timer);
});
$effect(() => {
  if (!isMounted) return;
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
    if (selectedPlan) elements.update({ amount: discount.$?.amount || selectedPlan.amount });
  });
  const expressCheckoutElement = elements.create("expressCheckout", options);
  expressCheckoutElement.mount("#payment-request-button");
  expressCheckoutElement.on("click", (event) => {
    event.resolve({
      emailRequired: true,
      billingAddressRequired: true
    });
  });
  expressCheckoutElement.on("confirm", async (_event) => {
    if (!selectedPlan) {
      return Promise.reject("Missing selected plan");
    }
    console.log(_event.expressPaymentType);
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
    return processPayment({
      plan: selectedPlan,
      setupIntent
    }).then(onSuccess).catch((error2) => {
      return onError?.(error2);
    });
  });
  return () => {
    expressCheckoutElement.destroy();
  };
});
</script>

<div id="payment-request-button"></div>
