<script>
  import { stripe as stripe$ } from '@/stores/stripe'

  $: stripe = $stripe$

  $: if (stripe) {
    const paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1099,
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
      console.log({ result, prButton })
      if (result) {
        prButton.mount('#payment-request-button')
      } else {
        document.getElementById('payment-request-button').style.display = 'none'
      }
    })()
  }
</script>

<div id="payment-request-button" />

<style>
</style>
