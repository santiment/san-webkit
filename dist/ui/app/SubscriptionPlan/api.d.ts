export type TProductsWithPlans = readonly {
    id: string;
    plans: {
        id: string;
        name: string;
        interval: 'month' | 'year';
        amount: number;
        isDeprecated: boolean;
        product: {
            id: string;
        };
    }[];
}[];
/**
 * Fetching plans for all products.
 * Caching result indefinitely.
 */
export declare const queryProductsWithPlans: <GExecutor extends (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../../api/index.js").TExecutorOptions)) => () => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<TProductsWithPlans> : Promise<TProductsWithPlans>;
type TProductPlan = TProductsWithPlans[number]['plans'][number];
export type TPlanBillingGroup = Record<string, {
    month: TProductPlan;
    year?: TProductPlan;
}>;
export declare function getProductPlans(productsWithPlans: TProductsWithPlans, productId: string, listOfPlans: Set<string>): null | {
    plans: TProductPlan[];
    planBillingGroup: TPlanBillingGroup;
    billingGroupPlans: TPlanBillingGroup[string][];
};
export declare const getSanbaseConsumerPlans: (productsWithPlans: TProductsWithPlans) => {
    plans: TProductPlan[];
    planBillingGroup: TPlanBillingGroup;
    billingGroupPlans: TPlanBillingGroup[string][];
} | null;
export declare const getApiBusinessPlans: (productsWithPlans: TProductsWithPlans) => {
    plans: TProductPlan[];
    planBillingGroup: TPlanBillingGroup;
    billingGroupPlans: TPlanBillingGroup[string][];
} | null;
export {};
