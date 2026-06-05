import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'

import { createCtx } from '$lib/utils/index.js'

export const useSubscriptionPlanButtonCtx = createCtx(
  'useSubscriptionPlanButtonCtx',
  (handlers?: {
    onPlanButtonClick?: (plan: TSubscriptionPlan, e: { currentTarget: HTMLElement }) => void
    onBillingPeriodChangeClick?: (
      plan: TSubscriptionPlan,
      e: { currentTarget: HTMLElement },
    ) => void
    onPlanChangeClick?: (plan: TSubscriptionPlan, e: { currentTarget: HTMLElement }) => void
  }) => {
    return handlers || {}
  },
)
