export declare const PLANS_QUERY = "{\n  productsWithPlans {\n    id\n    plans {\n      id\n      name\n      interval\n      amount\n      isDeprecated\n    }\n  }\n}";
declare type ProductPlans = SAN.Product & {
    plans: SAN.Plan[];
};
declare type ProductGetter = (products: ProductPlans[]) => undefined | ProductPlans['plans'];
export declare const queryPlans: () => Promise<ProductPlans[]>;
export declare const queryProductPlans: (productGetter: ProductGetter, plansFilter?: (plans: SAN.Plan[]) => SAN.Plan[]) => Promise<SAN.Plan[]>;
export declare const querySanbasePlans: () => Promise<SAN.Plan[]>;
export declare function getCachedSanbasePlans(): SAN.Plan[] | null;
export declare const queryCoupon: (coupon: string) => Promise<{
    percentOff: number;
    isValid: boolean;
}>;
export declare const mutateSubscribe: (cardToken: undefined | string, planId: number, coupon?: string) => Promise<{
    id: string | number;
    trialEnd: string | null;
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
export {};
