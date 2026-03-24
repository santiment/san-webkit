import type { TSubscriptionPlan } from './types.js'

import {
  BUSINESS_PLANS,
  checkIsTrialEligiblePlan,
  getSubscriptionPlanKey,
  Product,
  SubscriptionPlan,
  SubscriptionPlanDetails,
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

export function getFormattedBillingPlan(plan: TSubscriptionPlan) {
  const { name, amount, price } = getFormattedPlan(plan)
  return {
    name,
    billing: plan.interval,
    amount: amount.month,
    price: price.month,
  }
}

export function getFormattedPlan(
  monthlyPlan: TSubscriptionPlan,
  annualPlan?: null | TSubscriptionPlan,
) {
  const key = getSubscriptionPlanKey(monthlyPlan.name)
  const name = getPlanName(key)
  const details = SubscriptionPlanDetails[key]

  return {
    isFree: key === SubscriptionPlan.FREE.key,
    isCustom: key === SubscriptionPlan.CUSTOM.key,
    isBusiness: BUSINESS_PLANS.has(key),

    isTrialSupported: checkIsTrialEligiblePlan(key),

    name,
    details,

    amount: {
      month: monthlyPlan.amount,
      year: annualPlan?.amount,
    },

    price: {
      month: Math.ceil(monthlyPlan.amount / 100),
      year: annualPlan ? Math.ceil(annualPlan.amount / 100) : undefined,

      savePercentWithAnnual: annualPlan
        ? Math.round(100 - (100 * annualPlan.amount) / (monthlyPlan.amount * 12))
        : 0,
    },
  }
}

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
