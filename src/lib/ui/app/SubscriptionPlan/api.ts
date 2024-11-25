import { ApiQuery } from '$lib/api/index.js'

import { BUSINESS_PLANS, CONSUMER_PLANS, Product, SubscriptionPlan } from './plans.js'

export type TProductsWithPlans = readonly {
  id: string
  plans: {
    id: string
    name: string
    interval: 'month' | 'year'
    amount: number
    isDeprecated: boolean
    product: { id: string }
  }[]
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

  const planBillingGroup = plans.reduce<
    Record<string, { month: TProductPlan; year?: TProductPlan }>
  >((acc, plan) => ({ ...acc, [plan.name]: { ...acc[plan.name], [plan.interval]: plan } }), {})

  return {
    plans,
    planBillingGroup,
    billingGroupPlans: Object.values(planBillingGroup),
  }
}

export type TProductPlans = ReturnType<typeof getProductPlans>

export const getSanbaseConsumerPlans = (productsWithPlans: TProductsWithPlans) =>
  getProductPlans(productsWithPlans, Product.Sanbase.id, CONSUMER_PLANS)

export const getApiBusinessPlans = (productsWithPlans: TProductsWithPlans) =>
  getProductPlans(productsWithPlans, Product.SanAPI.id, BUSINESS_PLANS)
