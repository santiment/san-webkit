import { keyify } from './object.js'

export const Product = keyify(
  {
    SanAPI: { id: 1 },
    Sanbase: { id: 2 },
  },
  'name',
)

export const checkIsSanbaseProduct = (product: Pick<TProduct, 'id'>) =>
  +product.id === Product.Sanbase.id

export const checkIsSanApiProduct = (product: Pick<TProduct, 'id'>) =>
  +product.id === Product.SanAPI.id

export type TPlan = {
  name: string
  product: { id: number }
}

export const Plan = keyify({
  PRO_PLUS: { name: 'Sanbase Pro+' }, // Deprecated

  PRO: { name: 'Sanbase Pro' },
  MAX: { name: 'Sanbase Max' },

  BUSINESS_PRO: { name: 'Business Pro' },
  BUSINESS_MAX: { name: 'Business Max' },
  CUSTOM: { name: 'Enterprise' },
})

export const BUSINESS_PLANS = new Set<string>([
  Plan.BUSINESS_MAX.key,
  Plan.BUSINESS_PRO.key,
  Plan.CUSTOM.key,
])

export const checkIsBusinessPlan = (plan: null | Pick<TPlan, 'name'>) =>
  plan ? BUSINESS_PLANS.has(plan.name) : false
