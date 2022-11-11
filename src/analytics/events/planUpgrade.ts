import { TrackCategory } from './utils'

const track = TrackCategory('Plan upgrade')

export const trackPremiumPlanPurchase = (revenue: number) =>
  track('premium_plan_purchase', {
    revenue,
  })
