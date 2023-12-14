/// <reference types="svelte" />
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<SAN.Subscription | null>, invalidate?: import("svelte/store").Invalidator<SAN.Subscription | null> | undefined) => import("svelte/store").Unsubscriber;
export declare const subscription$: {
    set: (this: void, value: SAN.Subscription | null) => void;
    query(): Promise<void>;
    subscribe(run: Parameters<typeof subscribe>[0], invalidate: any): ReturnType<typeof subscribe>;
    clear(): void;
    refetch(): Promise<void>;
};
export {};
