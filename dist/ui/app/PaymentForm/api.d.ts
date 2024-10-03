import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
export declare const mutateSubscribe: <GExecutor extends (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor.js").Query = <T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../../api/index.js").TExecutorOptions)) => <GData extends {
    id: string;
    trialEnd: null | string;
    status: string;
    paymentIntent: null | {
        status: string;
        clientSecret: string;
    };
    plan: TSubscriptionPlan;
} | null = {
    id: string;
    trialEnd: null | string;
    status: string;
    paymentIntent: null | {
        status: string;
        clientSecret: string;
    };
    plan: TSubscriptionPlan;
} | null>(variables: {
    planId: number;
    cardToken?: string;
    coupon?: string;
    paymentMethodId?: string;
}) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export type TCoupon = {
    isValid: boolean;
    percentOff: number;
};
export declare const queryDiscountCoupon: <GExecutor extends (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor.js").Query = <T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../../api/index.js").TExecutorOptions)) => <GData extends TCoupon | null = TCoupon | null>(coupon: string) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
