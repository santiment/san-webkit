export declare const FeatureWalkthrough$: {
    timer: null;
    value: never[];
    subscribe: (this: void, run: import("svelte/store").Subscriber<SAN.Walkthrough[]>, invalidate?: ((value?: SAN.Walkthrough[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    show(walkthrough: SAN.Walkthrough): void;
    clear(): void;
    complete(): void;
};
