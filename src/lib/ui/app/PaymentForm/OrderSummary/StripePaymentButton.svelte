<script lang="ts">
  import { useStripeCtx } from '$lib/ctx/stripe.js'
  import type {
    BaseStripeElementsOptions,
    StripeExpressCheckoutElementOptions,
  } from '@stripe/stripe-js'

  let {
    onSuccess,
    onError,
  }: {
    onSuccess: (data: any, walletName: string) => void
    onError: (data: any, walletName: string) => void
  } = $props()

  const { stripe } = useStripeCtx()

  $effect(() => {
    if (!stripe.$) return

    const appearance = {
      variables: {
        borderRadius: '8px',
        spacingUnit: '6px',
      },
    } as BaseStripeElementsOptions['appearance']

    const options = {
      buttonHeight: 40,
      layout: {
        overflow: 'never',
      },
      paymentMethods: {
        applePay: 'always',
        googlePay: 'always',
      },
    } as StripeExpressCheckoutElementOptions

    const elements = stripe.$.elements({
      mode: 'setup',
      // amount: 1099,
      currency: 'usd',
      appearance,
    })
    const expressCheckoutElement = elements.create('expressCheckout', options)
    expressCheckoutElement.mount('#payment-request-button')

    expressCheckoutElement.on('click', (event) => {
      event.resolve({
        emailRequired: true,
        billingAddressRequired: true,
        lineItems: [
          {
            name: 'Sample item',
            amount: 1000,
          },
        ],
      })
    })

    /*
    const paymentRequest = stripe.$.paymentRequest({
      country: 'CH',
      currency: 'usd',
      total: {
        label: 'Test' + (process.env.IS_STAGE_BACKEND ? ' (STAGE)' : ''),
        amount: 200,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    })

    const elements = stripe.$.elements()
    const prButton = elements.create('paymentRequestButton', {
      paymentRequest,
    })

    // Check the availability of the Payment Request API first.
    paymentRequest.canMakePayment().then((canMakePayment) => {
      if (!canMakePayment) {
        const node = document.getElementById('payment-request-button')
        return node && (node.style.display = 'none')
      }

      prButton.mount('#payment-request-button')

      paymentRequest.on('paymentmethod', (paymentEvent) => {
        if (!stripe) return

        startPaymentIntentFlow(stripe, {
          planId: +plan.id,
          paymentMethodId: paymentEvent.paymentMethod.id,
          coupon,
        })
          .then((data) => {
            onSuccess(data, paymentEvent.walletName)
            paymentEvent.complete('success')
            return data
          })
          .catch((error) => {
            onError(error, paymentEvent.walletName)
            paymentEvent.complete('fail')
            return Promise.reject(error)
          })
      })
    })
      */
  })

  function startPaymentIntentFlow() {}
</script>

<div id="payment-request-button" />
