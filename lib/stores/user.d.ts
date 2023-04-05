export declare const ANNUAL_DISCOUT_FRAGMENT = "\n  annualDiscount:checkAnnualDiscountEligibility {\n    isEligible\n    discount {\n      percentOff\n      expireAt\n    }\n  }\n";
export declare const queryCustomerData: () => Promise<any>;
export type CustomerData = {
    isLoggedIn: boolean;
    sanBalance: number;
    isEligibleForTrial: boolean;
    annualDiscount?: SAN.AnnualDiscount;
};
export declare const DEFAULT: CustomerData;
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<CustomerData>, invalidate?: ((value?: CustomerData | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
export declare const customerData$: {
    fetched: boolean;
    set: (this: void, value: CustomerData) => void;
    setValue(value: any): any;
    setDefault(): void;
    query(): Promise<any>;
    subscribe(run: Parameters<typeof subscribe>[0], invalidate: any): ReturnType<typeof subscribe>;
    clear(): void;
    refetch(): any;
};
export {};
