import { calculateDaysTo } from '$lib/utils/dates.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'
import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'
import {
  checkIsBusinessPlan,
  checkIsSanApiProduct,
  checkIsSanbaseProduct,
} from '$ui/app/SubscriptionPlan/utils.js'

export enum Status {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
  INCOMPLETE = 'INCOMPLETE',
}

export type TSubscription = {
  status: Status
  plan: TSubscriptionPlan
  trialEnd: null | string
  cancelAtPeriodEnd: null | string
}

export const checkIsTrialSubscription = ({ status } = {} as Pick<TSubscription, 'status'>) =>
  status === Status.TRIALING

export const checkIsIncompleteSubscription = ({ status } = {} as Pick<TSubscription, 'status'>) =>
  status === Status.INCOMPLETE

export const checkIsActiveSubscription = (
  { status } = {} as Pick<TSubscription, 'status'>,
): boolean => status === Status.ACTIVE || status === Status.TRIALING || status === Status.INCOMPLETE

function getSubscription(
  subscriptions: null | TSubscription[],
  productChecker: (product: { id: number }) => boolean,
) {
  try {
    return (
      subscriptions?.find(
        (subscription) =>
          checkIsActiveSubscription(subscription) && productChecker(subscription.plan.product),
      ) ?? null
    )
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getSanbaseSubscription = (subscriptions: null | TSubscription[]) =>
  getSubscription(subscriptions, checkIsSanbaseProduct)

export const getApiSubscription = (subscriptions: null | TSubscription[]) =>
  getSubscription(subscriptions, checkIsSanApiProduct)

export function getPrimarySubscription(subscriptions: null | TSubscription[]) {
  const apiSubscription = getApiSubscription(subscriptions)

  if (apiSubscription && checkIsBusinessPlan(apiSubscription.plan)) {
    return apiSubscription
  }

  return getSanbaseSubscription(subscriptions)
}

export function getCustomerSubscriptionData(subscription: null | TSubscription) {
  const defaultValue = {
    planName: '',

    isPro: false,
    isProPlus: false,
    isMax: false,
    isBusinessPro: false,
    isBusinessMax: false,

    isCanceledSubscription: false,
    isIncompleteSubscription: false,
    isTrialSubscription: false,
    trialDaysLeft: 0,
  }

  if (!subscription) {
    return defaultValue
  }

  try {
    const { trialEnd, plan, status, cancelAtPeriodEnd } = subscription

    const isBusiness = checkIsBusinessPlan(plan)
    const planName = plan.name
    const trialDaysLeft = trialEnd ? calculateDaysTo(trialEnd) : 0

    const isBusinessMax = isBusiness && planName === SubscriptionPlan.BUSINESS_MAX.key
    const isBusinessPro = isBusinessMax || planName === SubscriptionPlan.BUSINESS_PRO.key
    const isProPlus = isBusiness || planName === SubscriptionPlan.PRO_PLUS.key
    const isMax = isBusiness || planName === SubscriptionPlan.MAX.key

    return {
      planName: SubscriptionPlan[planName as keyof typeof SubscriptionPlan]?.name || planName,

      isMax,
      isProPlus,
      isPro: isProPlus || isMax || planName === SubscriptionPlan.PRO.key,
      isBusinessMax,
      isBusinessPro,

      isCanceledSubscription: !!cancelAtPeriodEnd,
      isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
      isTrialSubscription: trialDaysLeft > 0 && status === Status.TRIALING,
      trialDaysLeft,
    }
  } catch (e) {
    console.error(e)
    return defaultValue
  }
}
