import type { TBasicItem } from './types.js';
import { type Snippet } from 'svelte';
export type TDropdownCtx<T extends TBasicItem> = {
    selected: T | undefined;
    closeDelay: number | undefined;
    label: Snippet<[T]> | undefined;
};
export declare const useDropdownCtx: (<T extends TBasicItem>({ selected: selectedProp, label, closeDelay }: TDropdownCtx<T>) => {
    selected: {
        $: T | undefined;
    };
    isOpened: {
        $: boolean;
    };
    label: Snippet<[T]> | undefined;
    getItemIcon: (item: TBasicItem | undefined) => string | undefined;
    closeDropdown: ({ skipDelay }: {
        skipDelay?: boolean;
    }) => void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: <T extends TBasicItem>({ selected: selectedProp, label, closeDelay }: TDropdownCtx<T>) => {
        selected: {
            $: T | undefined;
        };
        isOpened: {
            $: boolean;
        };
        label: Snippet<[T]> | undefined;
        getItemIcon: (item: TBasicItem | undefined) => string | undefined;
        closeDropdown: ({ skipDelay }: {
            skipDelay?: boolean;
        }) => void;
    };
    __CTX: "webkit_useDropdownCtx";
};
