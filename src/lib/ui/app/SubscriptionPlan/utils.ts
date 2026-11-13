import type { TSubscriptionPlan } from './types.js'
import type { TPlanBillingGroup, TProductsWithPlans } from './api.js'

import {
  BUSINESS_PLANS,
  CONSUMER_PLANS,
  checkIsTrialEligiblePlan,
  convertSubscriptionPlan,
  getSubscriptionPlanKey,
  Product,
  SubscriptionPlan,
  SubscriptionPlanDetails,
  type TPlan,
} from './plans.js'

export type TLooseProduct = {
  id?: string
  name?: string
}

export const checkIsSanbaseProduct = (product: TLooseProduct) =>
  product.id === Product.Sanbase.id || product.name === Product.Sanbase.productName

export const checkIsSanApiProduct = (product: TLooseProduct) =>
  product.id === Product.SanAPI.id || product.name === Product.SanAPI.productName

export const checkIsBusinessPlan = (planName: string | undefined) => {
  if (!planName) return false

  return BUSINESS_PLANS.has(getSubscriptionPlanKey(planName))
}

type TLooseRecord<T extends Record<string, unknown>> = T & Record<string, undefined | T[keyof T]>
export const getPlanName = (planName: string): string => {
  const subs: TLooseRecord<typeof SubscriptionPlan> = SubscriptionPlan
  const plan = getSubscriptionPlanKey(planName)

  return subs[plan]?.name || planName
}

export const toPrice = (amount: number) => Math.ceil(amount / 100)

export function getFormattedBillingPlan(plan: TSubscriptionPlan) {
  return {
    name: getPlanName(plan.name),
    billing: plan.interval,
    amount: plan.amount,
    price: toPrice(plan.amount),
  }
}

type TPlanInterval = {
  interval: 'month' | 'year'
  plan: TSubscriptionPlan
  amount: number
  price: number
}

export function getFormattedPlan(billingGroup: TPlanBillingGroup[string]) {
  const { month, year } = billingGroup

  const intervals: TPlanInterval[] = []

  for (const plan of [month, year]) {
    if (!plan) continue

    intervals.push({
      plan,
      interval: plan.interval,
      amount: plan.amount,
      price: toPrice(plan.amount),
    })
  }

  const primary = intervals[0]

  const key = getSubscriptionPlanKey(primary.plan.name)
  const name = getPlanName(key)
  const details = SubscriptionPlanDetails[key]

  const annual = intervals.find(({ interval }) => interval === 'year')
  const monthly = intervals.find(({ interval }) => interval === 'month')

  return {
    key,

    isFree: key === SubscriptionPlan.FREE.key,
    isCustom: key === SubscriptionPlan.CUSTOM.key,
    isBusiness: BUSINESS_PLANS.has(key),

    isTrialSupported: checkIsTrialEligiblePlan(key),

    name,
    details,

    intervals,
    primary,

    savePercentWithAnnual:
      annual && monthly ? Math.round(100 - (100 * annual.amount) / (monthly.amount * 12)) : 0,
  }
}

export type TFormattedPlan = ReturnType<typeof getFormattedPlan>

export const getPlanInterval = (
  formattedPlan: undefined | null | TFormattedPlan,
  interval: 'month' | 'year',
) => formattedPlan?.intervals.find((item) => item.interval === interval)

export const checkIsCurrentPlan = (
  userPlan: null | TSubscriptionPlan,
  targetPlan?: Pick<TSubscriptionPlan, 'name' | 'interval'>,
) =>
  userPlan
    ? userPlan.name === targetPlan?.name &&
      (userPlan.name === SubscriptionPlan.CUSTOM.key || userPlan.interval === targetPlan?.interval)
    : targetPlan?.name === SubscriptionPlan.FREE.key

export const checkIsAlternativeBillingPlan = (
  userPlan: null | TSubscriptionPlan,
  targetPlan: TSubscriptionPlan,
) =>
  userPlan ? userPlan.name === targetPlan.name && userPlan.interval !== targetPlan.interval : false

export function getPlansApiLimitsMap(products: TProductsWithPlans) {
  const limits: Partial<Record<TPlan, number>> = {}

  products.forEach(({ id, plans }) => {
    const isSanbase = checkIsSanbaseProduct({ id })
    const isSanApi = checkIsSanApiProduct({ id })
    if (!isSanbase && !isSanApi) return

    plans.forEach(({ name, apiCallLimits }) => {
      const isBusinessBasicPlan = BUSINESS_PLANS.has(name)
      const isConsumerBasicPlan = CONSUMER_PLANS.has(name)
      if (!isConsumerBasicPlan && !isBusinessBasicPlan) return
      if (isBusinessBasicPlan !== isSanApi || isConsumerBasicPlan !== isSanbase) return

      const plan = convertSubscriptionPlan(name)
      if (!plan) return

      limits[plan] = apiCallLimits?.month
    })
  })

  return limits
}
