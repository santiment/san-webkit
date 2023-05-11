export declare function UI$$(): {
    ui$: {
        toggleNightMode(): void;
        set(this: void, value: {
            isNightMode: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            isNightMode: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            isNightMode: boolean;
        }>, invalidate?: ((value?: {
            isNightMode: boolean;
        } | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
    };
};
export declare const getUI$Ctx: () => {
    ui$: {
        toggleNightMode(): void;
        set(this: void, value: {
            isNightMode: boolean;
        }): void;
        update(this: void, updater: import("svelte/store").Updater<{
            isNightMode: boolean;
        }>): void;
        subscribe(this: void, run: import("svelte/store").Subscriber<{
            isNightMode: boolean;
        }>, invalidate?: ((value?: {
            isNightMode: boolean;
        } | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
    };
};
