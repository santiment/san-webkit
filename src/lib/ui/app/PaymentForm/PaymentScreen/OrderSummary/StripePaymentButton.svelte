<script lang="ts">
  import type {
    BaseStripeElementsOptions,
    StripeExpressCheckoutElementOptions,
  } from '@stripe/stripe-js'
  import { useStripeCtx } from '$lib/ctx/stripe/index.js'
  import { usePaymentFormCtx } from '../../state.js'
  import { usePaymentFlow } from '../../flow.js'

  let {
    onSuccess,
    onError,
  }: {
    onSuccess: (data: any, walletName: string) => void
    onError: (data: any, walletName: string) => void
  } = $props()

  const { stripe } = useStripeCtx()
  const { paymentForm, subscriptionPlan, discount } = usePaymentFormCtx()
  const { processPayment } = usePaymentFlow()

  let clientSecret = $derived(paymentForm.$.setupIntentClientSecret)
  let selectedPlan = $derived(subscriptionPlan.$.selected)

  $effect(() => {
    const _stripe = stripe.$
    if (!_stripe) return

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
        link: 'auto',
        applePay: 'always',
        googlePay: 'always',
      },
    } as StripeExpressCheckoutElementOptions

    const elements = _stripe.elements({
      mode: 'payment',
      amount: 1000000,
      currency: 'usd',
      appearance,
    })
    $effect(() => {
      if (selectedPlan) elements.update({ amount: discount.$?.amount || selectedPlan.amount })
    })

    const expressCheckoutElement = elements.create('expressCheckout', options)
    expressCheckoutElement.mount('#payment-request-button')

    expressCheckoutElement.on('click', (event) => {
      event.resolve({
        emailRequired: true,
        billingAddressRequired: true,
      })
    })

    expressCheckoutElement.on('confirm', async (event) => {
      if (!selectedPlan) {
        return Promise.reject('Missing selected plan')
      }

      const { error, paymentIntent } = await _stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: 'if_required',
      })

      if (error) {
        // This point is reached only if there's an immediate error when confirming the payment. Show the error to your customer (for example, payment details incomplete).
        return onError?.()
      }

      if (!paymentIntent) {
        return onError?.()
      }

      const paymentMethod = paymentIntent.payment_method
      if (!paymentMethod) {
        return Promise.reject('Cannot process payment method')
      }

      return processPayment({
        plan: selectedPlan,
        paymentMethod: typeof paymentMethod === 'string' ? paymentMethod : paymentMethod.id,
      }).then(onSuccess)
    })
  })
</script>

<div id="payment-request-button" />
