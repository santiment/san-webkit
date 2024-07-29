import { ss, useObserve } from 'svelte-runes'
import { tap } from 'rxjs'
import { createCtx } from '$lib/utils/index.js'
import { Mutation } from '$lib/api/index.js'
import { CardMethod } from './PaymentMethodSelector/Card/index.js'

const DEFAULT_PAYMENT_METHOD = CardMethod
export const usePaymentFormCtx = createCtx('usePaymentFormCtx', () => {
  const paymentForm = ss({
    isCardPayment: DEFAULT_PAYMENT_METHOD === CardMethod,
    paymentMethod: DEFAULT_PAYMENT_METHOD,

    billingPeriod: 'month' as 'month' | 'year',

    setupIntentClientSecret: '',
  })

  const update = () => {
    paymentForm.$ = paymentForm.$
  }

  useObserve(() =>
    mutateCreateStripeSetupIntent()().pipe(
      tap((clientSecret) => {
        paymentForm.$.setupIntentClientSecret = clientSecret
        update()
      }),
    ),
  )

  return {
    paymentForm,
    selectPaymentMethod(option: typeof CardMethod) {
      paymentForm.$.paymentMethod = option
      paymentForm.$.isCardPayment = option === CardMethod
      update()
    },
  }
})

export const mutateCreateStripeSetupIntent = Mutation(
  () => `mutation { createStripeSetupIntent { clientSecret } }`,
  (data: { createStripeSetupIntent: { clientSecret: string } }) =>
    data.createStripeSetupIntent.clientSecret,
)
