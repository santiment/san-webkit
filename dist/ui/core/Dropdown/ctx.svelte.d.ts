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
    label: Snippet<[T]>;
    getItemIcon: (item: TBasicItem | undefined) => string | undefined;
    onItemSelect: () => void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        selected: {
            $: TBasicItem | undefined;
        };
        isOpened: {
            $: boolean;
        };
        label: Snippet<[TBasicItem]>;
        getItemIcon: (item: TBasicItem | undefined) => string | undefined;
        onItemSelect: () => void;
    };
    set: <T extends TBasicItem>({ selected: selectedProp, label, closeDelay }: TDropdownCtx<T>) => {
        selected: {
            $: T | undefined;
        };
        isOpened: {
            $: boolean;
        };
        label: Snippet<[T]>;
        getItemIcon: (item: TBasicItem | undefined) => string | undefined;
        onItemSelect: () => void;
    };
    __CTX: "webkit_useDropdownCtx";
};
