/// <reference types="svelte" />
export declare const FeatureWalkthrough$: {
    timer: null;
    value: never[];
    subscribe: (this: void, run: import("svelte/store").Subscriber<SAN.Walkthrough[]>, invalidate?: import("svelte/store").Invalidator<SAN.Walkthrough[]> | undefined) => import("svelte/store").Unsubscriber;
    show(walkthrough: SAN.Walkthrough): void;
    clear(): void;
    complete(): void;
};
