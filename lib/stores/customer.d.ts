/// <reference types="svelte" />
import { normalizeAnnualDiscount } from './../utils/subscription';
export type CustomerType = {
    isLoggedIn: boolean;
    sanBalance: number;
    isEligibleForTrial: boolean;
    annualDiscount: ReturnType<typeof normalizeAnnualDiscount>;
    isIncompleteSubscription: boolean;
    isPro: boolean;
    isProPlus: boolean;
    isMax: boolean;
    isBusinessPro: boolean;
    isBusinessMax: boolean;
    isTrial: boolean;
    trialDaysLeft: number;
    planName: string;
    subscription: undefined | null | SAN.Subscription;
    sanbaseSubscription?: undefined | null | SAN.Subscription;
    apiSubscription?: undefined | null | SAN.Subscription;
    subscriptions: SAN.Subscription[];
    isCanceled: boolean;
};
export declare const DEFAULT: CustomerType;
export declare const CUSTOMER_QUERY = "{\n  currentUser {\n    isEligibleForTrial:isEligibleForSanbaseTrial\n    subscriptions {\n      id\n      status\n      trialEnd\n      cancelAtPeriodEnd\n      currentPeriodEnd\n      plan {\n        id\n        name\n        amount\n        interval\n        product { id }\n      }\n    }\n  }\n}";
export declare const ANNUAL_DISCOUNT_QUERY = "{\n  annualDiscount:checkAnnualDiscountEligibility {\n    isEligible\n    discount {\n      percentOff\n      expireAt\n    }\n  }\n}";
export declare const queryCustomer: (requestEvent?: import("./../api").RequestEvent | undefined) => Promise<CustomerType>;
export declare function Customer$$(defaultValue?: CustomerType): {
    customer$: {
        DEFAULT: CustomerType;
        fetched: boolean;
        set: (value: CustomerType) => CustomerType;
        subscribe(run: import("svelte/store").Subscriber<CustomerType>, invalidate: any): import("svelte/store").Unsubscriber;
        clear(): void;
        query(): Promise<CustomerType>;
        refetch(): Promise<CustomerType> | undefined;
        resetToDefault(): void;
    };
};
export declare const getCustomer$Ctx: () => {
    customer$: {
        DEFAULT: CustomerType;
        fetched: boolean;
        set: (value: CustomerType) => CustomerType;
        subscribe(run: import("svelte/store").Subscriber<CustomerType>, invalidate: any): import("svelte/store").Unsubscriber;
        clear(): void;
        query(): Promise<CustomerType>;
        refetch(): Promise<CustomerType> | undefined;
        resetToDefault(): void;
    };
};
export type Customer$Type = ReturnType<typeof Customer$$>['customer$'];
