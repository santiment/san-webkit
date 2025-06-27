import { checkIsBusinessPlan, checkIsConsumerPlan, getPlanData, Plan, type TPlan } from './plans.js'
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

  if (!checker) return null

  return checker(sub.planName) ? sub.planName : null
}

export function extractPlanFromSubscriptions(subscriptions: Subscription[]): TPlan {
  const plans = subscriptions.map((sub) => getPlanSubscription(sub)).filter((plan) => !!plan)

  if (plans.length === 0) return Plan.FREE

  return plans.reduce((max, plan) =>
    getPlanData(plan).level > getPlanData(max).level ? plan : max,
  )
}
