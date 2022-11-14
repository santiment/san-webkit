import { TrackCategory } from './utils'

const track = TrackCategory('Plan upgrade')

export const __trackPremiumPlanPurchase = ({
  planId,
  revenue,
}: {
  planId: number
  revenue: number
}) =>
  track('premium_plan_purchase', {
    planId,
    revenue,
  })
