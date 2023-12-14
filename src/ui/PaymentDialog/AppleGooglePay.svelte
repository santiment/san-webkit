<script lang="ts">
  import { stripe as stripe$ } from '@/stores/stripe'
  import { mutateCreateStripeSetupIntent, mutateSubscribe } from './api'

  export let plan: SAN.Plan

  $: stripe = $stripe$

  $: if (plan.name && stripe) {
    const paymentRequest = stripe.paymentRequest({
      country: 'CH',
      currency: 'usd',
      total: {
        label: plan.name + (process.env.IS_STAGE_BACKEND ? ' (STAGE)' : ''),
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

    const clientSecret = await mutateCreateStripeSetupIntent()
    if (!clientSecret) return

    console.log({ clientSecret })

    console.log({ payment_method: ev.paymentMethod.id })

    // Confirm the PaymentIntent without handling potential next actions (yet).
    const paymentMethodId = ev.paymentMethod.id

    const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
      clientSecret,
      { payment_method: paymentMethodId },
      { handleActions: false },
    )

    console.log({ setupIntent })
    console.log({ confirmError })

    if (confirmError) {
      // Report to the browser that the payment failed, prompting it to
      // re-show the payment interface, or show an error message and close
      // the payment interface.
      ev.complete('fail')

      return
    } else {
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      ev.complete('success')
      // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
      // handle the flow. If using an API version older than "2019-02-11"
      // instead check for: `paymentIntent.status === "requires_source_action"`.
      if (setupIntent?.status === 'requires_action') {
        // Let Stripe.js handle the rest of the payment flow.
        const { error } = await stripe.confirmCardSetup(clientSecret)
        console.log({ error })

        if (error) {
          return
          // The payment failed -- ask your customer for a new payment method.
        }
      }
    }

    return mutateSubscribe({
      planId: +plan.id,
      paymentMethodId,
    }).then(console.log)
  }
</script>

<div id="payment-request-button" class="mrg-s mrg--t" />
