import type { TSubscriptionPlan } from './types.js'

import {
  Plan,
  checkIsBusinessPlan,
  getPlanDisplayName,
  planFromRaw,
} from '$lib/utils/plans/index.js'

import { SubscriptionPlanDetails } from './plans.js'

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
  const plan = planFromRaw(monthlyPlan.name)
  const name = getPlanDisplayName(monthlyPlan.name)
  const details = SubscriptionPlanDetails[monthlyPlan.name]

  return {
    plan,
    isFree: plan === Plan.FREE,
    isCustom: plan === Plan.CUSTOM,
    isBusiness: checkIsBusinessPlan(monthlyPlan.name),

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
      (userPlan.name === Plan.CUSTOM || userPlan.interval === targetPlan?.interval)
    : targetPlan?.name === Plan.FREE

export const checkIsAlternativeBillingPlan = (
  userPlan: null | TSubscriptionPlan,
  targetPlan: TSubscriptionPlan,
) =>
  userPlan ? userPlan.name === targetPlan.name && userPlan.interval !== targetPlan.interval : false
