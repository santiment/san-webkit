import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'

import { calculateDaysTo } from '$lib/utils/dates/index.js'
import {
  checkIsBusinessPlan,
  checkIsSanApiProduct,
  checkIsSanbaseProduct,
  getPlanDisplayName,
  isPlanEligibleFor,
  Plan,
} from '$lib/utils/plans/index.js'

export enum Status {
  ACTIVE = 'ACTIVE',
  TRIALING = 'TRIALING',
  INCOMPLETE = 'INCOMPLETE',
}

export type TSubscription = {
  id: string
  status: Status
  plan: TSubscriptionPlan
  trialEnd: null | string
  cancelAtPeriodEnd: null | string
  currentPeriodEnd: string
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
  productChecker: (product: { id: string }) => boolean,
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

  if (apiSubscription && checkIsBusinessPlan(apiSubscription.plan.name)) {
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
    isCustom: false,

    isBusinessSubscription: false,
    isConsumerSubscription: false,

    isCanceledSubscription: false,
    isIncompleteSubscription: false,
    isTrialSubscription: false,
    trialDaysLeft: null,
  }

  if (!subscription) {
    return defaultValue
  }

  try {
    const {
      trialEnd,
      plan,
      status,
      cancelAtPeriodEnd,
      currentPeriodEnd = Date.now(),
    } = subscription

    const isBusiness = checkIsBusinessPlan(plan.name)
    const planName = plan.name
    const trialDaysLeft = trialEnd ? calculateDaysTo(trialEnd) : null

    const isCustom = isPlanEligibleFor(planName, Plan.CUSTOM)
    const isBusinessMax = isPlanEligibleFor(planName, Plan.BUSINESS_MAX)
    const isBusinessPro = isPlanEligibleFor(planName, Plan.BUSINESS_PRO)
    const isMax = isPlanEligibleFor(planName, Plan.MAX)
    const isProPlus = isPlanEligibleFor(planName, Plan.PRO_PLUS)
    const isPro = isPlanEligibleFor(planName, Plan.PRO)
    const isFree = !isPro

    return {
      plan,
      planName: getPlanDisplayName(plan.name),

      isBusinessMax,
      isBusinessPro,
      isMax,
      isProPlus,
      isPro,
      isFree,
      isCustom,

      isBusinessSubscription: isBusiness,
      isConsumerSubscription: isFree ? false : !isBusiness,

      isCanceledSubscription: !!cancelAtPeriodEnd,
      isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
      isTrialSubscription: !!trialDaysLeft && trialDaysLeft > 0 && status === Status.TRIALING,
      trialDaysLeft,

      currentPeriodEnd,
    }
  } catch (e) {
    console.error(e)
    return defaultValue
  }
}
