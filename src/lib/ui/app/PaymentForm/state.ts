import { ss } from 'svelte-runes'
import { createCtx } from '$lib/utils/index.js'
import { CardMethod } from './PaymentMethodSelector/Card/index.js'

const DEFAULT_PAYMENT_METHOD = CardMethod
export const usePaymentFormCtx = createCtx('usePaymentFormCtx', () => {
  const paymentForm = ss({
    isCardPayment: DEFAULT_PAYMENT_METHOD === CardMethod,
    paymentMethod: DEFAULT_PAYMENT_METHOD,

    billingPeriod: 'month' as 'month' | 'year',
  })

  return {
    paymentForm,
    selectPaymentMethod(option: typeof CardMethod) {
      paymentForm.$.paymentMethod = option
      paymentForm.$.isCardPayment = option === CardMethod
      paymentForm.$ = paymentForm.$
    },
  }
})
