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

export const nonDeprecatedFilter = ({ isDeprecated }: { isDeprecated: boolean }) => !isDeprecated
export const keepNonDeprecatedPlans = (plans: SAN.Plan[]) => plans.filter(nonDeprecatedFilter)

export const checkIsSanbaseProduct = (product: Pick<SAN.Product, 'id'>) =>
  +product.id === ProductId.SANBASE

export const checkIsSanApiProduct = (product: Pick<SAN.Product, 'id'>) =>
  +product.id === ProductId.SANAPI

export enum Plan {
  FREE = 'FREE',
  PRO = 'PRO',
  MAX = 'MAX',

  BUSINESS_PRO = 'BUSINESS_PRO',
  BUSINESS_MAX = 'BUSINESS_MAX',
  CUSTOM = 'CUSTOM',
}

export const INDIVIDUAL_PLANS = [Plan.FREE, Plan.PRO, Plan.MAX] as const
export const BUSINESS_PLANS = [Plan.BUSINESS_PRO, Plan.BUSINESS_MAX, Plan.CUSTOM] as const

export const individualPlanMap = arrToMap(INDIVIDUAL_PLANS)
export const businessPlansMap = arrToMap(BUSINESS_PLANS)

function arrToMap<T extends string | number | symbol>(arr: readonly T[]) {
  return arr.reduce(
    (prev, plan) => ({ ...prev, [plan]: true }),
    {} as Record<(typeof arr)[number], true>,
  )
}

export const PlanName = {
  [Plan.FREE]: 'FREE',
  [Plan.PRO]: 'Sanbase Pro',
  [Plan.MAX]: 'Sanbase Max',

  [Plan.BUSINESS_PRO]: 'Business Pro',
  [Plan.BUSINESS_MAX]: 'Business Max',
  [Plan.CUSTOM]: 'Enterprise',
} as const

export enum Billing {
  MONTH = 'month',
  YEAR = 'year',
}

export const isIndividualPlan = ({ name }: SAN.Plan) => !!individualPlanMap[name]
export const isBusinessPlan = ({ name }: SAN.Plan) => !!businessPlansMap[name]

export const isPlanWithPrice = ({ amount }: SAN.Plan) => amount > 0

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
export const formatPrice = (plan: Pick<SAN.Plan, 'amount'>) => priceFormatter(getPrice(plan.amount))
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
