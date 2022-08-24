import { Billing, Plan } from '@/utils/plans'

export const PRO_SUGGESTION = {
  label: 'Suggested for you',
  badge: 'Popular',
  badgeIcon: { id: 'star-filled', w: 16 },
  green: true,
}

export const PRO_PLUS_SUGGESTION = {
  label: 'Next level',
  badge: 'Advanced',
  badgeIcon: { id: 'rocket-filled', w: 17 },
  orange: true,
}

export function getSuggestions(
  userPlan: null | SAN.Plan,
  annualDiscount: null | SAN.AnnualDiscount,
) {
  const suggestions = [] as any

  if (annualDiscount?.discount) {
    const suggestion = {
      discount: annualDiscount.discount.percentOff,
      billing: Billing.YEAR,
    } as any

    suggestions.push({ ...suggestion, [Plan.PRO]: PRO_SUGGESTION })

    if (userPlan?.name === Plan.PRO) {
      suggestions.push({ ...suggestion, [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION })
    }

    return suggestions
  }

  if (userPlan?.name === Plan.PRO_PLUS) {
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
    [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION,
    isUpgrade: userPlan?.name === Plan.PRO,
  })

  return suggestions
}
