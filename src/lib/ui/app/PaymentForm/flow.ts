import type { ConfirmCardSetupData, SetupIntent, Stripe, Token } from '@stripe/stripe-js'

import { Query } from '$lib/api/executor.js'
import { useStripeCtx } from '$lib/ctx/stripe/index.js'
import { notification } from '$ui/core/Notifications/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { trackEvent } from '$lib/analytics/index.js'
import { trackAffiliatlyPayment } from '$lib/analytics/affiliatly/index.js'
import { createCtx } from '$lib/utils/index.js'

import { mutateSubscribe } from './api.js'
import { usePaymentFormCtx } from './state.js'
import { getPlanName } from '../SubscriptionPlan/utils.js'

export type TPaymentFlowResult = undefined | API.ExtractData<typeof mutateSubscribe>

export const usePaymentFlowCtx = createCtx(
  'usePaymentFlowCtx',
  <GTarget>({
    ensureTarget,
    subscribeMutation,
    collectAnalytics,
    onPaymentSuccess,
  }: {
    ensureTarget: () => undefined | null | GTarget
    subscribeMutation: (
      target: GTarget,
      data: {
        paymentMethodId: string
        cardToken?: string
      },
    ) => Promise<API.ExtractData<typeof mutateSubscribe>>

    collectAnalytics: (target: GTarget) => void | Record<string, any>

    onPaymentSuccess: (
      target: GTarget,
      subscription: API.ExtractData<typeof mutateSubscribe>,
    ) => void
  }) => {
    const { paymentForm } = usePaymentFormCtx.get()
    const { stripe: stripeLoader } = useStripeCtx()
    const { customer } = useCustomerCtx()

    async function startCardPaymentFlow({ action = '' } = {}) {
      const target = ensureTarget()
      if (!target) {
        return Promise.reject(new Error('No subscription target'))
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
        target,
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

      target = ensureTarget(),
      cardToken,
      ...paymentData
    }: {
      target?: ReturnType<typeof ensureTarget>
      cardToken?: Token
      paymentMethod?: ConfirmCardSetupData['payment_method']
      setupIntent?: SetupIntent

      method?: string
      action?: string
    }) {
      if (!target) return

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

      const analytics = {
        action,
        method,

        ...collectAnalytics(target),

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
      const paymentMethodId =
        typeof payment_method === 'string' ? payment_method : payment_method.id

      return subscribeMutation(target, { paymentMethodId, cardToken: cardToken?.id })
        .then(async (subscription) => {
          if (!subscription?.paymentIntent?.clientSecret) {
            return subscription
          }

          // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
          // handle the flow. If using an API version older than "2019-02-11"
          // instead check for: `paymentIntent.status === "requires_source_action"`.
          if (setupIntent.status === 'requires_action') {
            // Let Stripe.js handle the rest of the payment flow.
            const { error } = await stripe.confirmCardPayment(
              subscription.paymentIntent.clientSecret,
            )

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
          onPaymentSuccess(target, subscription)

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
  },
)

/**
 * Ensuring the `usePaymentFlowCtx` is set with appropriate handlers to support Sanbase's payment flow.
 * Accessing `useCustomerCtx` and `usePaymentFormCtx` to get the current user and selected plan/coupon info.
 */
export function useSanbasePaymentFlow() {
  const { customer } = useCustomerCtx()
  const { subscriptionPlan, coupon, discount } = usePaymentFormCtx.get()

  usePaymentFlowCtx.set({
    ensureTarget: () => subscriptionPlan.$.selected,

    subscribeMutation: (target, data) =>
      mutateSubscribe(Query)({
        ...data,
        coupon: coupon.$?.isValid ? coupon.$.value : undefined,
        planId: +target.id,
      }),

    onPaymentSuccess(target, subscription) {
      const planDisplayName = getPlanName(target.name)
      notification.success(`You have successfully upgraded to the "${planDisplayName}" plan!`)

      if (subscription?.paymentIntent?.id) {
        trackAffiliatlyPayment(
          subscription.paymentIntent.id,
          Math.ceil((subscription.plan?.amount ?? target.amount) / 100),
        )
      }
    },

    collectAnalytics(target) {
      const isEligibleForSanbaseTrial =
        subscriptionPlan.$.formatted?.isTrialSupported && customer.$.isEligibleForSanbaseTrial

      return {
        plan: target.name,
        plan_id: target.id,
        billing: target.interval,
        sanbase_trial: isEligibleForSanbaseTrial,

        discount: discount.$?.description,
        discountPercent: discount.$?.percentOff,
      }
    },
  })
}
