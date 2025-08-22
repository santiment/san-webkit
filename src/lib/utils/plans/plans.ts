import { createEnumMap, exactObjectKeys } from '../object.js'

type PlanData = {
  name: string
  level: number
}

const CONSUMER_PLAN_MAP = {
  FREE: { name: 'Free', level: 0 },
  PRO: { name: 'Sanbase Pro', level: 10 },

  /** @deprecated */
  PRO_PLUS: {
    name: 'Sanbase Pro+',
    level: 15,
  },

  MAX: { name: 'Sanbase Max', level: 20 },
} as const satisfies Record<string, PlanData>

const BUSINESS_PLAN_MAP = {
  BUSINESS_PRO: { name: 'Business Pro', level: 30 },
  BUSINESS_MAX: { name: 'Business Max', level: 40 },
  CUSTOM: { name: 'Enterprise', level: 50 },
} as const satisfies Record<string, PlanData>

const PLAN_MAP = { ...CONSUMER_PLAN_MAP, ...BUSINESS_PLAN_MAP }

const BUSINESS_PLANS = new Set(exactObjectKeys(BUSINESS_PLAN_MAP))
const CONSUMER_PLANS = new Set(exactObjectKeys(CONSUMER_PLAN_MAP))

const PLANS = new Set([...CONSUMER_PLANS, ...BUSINESS_PLANS])

export const Plan = createEnumMap(Array.from(PLANS))

export type TBusinessPlan = keyof typeof BUSINESS_PLAN_MAP
export type TConsumerPlan = keyof typeof CONSUMER_PLAN_MAP
export type TPlan = keyof typeof PLAN_MAP

export function getPlanData<T extends TPlan>(plan: T) {
  return PLAN_MAP[plan]
}

const checkIsCustomPlan = (planName: string | undefined) =>
  planName?.startsWith(Plan.CUSTOM) ?? false

const checkIsPlan = (planName: string | undefined): planName is TPlan =>
  planName ? PLANS.has(planName as TPlan) : false

export function planFromRaw(planName: string | undefined): TPlan | null {
  if (checkIsCustomPlan(planName)) return Plan.CUSTOM
  if (checkIsPlan(planName)) return planName

  return null
}

export function checkIsBusinessPlan(planName: string | undefined) {
  const plan = planFromRaw(planName)
  return plan ? BUSINESS_PLANS.has(plan as TBusinessPlan) : false
}

export function checkIsConsumerPlan(planName: string | undefined) {
  const plan = planFromRaw(planName)

  return plan ? CONSUMER_PLANS.has(plan as TConsumerPlan) : false
}

export function isPlanEligibleFor(planName: string, target: TPlan) {
  const plan = planFromRaw(planName)
  if (!plan) return false

  return getPlanData(plan).level >= getPlanData(target).level
}

export const getPlanDisplayName = (planName: string) => {
  const plan = planFromRaw(planName)
  return plan ? getPlanData(plan).name : planName
}
