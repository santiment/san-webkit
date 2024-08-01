import { Fetcher } from '$lib/api/index.js'
import { CONSUMER_PLANS, Product } from './plans.js'

export type TProductsWithPlans = readonly {
  id: string
  plans: {
    id: string
    name: string
    interval: 'month' | 'year'
    amount: number
    isDeprecated: boolean
  }[]
}[]

export const queryProductsWithPlans = Fetcher(
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
  (gql: { productsWithPlans: TProductsWithPlans }) => gql.productsWithPlans,
  { cacheTime: undefined },
)

type TProductPlan = TProductsWithPlans[number]['plans'][number]
export type TPlanBillingGroup = Record<string, { month: TProductPlan; year?: TProductPlan }>

export function getSanbaseConsumerPlans(productsWithPlans: TProductsWithPlans): null | {
  plans: TProductPlan[]
  planBillingGroup: TPlanBillingGroup
  billingGroupPlans: TPlanBillingGroup[string][]
} {
  const sanbasePlans = productsWithPlans.find((product) => product.id === Product.Sanbase.id)
  if (!sanbasePlans) return null

  const plans = sanbasePlans.plans
    .filter((plan) => CONSUMER_PLANS.has(plan.name) && !plan.isDeprecated)
    .sort((a, b) => +a.amount - +b.amount)

  const planBillingGroup = plans.reduce<
    Record<string, { month: TProductPlan; year?: TProductPlan }>
  >((acc, plan) => ({ ...acc, [plan.name]: { ...acc[plan.name], [plan.interval]: plan } }), {})

  return {
    plans,
    planBillingGroup,
    billingGroupPlans: Object.values(planBillingGroup),
  }
}
