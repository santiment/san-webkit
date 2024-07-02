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
  plan: string | undefined
  planId: number | undefined
  amount: number | undefined
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
    source_search_params: window.location.search,
  })

export const trackPaymentFormSubmitted = ({
  source,
  amount,
  promocode,
  plan,
  planId,
  billing,
  currency = CurrencyType.USD,
  hasSanTokensDiscount = false,
}: {
  amount: number
  promocode?: string
  plan: string
  planId: number
  billing: SAN.PlanInterval
  currency?: CurrencyType
  hasSanTokensDiscount: boolean
  source: string
}) =>
  track('payment_form_submitted', {
    currency,
    // method,
    source,
    amount,
    promocode,
    plan,
    plan_id: planId,
    billing,
    san_tokens_discount: hasSanTokensDiscount,
    source_url: window.location.href,
    source_search_params: window.location.search,
  })

export const trackPaymentSuccess = (source, method?: string) =>
  track('payment_success', {
    method,
    source,
    source_url: window.location.href,
    source_search_params: window.location.search,
  })

export const trackPaymentFail = (source, method?: string) =>
  track('payment_fail', {
    method,
    source,
    source_url: window.location.href,
    source_search_params: window.location.search,
  })

export const trackPaymentFormPlanSelect = ({
  amount,
  plan,
  planId,
  billing,
  currency = CurrencyType.USD,
}: {
  amount: number
  plan: string
  planId: number
  billing: SAN.PlanInterval
  currency?: CurrencyType
}) =>
  track('payment_form_plan_select', {
    currency,
    amount,
    plan,
    plan_id: planId,
    billing,
    source_url: window.location.href,
    source_search_params: window.location.search,
  })
