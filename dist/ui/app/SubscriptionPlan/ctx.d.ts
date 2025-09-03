import type { TSubscriptionPlan } from './types.js';
export declare const useSubscriptionPlanButtonCtx: ((handlers?: {
    onPlanButtonClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
    onBillingPeriodChangeClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
    onPlanChangeClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
}) => {
    onPlanButtonClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
    onBillingPeriodChangeClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
    onPlanChangeClick?: (plan: TSubscriptionPlan, e: {
        currentTarget: HTMLElement;
    }) => void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        onPlanButtonClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onPlanChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
    };
    set: (handlers?: {
        onPlanButtonClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onPlanChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
    }) => {
        onPlanButtonClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onBillingPeriodChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
        onPlanChangeClick?: (plan: TSubscriptionPlan, e: {
            currentTarget: HTMLElement;
        }) => void;
    };
};
