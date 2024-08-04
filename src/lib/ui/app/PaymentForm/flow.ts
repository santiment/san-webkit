import { Query } from '$lib/api/executor.js'
import { useStripeCtx } from '$lib/ctx/stripe.js'
import { mutateSubscribe } from './api.js'
import { usePaymentFormCtx } from './state.js'

export function usePaymentFlow() {
  const { paymentForm, subscriptionPlan } = usePaymentFormCtx.get()
  const { stripe: stripeLoader } = useStripeCtx()

  async function startPaymentFlow() {
    const { selected: plan } = subscriptionPlan.$
    if (!plan) return

    const { cardElement, addressElement, setupIntentClientSecret } = paymentForm.$
    if (!cardElement || !addressElement) return

    const stripe = stripeLoader.$
    if (!stripe) return

    const addressData = await addressElement
      .getValue()
      .catch(() => ({ complete: false, value: null }))
    if (!addressData.complete || !addressData.value) return

    const { name, address } = addressData.value

    const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
      setupIntentClientSecret,
      {
        payment_method: { card: cardElement, billing_details: addressData.value },
      },
      { handleActions: false },
    )

    console.log(setupIntent, confirmError)

    const { token: cardToken, error: cardTokenError } = await stripe.createToken(cardElement, {
      name,
      address_city: address.city,
      address_country: address.country,
      address_line1: address.line1,
      address_line2: address.line2 || undefined,
    })

    if (confirmError) {
      // Report to the browser that the payment failed, prompting it to
      // re-show the payment interface, or show an error message and close
      // the payment interface.
      return Promise.reject('setupIntent error')
    }

    if (!setupIntent) {
      return Promise.reject('setupIntent error')
    }

    if (!setupIntent.payment_method) {
      return Promise.reject('paymentMethod is missing')
    }

    // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
    // handle the flow. If using an API version older than "2019-02-11"
    // instead check for: `paymentIntent.status === "requires_source_action"`.
    if (setupIntent?.status === 'requires_action') {
      // Let Stripe.js handle the rest of the payment flow.
      const { error } = await stripe.confirmCardSetup(setupIntentClientSecret)

      if (error) {
        console.error(error)
        return Promise.reject('3DS setupIntent error')
        // The payment failed -- ask your customer for a new payment method.
      }
    }

    const { payment_method } = setupIntent
    const paymentMethodId = typeof payment_method === 'string' ? payment_method : payment_method.id

    return mutateSubscribe(Query)({
      paymentMethodId,
      coupon: undefined,
      planId: plan.id,
      cardToken: cardToken?.id,
    }).then(async (subscription) => {
      if (!subscription?.paymentIntent?.clientSecret) {
        return subscription
      }

      // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
      // handle the flow. If using an API version older than "2019-02-11"
      // instead check for: `paymentIntent.status === "requires_source_action"`.
      if (setupIntent.status === 'requires_action') {
        // Let Stripe.js handle the rest of the payment flow.
        const { error } = await stripe.confirmCardPayment(subscription.paymentIntent.clientSecret)

        if (error) {
          console.error(error)
          // The payment failed -- ask your customer for a new payment method.
        } else {
          subscription.status = 'ACTIVE'
        }
      }

      return subscription
    })
  }

  return startPaymentFlow
}
