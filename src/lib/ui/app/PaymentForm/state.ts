import { ss } from 'svelte-runes'
import { createCtx } from '$lib/utils/index.js'
import { CardMethod } from './PaymentMethodSelector/Card/index.js'

export const usePaymentFormCtx = createCtx('usePaymentFormCtx', () => {
  const paymentForm = ss({
    paymentMethod: CardMethod,
    billingPeriod: 'month' as 'month' | 'year',
  })

  return {
    paymentForm,
  }
})
