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
  FREE = 'FREE',
  PRO = 'PRO',
  PRO_PLUS = 'PRO_PLUS',
}

export const PlanName = {
  [Plan.FREE]: 'Free',
  [Plan.PRO]: 'Pro',
  [Plan.PRO_PLUS]: 'Pro+',
} as const

export enum Billing {
  MONTH = 'month',
  YEAR = 'year',
}

export const checkIsYearlyPlan = ({ interval }: Pick<SAN.Plan, 'interval'>) =>
  interval === Billing.YEAR

export const calcDiscount = (percentOff?: number) => (100 - (percentOff || 0)) / 100

export const getPrice = (amount: number, percentOff = 0) =>
  (amount / 100) * calcDiscount(percentOff)

export function getPlanMonthPrice(
  { amount, interval }: Pick<SAN.Plan, 'amount' | 'interval'>,
  percentOff = 0,
): number {
  const price = getPrice(amount, percentOff)
  return interval === Billing.MONTH ? price : price / 12
}

export const priceFormatter = (price: number) => '$' + Math.round(price)
export const formatPrice = (plan: SAN.Plan) => priceFormatter(getPrice(plan.amount))
export const formatMonthlyPrice = (plan: SAN.Plan, percentOff = 0) =>
  priceFormatter(getPlanMonthPrice(plan, percentOff))

export const onlyProLikePlans = ({ name }: SAN.Plan) => name.includes(Plan.PRO)
export const onlyProAndFreeLikePlans = ({ name }: SAN.Plan) =>
  name.includes(Plan.PRO) || name.includes(Plan.FREE)

export function getAlternativePlan(plan: SAN.Plan, plans: SAN.Plan[]) {
  return plans.find(({ name, interval }) => name === plan.name && interval !== plan.interval)
}

export function getSavedAmount(plan: SAN.Plan, altPlan: SAN.Plan, percentOff?: number) {
  const price = plan.amount * calcDiscount(percentOff)
  return priceFormatter(getPrice(altPlan.amount * 12 - price))
}
