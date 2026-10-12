import type { TSubscriptionPlan } from './types.js'

import { ApiQuery } from '$lib/api/index.js'

import { BUSINESS_PLANS, CONSUMER_PLANS, Product, SubscriptionPlan } from './plans.js'

export type TProductsWithPlans = readonly {
  id: string
  plans: (TSubscriptionPlan & {
    isDeprecated: boolean
    apiCallLimits: null | { month: number }
  })[]
}[]

/**
 * Fetching plans for all products.
 * Caching result indefinitely.
 */
export const queryProductsWithPlans = ApiQuery(
  () => `{
  productsWithPlans {
    id
    plans {
      id
      name
      interval
      amount
      isDeprecated
      apiCallLimits {
        month
      }
    }
  }
}`,
  (gql: { productsWithPlans: TProductsWithPlans }) => {
    const products = gql.productsWithPlans
    products.forEach(({ id, plans }) => plans.forEach((plan) => (plan.product = { id }))) // HACK: remove after backend id:null fix
    return products
  },
  { cacheTime: undefined },
)

type TProductPlan = TProductsWithPlans[number]['plans'][number]
export type TPlanBillingGroup = Record<string, { month: TProductPlan; year?: TProductPlan }>

export function getProductPlans(
  productsWithPlans: TProductsWithPlans,
  productId: string,
  listOfPlans: Set<string>,
): null | {
  plans: TProductPlan[]
  planBillingGroup: TPlanBillingGroup
  billingGroupPlans: TPlanBillingGroup[string][]
  customPlan?: TPlanBillingGroup[string]
} {
  const productPlans = productsWithPlans.find((product) => product.id === productId)
  if (!productPlans) return null

  const plans = productPlans.plans
    .filter((plan) => listOfPlans.has(plan.name) && !plan.isDeprecated)
    .sort((a, b) =>
      a.name === SubscriptionPlan.CUSTOM.key
        ? 1
        : b.name === SubscriptionPlan.CUSTOM.key
          ? -1
          : +a.amount - +b.amount,
    )

  const planBillingGroup = plans.reduce<TPlanBillingGroup>(
    (acc, plan) => ({ ...acc, [plan.name]: { ...acc[plan.name], [plan.interval]: plan } }),
    {},
  )

  const { [SubscriptionPlan.CUSTOM.key]: customPlan, ...billingGroups } = planBillingGroup

  return {
    plans,
    planBillingGroup,
    billingGroupPlans: Object.values(billingGroups),
    customPlan,
  }
}

export type TProductPlans = ReturnType<typeof getProductPlans>

export const getSanbaseConsumerPlans = (productsWithPlans: TProductsWithPlans) =>
  getProductPlans(productsWithPlans, Product.Sanbase.id, CONSUMER_PLANS)

export const getApiBusinessPlans = (productsWithPlans: TProductsWithPlans) =>
  getProductPlans(productsWithPlans, Product.SanAPI.id, BUSINESS_PLANS)
