import type { TSubscriptionPlan } from './types.js';
type $$ComponentProps = {
    plan: Exclude<TSubscriptionPlan, 'isDeprecated'>;
    class?: string;
    source?: string;
};
declare const PlanButton: import("svelte").Component<$$ComponentProps, {}, "">;
type PlanButton = ReturnType<typeof PlanButton>;
export default PlanButton;
