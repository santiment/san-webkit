import type { Snippet } from 'svelte';
import type { PlanType } from './plans.js';
import { type TProductsWithPlans } from './api.js';
type Props = {
    source?: string;
    productsWithPlans?: TProductsWithPlans;
    class?: string;
    children?: Snippet<[{
        isConsumerPlans: boolean;
    }]>;
    planType?: PlanType;
    onPlanTypeChange?: (type: PlanType) => void;
};
declare const PricingSection: import("svelte").Component<Props, {}, "">;
type PricingSection = ReturnType<typeof PricingSection>;
export default PricingSection;
