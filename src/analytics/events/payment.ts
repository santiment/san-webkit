import { TrackCategory } from './utils'

const track = TrackCategory('Payment')

export enum CurrencyType {
  USD = 'USD',
}

export const trackPaymentFormOpened = (currency = CurrencyType.USD) =>
  track('payment_form_opened', { currency })

export const trackPaymentFormSubmitted = ({
  amount,
  promocode,
  subscription_tier,
  timeframe,
  currency = CurrencyType.USD,
  san_tokens_discount = false,
}: {
  amount: number
  promocode?: string
  subscription_tier: string
  timeframe: 'monthly' | 'yearly'
  currency: CurrencyType
  san_tokens_discount: boolean
}) =>
  track('payment_form_submitted', {
    currency,
    // method,
    amount,
    promocode,
    subscription_tier,
    timeframe,
    san_tokens_discount,
  })

export const trackPaymentSuccess = (payment_success: boolean) =>
  track('payment_success', { payment_success })
