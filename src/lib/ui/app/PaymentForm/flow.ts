import type { ConfirmCardSetupData, SetupIntent, Stripe, Token } from '@stripe/stripe-js'
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

import { Query } from '$lib/api/executor.js'
import { useStripeCtx } from '$lib/ctx/stripe/index.js'
import { notification } from '$ui/core/Notifications/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { trackEvent } from '$lib/analytics/index.js'
import { getPlanDisplayName } from '$lib/utils/plans/index.js'

import { mutateSubscribe } from './api.js'
import { usePaymentFormCtx } from './state.js'

export type TPaymentFlowResult = undefined | API.ExtractData<typeof mutateSubscribe>

export function usePaymentFlow() {
  const { paymentForm, subscriptionPlan, coupon, discount } = usePaymentFormCtx.get()
  const { stripe: stripeLoader } = useStripeCtx()
  const { customer } = useCustomerCtx()

  async function startCardPaymentFlow({ action = '' } = {}) {
    const { selected: plan } = subscriptionPlan.$
    if (!plan) {
      return Promise.reject(new Error('No selected plan'))
    }

    const { cardElement, addressElement } = paymentForm.$
    if (!cardElement || !addressElement) {
      return Promise.reject(new Error('Incorrect data filled'))
    }

    const stripe = stripeLoader.$
    if (!stripe) {
      return Promise.reject(new Error('Failed to load Stripe'))
    }

    const addressData = await addressElement
      .getValue()
      .catch(() => ({ complete: false, value: null }))

    if (!addressData.complete || !addressData.value) {
      return Promise.reject(new Error('Incorrect billing information'))
    }

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

      action,
      method: 'card',
    })
  }

  async function confirmPaymentSetup(
    stripe: Stripe,
    setupIntentClientSecret: string,
    {
      setupIntent,
      paymentMethod,
    }: {
      paymentMethod?: ConfirmCardSetupData['payment_method']
      setupIntent?: SetupIntent
    },
  ) {
    if (setupIntent) {
      return { setupIntent, error: null }
    }

    return stripe.confirmCardSetup(
      setupIntentClientSecret,
      { payment_method: paymentMethod },
      { handleActions: false },
    )
  }

  async function processPayment({
    method,
    action,

    plan,
    cardToken,
    ...paymentData
  }: {
    plan: TSubscriptionPlan
    cardToken?: Token
    paymentMethod?: ConfirmCardSetupData['payment_method']
    setupIntent?: SetupIntent

    method?: string
    action?: string
  }) {
    const stripe = stripeLoader.$
    if (!stripe) return

    const { setupIntentClientSecret } = paymentForm.$
    if (!setupIntentClientSecret) return

    const { setupIntent, error: confirmError } = await confirmPaymentSetup(
      stripe,
      setupIntentClientSecret,
      paymentData,
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

    const planDisplayName = getPlanDisplayName(plan.name)
    const isConsumerPlan = !subscriptionPlan.$.formatted?.isBusiness
    const isEligibleForSanbaseTrial = isConsumerPlan && customer.$.isEligibleForSanbaseTrial

    const analytics = {
      action,
      method,
      plan: plan.name,
      plan_id: plan.id,
      billing: plan.interval,
      sanbase_trial: isEligibleForSanbaseTrial,

      discount: discount.$?.description,
      discountPercent: discount.$?.percentOff,

      source: 'payment_dialog',
    }
    trackEvent('payment_form_submitted', analytics)

    // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
    // handle the flow. If using an API version older than "2019-02-11"
    // instead check for: `paymentIntent.status === "requires_source_action"`.
    if (setupIntent?.status === 'requires_action') {
      // Let Stripe.js handle the rest of the payment flow.
      const { error } = await stripe.confirmCardSetup(setupIntentClientSecret)

      if (error) {
        notification.error(`Error during the payment`, {
          content: error.message || 'Please try again or contact our support',
          duration: 10000,
        })
        trackEvent('payment_fail', { ...analytics, error_code: error.code || '3ds_error' })

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
      .then((subscription) => {
        customer.reload()
        notification.success(`You have successfully upgraded to the "${planDisplayName}" plan!`)

        trackEvent('payment_success', analytics)

        return subscription
      })
      .catch((error) => {
        notification.error(`Error during the payment`, {
          content: 'Please try again or contact our support',
        })
        trackEvent('payment_fail', { ...analytics, error_code: 'api_error' })

        return Promise.reject(error)
      })
  }

  return { startCardPaymentFlow, processPayment }
}
