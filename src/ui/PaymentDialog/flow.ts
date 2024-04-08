import { mutateCreateStripeSetupIntent, mutateSubscribe } from './api'
import { createCardToken } from './utils'

export async function startStripePaymentButtonsFlow(
  stripe: stripe.Stripe,
  {
    plan,
    total,
    coupon,
    onSuccess,
    onError,
  }: {
    plan: SAN.Plan
    total?: number
    coupon?: string
    onSuccess: (data: any, methodName?: string) => void
    onError: (error?: any, methodName?: string) => void
  },
) {
  const paymentRequest = stripe.paymentRequest({
    country: 'CH',
    currency: 'usd',
    total: {
      label: plan.name + (process.env.IS_STAGE_BACKEND ? ' (STAGE)' : ''),
      amount: total || plan.amount,
    },
    requestPayerName: true,
    requestPayerEmail: true,
  })

  const elements = stripe.elements()
  const prButton = elements.create('paymentRequestButton', {
    paymentRequest,
  })

  // Check the availability of the Payment Request API first.
  const result = await paymentRequest.canMakePayment()
  if (!result) {
    const node = document.getElementById('payment-request-button')
    return node && (node.style.display = 'none')
  }

  prButton.mount('#payment-request-button')

  paymentRequest.on('paymentmethod', (ev) => {
    if (!stripe) return

    console.log(ev)

    startPaymentIntentFlow(stripe, {
      planId: +plan.id,
      paymentMethodId: ev.paymentMethod.id,
      coupon,
    })
      .then((data) => {
        onSuccess(data, ev.methodName)
        ev.complete('success')
        return data
      })
      .catch((e) => {
        onError(e, ev.methodName)
        ev.complete('fail')
        return Promise.reject(e)
      })
  })
}

export async function startPaymentIntentFlow(
  stripe: stripe.Stripe,
  variables: { planId: number; paymentMethodId: string; coupon?: string },
) {
  if (!stripe) return Promise.reject('Stripe not found')

  const clientSecret = await mutateCreateStripeSetupIntent()
  if (!clientSecret) return Promise.reject('Unable to get SetupIntent clientSecret')

  const { paymentMethodId } = variables

  const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
    clientSecret,
    { payment_method: paymentMethodId },
    { handleActions: false },
  )

  if (confirmError) {
    // Report to the browser that the payment failed, prompting it to
    // re-show the payment interface, or show an error message and close
    // the payment interface.
    return Promise.reject('setupIntent error')
  } else {
    // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
    // handle the flow. If using an API version older than "2019-02-11"
    // instead check for: `paymentIntent.status === "requires_source_action"`.
    if (setupIntent?.status === 'requires_action') {
      // Let Stripe.js handle the rest of the payment flow.
      const { error } = await stripe.confirmCardSetup(clientSecret)

      if (error) {
        console.log({ error })
        return Promise.reject('setupIntent error')
        // The payment failed -- ask your customer for a new payment method.
      }
    }
  }

  const vars = { ...variables }
  if (!vars.coupon) delete vars.coupon

  return mutateSubscribe(vars)
}

export async function start3DSPaymentFlow(
  stripe: stripe.Stripe,
  variables: {
    planId: string | number
    coupon?: string
    card: stripe.elements.Element
    checkoutInfo: {
      name: string
      address_city: string
      address_country: string
      address_line1: string
      address_line2: string
    }
  },
) {
  if (!stripe) return Promise.reject('Stripe not found')

  const clientSecret = await mutateCreateStripeSetupIntent()
  if (!clientSecret) return Promise.reject('Unable to get SetupIntent clientSecret')

  const { card, checkoutInfo, planId, coupon } = variables
  // const cardTokenPromise = createCardToken(stripe, card, checkoutInfo)

  const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
    clientSecret,
    {
      payment_method: {
        card,
        billing_details: {
          name: checkoutInfo.name,
          address: {
            city: checkoutInfo.address_city,
            country: checkoutInfo.address_country,
            line1: checkoutInfo.address_line1,
            line2: checkoutInfo.address_line2,
          },
        },
      },
    },
    { handleActions: false },
  )

  console.log({ clientSecret, setupIntent })

  if (confirmError) {
    // Report to the browser that the payment failed, prompting it to
    // re-show the payment interface, or show an error message and close
    // the payment interface.
    return Promise.reject('setupIntent error')
  }

  if (!setupIntent) {
    return Promise.reject('setupIntent error')
  }

  return mutateSubscribe({
    planId: +planId,
    // cardToken: cardToken?.id,
    coupon,
    paymentMethodId: setupIntent.payment_method,
  }).then(async (sub) => {
    console.log(sub)

    window.paymentIntentSecretPromise = Promise.withResolvers()
    const secret = await window.paymentIntentSecretPromise.promise
    const { error } = await stripe.confirmCardPayment(secret)

    console.log(error)

    return sub
  })

  // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
  // handle the flow. If using an API version older than "2019-02-11"
  // instead check for: `paymentIntent.status === "requires_source_action"`.
  if (setupIntent.status === 'requires_action') {
    // Let Stripe.js handle the rest of the payment flow.

    window.paymentIntentSecretPromise = Promise.withResolvers()
    const secret = await window.paymentIntentSecretPromise.promise
    const { error } = await stripe.confirmCardPayment(secret)
    // const { error, } = await stripe.confirmCardPayment(clientSecret)

    // console.log(_setupIntent)

    if (error) {
      console.error({ error })
      return Promise.reject('3DS setupIntent error')
      // The payment failed -- ask your customer for a new payment method.
    }
  }

  if (!setupIntent.payment_method) {
    return Promise.reject('setupIntent payment method missing')
  }

  // const cardToken = await cardTokenPromise.catch(() => null)

  return mutateSubscribe({
    planId: +planId,
    // cardToken: cardToken?.id,
    coupon,
    paymentMethodId: setupIntent.payment_method,
  })
}
