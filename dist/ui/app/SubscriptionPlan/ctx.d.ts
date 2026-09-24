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
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
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
    __CTX: "useSubscriptionPlanButtonCtx";
};
