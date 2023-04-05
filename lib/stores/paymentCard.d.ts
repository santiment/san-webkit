declare const subscribe: (this: void, run: import("svelte/store").Subscriber<SAN.PaymentCard | null>, invalidate?: ((value?: SAN.PaymentCard | null | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
export declare const paymentCard$: {
    set: (this: void, value: SAN.PaymentCard | null) => void;
    query(): Promise<void>;
    subscribe(run: Parameters<typeof subscribe>[0], invalidate?: any): ReturnType<typeof subscribe>;
    clear(): void;
    refetch(): Promise<void>;
    setDefault(): void;
};
export {};
