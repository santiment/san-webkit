<script lang="ts">
  import { stripe as stripe$ } from '@/stores/stripe'

  export let plan: SAN.Plan

  $: stripe = $stripe$

  $: if (plan.name && stripe) {
    const paymentRequest = stripe.paymentRequest({
      country: 'CH',
      currency: 'usd',
      total: {
        label: plan.name,
        amount: plan.amount,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    })

    const elements = stripe.elements()
    const prButton = elements.create('paymentRequestButton', {
      paymentRequest,
    })

    ;(async () => {
      // Check the availability of the Payment Request API first.
      const result = await paymentRequest.canMakePayment()

      if (result) {
        prButton.mount('#payment-request-button')

        paymentRequest.on('paymentmethod', handlePayment)
      } else {
        document.getElementById('payment-request-button').style.display = 'none'
      }
    })()
  }

  async function handlePayment(ev: stripe.paymentRequest.StripePaymentMethodPaymentResponse) {
    if (!stripe) return

    // Confirm the PaymentIntent without handling potential next actions (yet).
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      { payment_method: ev.paymentMethod.id },
      { handleActions: false },
    )

    if (confirmError) {
      // Report to the browser that the payment failed, prompting it to
      // re-show the payment interface, or show an error message and close
      // the payment interface.
      ev.complete('fail')
    } else {
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      ev.complete('success')
      // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
      // handle the flow. If using an API version older than "2019-02-11"
      // instead check for: `paymentIntent.status === "requires_source_action"`.
      if (paymentIntent.status === 'requires_action') {
        // Let Stripe.js handle the rest of the payment flow.
        const { error } = await stripe.confirmCardPayment(clientSecret)
        if (error) {
          // The payment failed -- ask your customer for a new payment method.
        } else {
          // The payment has succeeded -- show a success message to your customer.
        }
      } else {
        // The payment has succeeded -- show a success message to your customer.
      }
    }
  }
</script>

<div id="payment-request-button" class="mrg-s mrg--t" />
