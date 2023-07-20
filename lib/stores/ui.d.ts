/// <reference types="svelte" />
export declare function UI$$(defaultValue?: Record<string, any>): {
    ui$: {
        toggleNightMode(): void;
        set(this: void, value: {
            isNightMode: boolean;
            isLiteVersion: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }>, invalidate?: import("svelte/store").Invalidator<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }> | undefined): import("svelte/store").Unsubscriber;
    };
};
export declare const getUI$Ctx: () => {
    ui$: {
        toggleNightMode(): void;
        set(this: void, value: {
            isNightMode: boolean;
            isLiteVersion: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }>, invalidate?: import("svelte/store").Invalidator<{
            isNightMode: boolean;
            isLiteVersion: boolean;
        }> | undefined): import("svelte/store").Unsubscriber;
    };
};
export declare const ui$: import("svelte/store").Writable<{}>;
