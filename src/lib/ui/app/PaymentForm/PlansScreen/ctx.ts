import { createCtx } from '$lib/utils/index.js'
import type { TSubscriptionPlan } from '$ui/app/SubscriptionPlan/types.js'

export const useSubscriptionPlanButtonCtx = createCtx(
  'useSubscriptionPlanButtonCtx',
  (handlers?: {
    onPlanButtonClick?: (plan: TSubscriptionPlan) => void
    onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void
  }) => {
    return handlers || {}
  },
)
