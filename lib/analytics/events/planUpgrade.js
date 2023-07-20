import { TrackCategory } from './utils.js';
const track = TrackCategory('Plan upgrade');
export const __trackPremiumPlanPurchase = ({ planId, revenue, }) => track('premium_plan_purchase', {
    planId,
    revenue,
});
//# sourceMappingURL=planUpgrade.js.map