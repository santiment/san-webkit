import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements';
type TSearchProps<T> = {
    getCompareValues: (item: T) => string | string[];
};
export declare const useSearchCtx: (<GItem>({ getCompareValues }: TSearchProps<GItem>) => {
    searchTerm: {
        readonly $: string;
    };
    filter: <T extends GItem>(items: T[]) => T[];
    onKeyUp: KeyboardEventHandler<HTMLInputElement>;
    onInput: ChangeEventHandler<HTMLInputElement>;
    clear(): void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: <GItem>({ getCompareValues }: TSearchProps<GItem>) => {
        searchTerm: {
            readonly $: string;
        };
        filter: <T extends GItem>(items: T[]) => T[];
        onKeyUp: KeyboardEventHandler<HTMLInputElement>;
        onInput: ChangeEventHandler<HTMLInputElement>;
        clear(): void;
    };
    __CTX: "webkit_useSearchCtx";
};
export {};
