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

export enum Billing {
  MONTH = 'month',
  YEAR = 'year',
}

export const checkIsYearlyPlan = ({ interval }: Pick<SAN.Plan, 'interval'>) =>
  interval === Billing.YEAR

export const getPrice = (amount: number) => amount / 100
export function getPlanMonthPrice({ amount, interval }: SAN.Plan): number {
  const price = getPrice(amount)
  return interval === Billing.MONTH ? price : price / 12
}

export const priceFormatter = (price: number) => '$' + Math.ceil(price)
export const formatPrice = (plan: SAN.Plan) => priceFormatter(getPrice(plan.amount))
export const formatMonthlyPrice = (plan: SAN.Plan) => priceFormatter(getPlanMonthPrice(plan))

export const onlyProLikePlans = ({ name }: SAN.Plan) => name.includes(Plan.PRO)
