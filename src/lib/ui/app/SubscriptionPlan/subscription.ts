import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'

import { calculateDaysTo } from '$lib/utils/dates/index.js'
import {
  checkIsCustomPlan,
  convertSubscriptionPlan,
  SubscriptionPlan,
} from '$ui/app/SubscriptionPlan/plans.js'
import {
  checkIsBusinessPlan,
  checkIsSanApiProduct,
  checkIsSanbaseProduct,
  getPlanName,
  type TLooseProduct,
} from '$ui/app/SubscriptionPlan/utils.js'

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

const checkActiveStatus = (status: TSubscription['status']): boolean =>
  status === Status.ACTIVE || status === Status.TRIALING || status === Status.INCOMPLETE

export type TPublicSubscription = {
  productName: string
  planName: string
}

type TSubscriptionLike = TSubscription | TPublicSubscription

const checkIsPublicSubscription = (
  subscription: TSubscriptionLike,
): subscription is TPublicSubscription => 'productName' in subscription

function checkIsActiveSubscription(subscription: TSubscriptionLike) {
  if (checkIsPublicSubscription(subscription)) return true

  return checkActiveStatus(subscription.status)
}

function getSubscriptionProduct(subscription: TSubscriptionLike): TLooseProduct {
  if (checkIsPublicSubscription(subscription)) {
    return { name: subscription.productName }
  }

  return subscription.plan.product
}

function getSubscriptionPlanName(subscription: TSubscriptionLike) {
  if (checkIsPublicSubscription(subscription)) return subscription.planName

  return subscription.plan.name
}

function getSubscription<GSub extends TSubscriptionLike>(
  subscriptions: null | GSub[],
  productChecker: (product: TLooseProduct) => boolean,
) {
  try {
    return (
      subscriptions?.find(
        (subscription) =>
          checkIsActiveSubscription(subscription) &&
          productChecker(getSubscriptionProduct(subscription)),
      ) ?? null
    )
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getSanbaseSubscription = <GSub extends TSubscriptionLike>(
  subscriptions: null | GSub[],
) => getSubscription(subscriptions, checkIsSanbaseProduct)

export const getApiSubscription = <GSub extends TSubscriptionLike>(subscriptions: null | GSub[]) =>
  getSubscription(subscriptions, checkIsSanApiProduct)

export function getPrimarySubscription<GSub extends TSubscriptionLike>(
  subscriptions: null | GSub[],
) {
  const apiSubscription = getApiSubscription(subscriptions)

  if (apiSubscription && checkIsBusinessPlan(getSubscriptionPlanName(apiSubscription))) {
    return apiSubscription
  }

  return getSanbaseSubscription(subscriptions)
}

export function extractPlanFromSubscriptions<GSub extends TSubscriptionLike>(
  subscriptions: GSub[] | null,
) {
  const DEFAULT_PLAN = SubscriptionPlan.FREE.key
  const primeSub = getPrimarySubscription(subscriptions)
  if (!primeSub) return DEFAULT_PLAN

  const planName = 'plan' in primeSub ? primeSub.plan.name : primeSub.planName

  return convertSubscriptionPlan(planName) ?? DEFAULT_PLAN
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
    const trialDaysLeft = trialEnd ? calculateDaysTo(trialEnd) : null

    const isCustom = checkIsCustomPlan(plan.name)
    const isBusinessMax = isBusiness && plan.name === SubscriptionPlan.BUSINESS_MAX.key
    const isBusinessPro = isBusinessMax || plan.name === SubscriptionPlan.BUSINESS_PRO.key
    const isMax = isBusiness || plan.name === SubscriptionPlan.MAX.key
    const isProPlus = isBusiness || plan.name === SubscriptionPlan.PRO_PLUS.key
    const isPro = isProPlus || isMax || plan.name === SubscriptionPlan.PRO.key
    const isFree = !isPro && !isMax && !isBusinessPro && !isBusinessMax && !isCustom

    return {
      plan,
      planName: getPlanName(plan.name),

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
