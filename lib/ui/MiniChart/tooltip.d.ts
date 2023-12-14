/// <reference types="svelte" />
export declare const TooltipContext$$: () => {
    offset$: import("svelte/store").Writable<number>;
    syncKey$: import("svelte/store").Writable<string>;
    updateOffset: (value: number, key?: string) => void;
};
export declare const getTooltipContext: () => {
    offset$: import("svelte/store").Writable<number>;
    syncKey$: import("svelte/store").Writable<string>;
    updateOffset: (value: number, key?: string) => void;
} | undefined;
