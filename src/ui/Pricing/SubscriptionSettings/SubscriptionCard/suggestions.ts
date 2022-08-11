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

export function getSuggestions(userPlan: null | SAN.Plan, annualDiscount: SAN.AnnualDiscount) {
  if (annualDiscount?.discount) {
    return {
      discount: annualDiscount.discount.percentOff,
      billing: Billing.YEAR,
    }
  }

  if (userPlan?.name === Plan.PRO_PLUS) {
    return {
      label: 'You have full access',
      fullAccess: true,
    }
  }

  const suggestion = {
    billing: Billing.MONTH,
    [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION,
  }

  if (userPlan?.name !== Plan.PRO) {
    suggestion[Plan.PRO] = PRO_SUGGESTION
  }

  return suggestion
}
