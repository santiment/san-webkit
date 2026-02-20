import type { TSubscriptionPlan } from './types.js';
export declare const Product: {
    SanAPI: {
        id: string;
    } & Record<"name", "SanAPI">;
    Sanbase: {
        id: string;
    } & Record<"name", "Sanbase">;
};
export type PlanType = 'business' | 'consumer';
export declare const PlanTypeDisplayInfo: Record<PlanType, {
    name: string;
    className: string;
}>;
export declare const planTypes: PlanType[];
export declare const SubscriptionPlan: {
    PRO_PLUS: {
        name: string;
    } & Record<"key", "PRO_PLUS">;
    FREE: {
        name: string;
    } & Record<"key", "FREE">;
    PRO: {
        name: string;
    } & Record<"key", "PRO">;
    MAX: {
        name: string;
    } & Record<"key", "MAX">;
    BUSINESS_PRO: {
        name: string;
    } & Record<"key", "BUSINESS_PRO">;
    BUSINESS_MAX: {
        name: string;
    } & Record<"key", "BUSINESS_MAX">;
    CUSTOM: {
        name: string;
    } & Record<"key", "CUSTOM">;
};
export declare const SubscriptionPlanDetails: Record<string, undefined | {
    description: string;
    features: string[];
}>;
export declare const CONSUMER_PLANS: Set<string>;
export declare const BUSINESS_PLANS: Set<string>;
export declare function checkIsTrialEligiblePlan(planKey?: TSubscriptionPlan['name']): planKey is "PRO" | "MAX";
