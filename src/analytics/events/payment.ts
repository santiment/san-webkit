import type { Billing } from '@/utils/plans'
import { TrackCategory } from './utils'

const track = TrackCategory('Payment')

export enum CurrencyType {
  USD = 'USD',
}

export const trackPaymentFormClosed = () => track('payment_form_closed')

export const trackPaymentFormOpened = ({
  plan,
  planId,
  amount,
  billing,
  source,
  currency = CurrencyType.USD,
}: {
  plan: string
  planId: number
  amount: number
  billing: SAN.PlanInterval
  currency?: CurrencyType
  source: string
}) =>
  track('payment_form_opened', {
    plan,
    plan_id: planId,
    amount,
    billing,
    source,
    currency,
    source_url: window.location.href,
  })

export const trackPaymentFormSubmitted = ({
  amount,
  promocode,
  plan,
  billing,
  currency = CurrencyType.USD,
  san_tokens_discount = false,
}: {
  amount: number
  promocode?: string
  plan: string
  billing: Billing
  currency: CurrencyType
  san_tokens_discount: boolean
}) =>
  track('payment_form_submitted', {
    currency,
    // method,
    amount,
    promocode,
    plan,
    billing,
    san_tokens_discount,
    source_url: window.location.href,
  })

export const trackPaymentSuccess = (payment_success: boolean) =>
  track('payment_success', { payment_success, source_url: window.location.href })
