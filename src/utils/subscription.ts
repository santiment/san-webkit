import type { CustomerData } from '@/stores/user'
import { getDateFormats, ONE_DAY_IN_MS } from './dates'
import { PlanName, checkIsSanbaseProduct, checkIsYearlyPlan } from './plans'

export enum Status {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
}

export const checkIsTrialSubscription = ({ status } = {} as SAN.Subscription) =>
  status === Status.TRIALING

export const checkIsActiveSubscription = ({ status }: SAN.Subscription): boolean =>
  status === Status.ACTIVE || status === Status.TRIALING

export const calculateTrialDaysLeft = (trialEnd: string): number =>
  Math.ceil((+new Date(trialEnd) - Date.now()) / ONE_DAY_IN_MS)

export function getSanbaseSubscription(subscriptions: SAN.Subscription[]) {
  return subscriptions.find(
    (subscription) =>
      checkIsActiveSubscription(subscription) && checkIsSanbaseProduct(subscription.plan.product),
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
  subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>,
) {
  const { isEligibleForTrial, annualDiscount } = customerData
  const annualDiscountPercent = annualDiscount?.isEligible && annualDiscount.discount?.percentOff
  const discountExpireAt = annualDiscount?.isEligible && annualDiscount.discount?.expireAt
  const subscriptionPlan = subscription?.plan.name
  const userPlanName = PlanName[subscriptionPlan] || subscriptionPlan
  const trialDaysLeft = subscription?.trialEnd ? calculateTrialDaysLeft(subscription.trialEnd) : 0

  return {
    isEligibleForTrial,
    annualDiscount,
    annualDiscountPercent,
    annualDiscountDaysLeft: discountExpireAt ? calculateTrialDaysLeft(discountExpireAt) : 0,
    userPlanName,
    trialDaysLeft,
  }
}

export function getNextPaymentDate(plan: SAN.Plan) {
  const target = checkIsYearlyPlan(plan) ? 'FullYear' : 'Month'

  const date = new Date()
  date['set' + target](date['get' + target]() + 1)

  return date
}
