import type { ComponentProps } from 'svelte'
import type Svg from '@/ui/Svg/svelte'

import {
  BUSINESS_PLANS,
  Billing,
  Plan,
  checkIsBusinessPlan,
  checkIsIndividualPlan,
  getIsCustomPlan,
} from '@/utils/plans'

export type Suggestion = {
  label: string
  badge: string
  badgeIcon: { id: ComponentProps<Svg>['id']; w: number }
  description: string
  green?: boolean
  orange?: boolean
  blue?: boolean
}

const PRO_SUGGESTION = {
  label: 'Suggested for you',
  badge: 'Popular',
  badgeIcon: { id: 'star-filled', w: 16 },
  description: 'Get access to advanced crypto metrics, market insights and more!',
  green: true,
} satisfies Suggestion

const MAX_SUGGESTION = {
  label: 'Next level',
  badge: 'Advanced',
  badgeIcon: { id: 'rocket-filled', w: 17 },
  description: 'Advanced plan with complete access to analytics, backtesting framework.',
  orange: true,
} satisfies Suggestion

const BUSINESS_PRO_SUGGESTION = {
  label: '💼 For Business',
  badge: 'Starter',
  badgeIcon: { id: 'star-filled', w: 16 },
  description: 'The starting point for your business with real-time API calls.',
  blue: true,
} satisfies Suggestion

const BUSINESS_MAX_SUGGESTION = {
  label: '💼 For Business',
  badge: 'Advanced',
  badgeIcon: { id: 'rocket-filled', w: 17 },
  description: 'Business plan for extensive research and strategy testing.',
  blue: true,
} satisfies Suggestion

const ENTERPRISE_SUGGESTION = {
  label: '💼 For Business',
  badge: 'Custom',
  badgeIcon: { id: 'fire-filled', w: 16 },
  description: 'Everything your business needs as a tailored solution.',
  blue: true,
} satisfies Suggestion

const BUSINESS_SUGGESTIONS = {
  [Plan.BUSINESS_PRO]: BUSINESS_PRO_SUGGESTION,
  [Plan.BUSINESS_MAX]: BUSINESS_MAX_SUGGESTION,
  [Plan.CUSTOM]: ENTERPRISE_SUGGESTION,
}

export type PlanSuggestion = {
  billing?: string
  discount?: number
  isUpgrade?: boolean
  fullAccess?: boolean
} & {
  [key in Plan]?: Suggestion
}

export type UserPlan = Exclude<SAN.Customer['subscription'], null | undefined>['plan']

export function getBusinessSuggestions(userPlan: UserPlan | null): PlanSuggestion[] {
  const suggestion = {
    billing: userPlan?.interval ?? Billing.MONTH,
  }

  const allBusinessSuggestions = Object.entries(BUSINESS_SUGGESTIONS).map(
    ([plan, planSuggestion]) => ({
      ...suggestion,
      [plan]: planSuggestion,
    }),
  )

  if (!userPlan || checkIsIndividualPlan(userPlan)) return allBusinessSuggestions

  if (userPlan.name === Plan.BUSINESS_PRO) {
    return allBusinessSuggestions.slice(1)
  }

  const planName = getIsCustomPlan(userPlan.name) ? Plan.CUSTOM : (userPlan.name as Plan)

  const planIndex = Array.from(BUSINESS_PLANS).indexOf(planName)
  if (planIndex === -1) return allBusinessSuggestions
  if (planIndex >= BUSINESS_PLANS.size - 1) return []

  return allBusinessSuggestions.slice(planIndex + 1)
}

export function getIndividualSuggestions(
  userPlan: null | UserPlan,
  annualDiscount: SAN.Customer['annualDiscount'],
): PlanSuggestion[] {
  const suggestions: PlanSuggestion[] = []

  if (userPlan && checkIsBusinessPlan(userPlan)) {
    return []
  }

  if (annualDiscount.isEligible) {
    const suggestion = {
      discount: annualDiscount.percent || 0,
      billing: Billing.YEAR,
    }

    suggestions.push({ ...suggestion, [Plan.PRO]: PRO_SUGGESTION })

    if (userPlan?.name === Plan.PRO) {
      suggestions.push({ ...suggestion, [Plan.MAX]: MAX_SUGGESTION })
    }

    return suggestions
  }

  if (userPlan?.name === Plan.PRO_PLUS || userPlan?.name === Plan.MAX) {
    return [{ fullAccess: true }]
  }

  const suggestion = {
    billing: userPlan?.interval || Billing.MONTH,
  } as any

  if (userPlan?.name !== Plan.PRO) {
    suggestions.push({
      ...suggestion,
      [Plan.PRO]: PRO_SUGGESTION,
    })
  }

  suggestions.push({
    ...suggestion,
    [Plan.MAX]: MAX_SUGGESTION,
    isUpgrade: userPlan?.name === Plan.PRO,
  })

  return suggestions
}
