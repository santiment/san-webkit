import { TrackCategory } from './utils'

const track = TrackCategory('Payment')

export const trackPaymentFormOpened = () => track('payment_form_opened')

export const trackPaymentFormSubmitted = ({
  amount,
  promocode,
  subscription_tier,
  timeframe,
}: {
  amount: number
  promocode?: string
  subscription_tier: string
  timeframe: 'monthly' | 'yearly'
}) =>
  track('payment_form_submitted', {
    // currency,
    // method,
    // discount_requested,
    amount,
    promocode,
    subscription_tier,
    timeframe,
  })

export const trackPaymentSuccess = (payment_success: boolean) =>
  track('payment_success', { payment_success })
