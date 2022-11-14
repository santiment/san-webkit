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
  hasSanTokensDiscount = false,
}: {
  amount: number
  promocode?: string
  plan: string
  billing: SAN.PlanInterval
  currency?: CurrencyType
  hasSanTokensDiscount: boolean
}) =>
  track('payment_form_submitted', {
    currency,
    // method,
    amount,
    promocode,
    plan,
    billing,
    san_tokens_discount: hasSanTokensDiscount,
    source_url: window.location.href,
  })

export const trackPaymentSuccess = () =>
  track('payment_success', { source_url: window.location.href })

export const trackPaymentFormPlanSelect = ({
  amount,
  plan,
  billing,
  currency = CurrencyType.USD,
}: {
  amount: number
  plan: string
  billing: SAN.PlanInterval
  currency?: CurrencyType
}) =>
  track('payment_form_plan_select', {
    currency,
    amount,
    plan,
    billing,
    source_url: window.location.href,
  })
