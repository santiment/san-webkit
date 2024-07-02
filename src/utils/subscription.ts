import type { CustomerData } from '@/stores/user'

import { ONE_DAY_IN_MS } from './dates'
import {
  getPlanDisplayName,
  checkIsSanApiProduct,
  checkIsSanbaseProduct,
  checkIsYearlyPlan,
} from './plans'

export enum Status {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
  INCOMPLETE = 'INCOMPLETE',
}

export const checkIsTrialSubscription = ({ status } = {} as Pick<SAN.Subscription, 'status'>) =>
  status === Status.TRIALING

export const checkIsIncompleteSubscription = (
  { status } = {} as Pick<SAN.Subscription, 'status'>,
) => status === Status.INCOMPLETE

export const checkIsActiveSubscription = ({ status }: SAN.Subscription): boolean =>
  status === Status.ACTIVE || status === Status.TRIALING || status === Status.INCOMPLETE

export const calculateTrialDaysLeft = (trialEnd: string): number =>
  Math.ceil((+new Date(trialEnd) - Date.now()) / ONE_DAY_IN_MS)

export function getSanbaseSubscription(subscriptions: SAN.Subscription[]) {
  return subscriptions.find(
    (subscription) =>
      checkIsActiveSubscription(subscription) && checkIsSanbaseProduct(subscription.plan.product),
  )
}

export function getApiSubscription(subscriptions: SAN.Subscription[]) {
  return subscriptions.find(
    (subscription) =>
      checkIsActiveSubscription(subscription) && checkIsSanApiProduct(subscription.plan.product),
  )
}

export function getTrialDaysLeft(subscription: SAN.Subscription): string | undefined {
  let trialEnd = subscription.trialEnd
  if (!trialEnd) return

  const daysLeft = calculateTrialDaysLeft(trialEnd)
  if (daysLeft < 1) return

  return daysLeft === 1 ? 'last day' : `${daysLeft} days left`
}

export function getUserSubscriptionInfo(
  customerData: Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>,
  subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd' | 'status'>,
) {
  const { isEligibleForTrial, annualDiscount } = customerData
  const annualDiscountPercent = annualDiscount?.isEligible && annualDiscount.discount?.percentOff
  const discountExpireAt = annualDiscount?.isEligible && annualDiscount.discount?.expireAt
  const userPlanName = getPlanDisplayName(subscription.plan)
  const trialDaysLeft = subscription?.trialEnd ? calculateTrialDaysLeft(subscription.trialEnd) : 0

  return {
    isEligibleForTrial,
    isIncomplete: subscription && checkIsIncompleteSubscription(subscription),
    annualDiscount,
    annualDiscountPercent,
    annualDiscountDaysLeft: discountExpireAt ? calculateTrialDaysLeft(discountExpireAt) : 0,
    userPlanName,
    trialDaysLeft,
  }
}

export function normalizeAnnualDiscount(annualDiscount: undefined | null | SAN.AnnualDiscount) {
  const { isEligible = false, discount } = annualDiscount || {}
  const expireAt = discount?.expireAt
  const discountExpireAt = isEligible && expireAt

  return {
    isEligible,
    expireAt,
    percent: isEligible && discount?.percentOff,
    daysLeft: discountExpireAt ? calculateTrialDaysLeft(discountExpireAt) : 0,
  }
}

export function getNextPaymentDate(plan: SAN.Plan) {
  const target = checkIsYearlyPlan(plan) ? 'FullYear' : 'Month'

  const date = new Date()
  date['set' + target](date['get' + target]() + 1)

  return date
}
