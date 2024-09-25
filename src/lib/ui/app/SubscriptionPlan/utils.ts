import type { TProduct, TSubscriptionPlan } from './types.js'

import { BUSINESS_PLANS, Product, SubscriptionPlan, SubscriptionPlanDetails } from './plans.js'

export const checkIsSanbaseProduct = (product: Pick<TProduct, 'id'>) =>
  product.id === Product.Sanbase.id

export const checkIsSanApiProduct = (product: Pick<TProduct, 'id'>) =>
  product.id === Product.SanAPI.id

export const checkIsBusinessPlan = (plan: null | Pick<TSubscriptionPlan, 'name'>) =>
  plan ? BUSINESS_PLANS.has(plan.name) : false

type TLooseRecord<T extends Record<string, unknown>> = T & Record<string, undefined | T[keyof T]>
export const getPlanName = (plan: Pick<TSubscriptionPlan, 'name'>): string =>
  (SubscriptionPlan as TLooseRecord<typeof SubscriptionPlan>)[plan.name]?.name || plan.name

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
  const name = getPlanName(monthlyPlan)
  const details = SubscriptionPlanDetails[monthlyPlan.name]

  return {
    isFree: monthlyPlan.name === SubscriptionPlan.FREE.key,
    isCustom: monthlyPlan.name === SubscriptionPlan.CUSTOM.key,
    isBusiness: BUSINESS_PLANS.has(monthlyPlan.name),

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
    ? userPlan.name === targetPlan?.name && userPlan.interval === targetPlan?.interval
    : targetPlan?.name === SubscriptionPlan.FREE.key

export const checkIsAlternativeBillingPlan = (
  userPlan: null | TSubscriptionPlan,
  targetPlan: TSubscriptionPlan,
) =>
  userPlan ? userPlan.name === targetPlan.name && userPlan.interval !== targetPlan.interval : false
