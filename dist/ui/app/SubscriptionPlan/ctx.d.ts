import type { TSubscriptionPlan } from './types.js';
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
    set(handlers?: {
        onPlanButtonClick?: (plan: TSubscriptionPlan) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void;
    } | undefined): {
        onPlanButtonClick?: (plan: TSubscriptionPlan) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan) => void;
    };
};
