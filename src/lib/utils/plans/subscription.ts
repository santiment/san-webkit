import {
  checkIsBusinessPlan,
  checkIsConsumerPlan,
  getPlanData,
  Plan,
  planFromRaw,
  type TPlan,
} from './plans.js'
import { checkIsSanApiProduct, checkIsSanbaseProduct } from './products.js'

type Subscription = { planName: string; productName?: string; productId?: string }

function getCheckerForProduct({ productId, productName }: Subscription) {
  if (checkIsSanApiProduct({ id: productId, name: productName })) {
    return checkIsBusinessPlan
  }

  if (checkIsSanbaseProduct({ id: productId, name: productName })) {
    return checkIsConsumerPlan
  }
}

function getPlanSubscription(sub: Subscription) {
  const checker = getCheckerForProduct(sub)
  const plan = planFromRaw(sub.planName)

  if (!checker || !plan) return null

  return checker(plan) ? plan : null
}

export function extractPlanFromSubscriptions(subscriptions: Subscription[]): TPlan {
  const plans = subscriptions.map((sub) => getPlanSubscription(sub)).filter((plan) => !!plan)

  if (plans.length === 0) return Plan.FREE

  return plans.reduce((max, plan) =>
    getPlanData(plan).level > getPlanData(max).level ? plan : max,
  )
}
