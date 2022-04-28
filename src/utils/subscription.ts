import { ONE_DAY_IN_MS } from './dates'
import { checkIsSanbaseProduct } from './plans'

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
