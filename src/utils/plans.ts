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

const nonDeprecatedFilter = ({ isDeprecated }: { isDeprecated: boolean }) => !isDeprecated
export const keepNonDeprecatedPlans = (plans: SAN.Plan[]) => plans.filter(nonDeprecatedFilter)

export const checkIsSanbaseProduct = (product: Pick<SAN.Product, 'id'>) =>
  +product.id === ProductId.SANBASE

export enum Plan {
  PRO = 'PRO',
  PRO_PLUS = 'PRO_PLUS',
}

export const PlanName = {
  [Plan.PRO]: 'Pro',
  [Plan.PRO_PLUS]: 'Pro+',
} as const

export const checkIsYearlyPlan = ({ interval }: Pick<SAN.Plan, 'interval'>) => interval === 'year'
