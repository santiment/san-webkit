<script lang="ts">
  import type {
    BaseStripeElementsOptions,
    StripeExpressCheckoutElementOptions,
  } from '@stripe/stripe-js'
  import { useStripeCtx } from '$lib/ctx/stripe.js'

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
      mode: 'subscription',
      amount: 1099,
      currency: 'usd',
      appearance,
    })
    const expressCheckoutElement = elements.create('expressCheckout', options)
    expressCheckoutElement.mount('#payment-request-button')

    expressCheckoutElement.on('click', (event) => {
      event.resolve({
        emailRequired: true,
        billingAddressRequired: true,
      })
    })
  })

  function startPaymentIntentFlow() {}
</script>

<div id="payment-request-button" />
