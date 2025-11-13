import type { TProduct, TSubscriptionPlan } from './types.js'

import {
  BUSINESS_PLANS,
  checkIsTrialEligiblePlan,
  Product,
  SubscriptionPlan,
  SubscriptionPlanDetails,
} from './plans.js'

export const checkIsCustomPlan = (planName: string) =>
  planName.startsWith(SubscriptionPlan.CUSTOM.key)

export const checkIsSanbaseProduct = (product: Pick<TProduct, 'id'>) =>
  product.id === Product.Sanbase.id

export const checkIsSanApiProduct = (product: Pick<TProduct, 'id'>) =>
  product.id === Product.SanAPI.id

export const checkIsBusinessPlan = (planName: string | undefined) => {
  if (!planName) return false

  const plan = checkIsCustomPlan(planName) ? SubscriptionPlan.CUSTOM.key : planName
  return BUSINESS_PLANS.has(plan)
}

type TLooseRecord<T extends Record<string, unknown>> = T & Record<string, undefined | T[keyof T]>
export const getPlanName = (planName: string): string => {
  const subs: TLooseRecord<typeof SubscriptionPlan> = SubscriptionPlan
  const plan = checkIsCustomPlan(planName) ? SubscriptionPlan.CUSTOM.key : planName

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
  const key = monthlyPlan.name
  const name = getPlanName(key)
  const details = SubscriptionPlanDetails[key]

  return {
    isFree: monthlyPlan.name === SubscriptionPlan.FREE.key,
    isCustom: monthlyPlan.name === SubscriptionPlan.CUSTOM.key,
    isBusiness: BUSINESS_PLANS.has(monthlyPlan.name),

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
