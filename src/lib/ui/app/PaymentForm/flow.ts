import { Query } from '$lib/api/executor.js'
import { useStripeCtx } from '$lib/ctx/stripe/index.js'
import { notification } from '$ui/core/Notifications/index.js'
import type { ConfirmCardSetupData, Token } from '@stripe/stripe-js'
import { mutateSubscribe } from './api.js'
import { usePaymentFormCtx } from './state.js'
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'

export function usePaymentFlow() {
  const { paymentForm, subscriptionPlan, coupon } = usePaymentFormCtx.get()
  const { stripe: stripeLoader } = useStripeCtx()
  const { customer } = useCustomerCtx()

  async function startCardPaymentFlow() {
    const { selected: plan } = subscriptionPlan.$
    if (!plan) return

    const { cardElement, addressElement } = paymentForm.$
    if (!cardElement || !addressElement) return

    const stripe = stripeLoader.$
    if (!stripe) return

    const addressData = await addressElement
      .getValue()
      .catch(() => ({ complete: false, value: null }))
    if (!addressData.complete || !addressData.value) return

    const { name, address } = addressData.value

    const { token: cardToken, error: cardTokenError } = await stripe.createToken(cardElement, {
      name,
      address_city: address.city,
      address_country: address.country,
      address_line1: address.line1,
      address_line2: address.line2 || undefined,
    })

    if (cardTokenError) {
      return Promise.reject('Cannot create card token')
    }

    return processPayment({
      paymentMethod: {
        card: cardElement,
        billing_details: addressData.value,
      },
      plan,
      cardToken,
    })
  }

  async function processPayment({
    paymentMethod,
    plan,
    cardToken,
  }: {
    paymentMethod: ConfirmCardSetupData['payment_method']
    plan: TSubscriptionPlan
    cardToken?: Token
  }) {
    const stripe = stripeLoader.$
    if (!stripe) return

    const { setupIntentClientSecret } = paymentForm.$
    if (!setupIntentClientSecret) return

    const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
      setupIntentClientSecret,
      { payment_method: paymentMethod },
      { handleActions: false },
    )

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
      coupon: coupon.$?.isValid ? coupon.$.value : undefined,
      planId: +plan.id,
      cardToken: cardToken?.id,
    })
      .then(async (subscription) => {
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
      .then(() => {
        customer.reload()
        notification.success(`You have successfully upgraded to the "${plan.name}" plan!`)
      })
      .catch((error) => {
        notification.error(`Error during the payment`, {
          description: 'Please try again or contact our support',
        })

        return Promise.reject(error)
      })
  }

  return { startCardPaymentFlow, processPayment }
}
