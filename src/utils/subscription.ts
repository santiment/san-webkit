import { ONE_DAY_IN_MS } from './dates'

export enum Product {
  SANAPI = 'SanAPI',
  SANBASE = 'Sanbase',
}
export enum ProductId {
  SANAPI = 1,
  SANBASE = 2,
}

export const ProductNameById = {
  [ProductId.SANAPI]: Product.SANAPI,
  [ProductId.SANBASE]: Product.SANBASE,
} as const

export enum Status {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
}

export const checkIsActiveSubscription = ({ status }: SAN.Subscription): boolean =>
  status === Status.ACTIVE || status === Status.TRIALING

export const calculateTrialDaysLeft = (trialEnd: string): number =>
  Math.ceil((+new Date(trialEnd) - Date.now()) / ONE_DAY_IN_MS)

export const checkIsSanbaseSubscription = ({ plan }: SAN.Subscription) =>
  plan.product.id === ProductId.SANBASE

export function getSanbaseSubscription(subscriptions: SAN.Subscription[]) {
  return subscriptions.find(
    (subscription) =>
      checkIsActiveSubscription(subscription) && checkIsSanbaseSubscription(subscription),
  )
}

export function getTrialDaysLeft(subscription: SAN.Subscription): string | undefined {
  let trialEnd = subscription.trialEnd
  if (!trialEnd) return

  const daysLeft = calculateTrialDaysLeft(trialEnd)
  if (daysLeft < 1) return

  return daysLeft === 1 ? 'last day' : `${daysLeft} days left`
}
