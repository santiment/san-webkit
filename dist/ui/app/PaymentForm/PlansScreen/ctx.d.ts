import type { TSubscriptionPlan } from '../../SubscriptionPlan/types.js';
export declare const useSubscriptionPlanButtonCtx: {
    (handlers?: {
        onPlanButtonClick?: (plan: TSubscriptionPlan) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void;
    } | undefined): {
        onPlanButtonClick?: (plan: TSubscriptionPlan) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void;
    };
    get(): {
        onPlanButtonClick?: (plan: TSubscriptionPlan) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void;
    };
};
