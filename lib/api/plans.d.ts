export declare const PLANS_QUERY = "{\n  productsWithPlans {\n    id\n    plans {\n      id\n      name\n      interval\n      amount\n      isDeprecated\n    }\n  }\n}";
export type ProductPlans = SAN.Product & {
    plans: SAN.Plan[];
};
type ProductGetter = (products: ProductPlans[]) => undefined | ProductPlans['plans'];
export declare const queryPlans: () => Promise<ProductPlans[]>;
export declare const queryProductPlans: (productGetter: ProductGetter, plansFilter?: (plans: SAN.Plan[]) => SAN.Plan[]) => Promise<SAN.Plan[]>;
export declare const getIndividualPlans: (products: ProductPlans[]) => SAN.Plan[];
export declare const getBusinessPlans: (products: ProductPlans[]) => SAN.Plan[];
export declare const querySanbasePlans: () => Promise<SAN.Plan[]>;
export declare function getCachedProducts(): ProductPlans[] | null;
export declare function getCachedSanbasePlans(): SAN.Plan[] | null;
export declare const queryCoupon: (coupon: string) => Promise<{
    percentOff: number;
    isValid: boolean;
}>;
export type SubscribeMutation = SAN.API.Query<'subscribe', {
    id: string | number;
    trialEnd: string | null;
    status: string;
    paymentIntent?: {
        clientSecret: string;
    };
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
export declare const mutateSubscribe: (cardToken: undefined | string, planId: number, coupon?: string) => Promise<{
    id: string | number;
    trialEnd: string | null;
    status: string;
    paymentIntent?: {
        clientSecret: string;
    } | undefined;
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
type PppSettings = {
    isEligibleForPpp: boolean;
    country: string;
    plans: SAN.Plan[];
};
export declare const queryPppSettings: () => Promise<PppSettings | null>;
export {};
