import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements';
type TSearchProps<T> = {
    getCompareValues: (item: T) => string | string[];
};
export declare const useSearchFlow: <GItem>({ getCompareValues }: TSearchProps<GItem>) => {
    searchTerm: {
        readonly $: string[];
    };
    isSearching: {
        readonly $: boolean;
    };
    filter: <T extends GItem>(items: T[]) => T[];
    /** @deprecated use [onkeyup] instead */
    onKeyUp: KeyboardEventHandler<HTMLInputElement>;
    /** @deprecated use [oninput] instead */
    onInput: ChangeEventHandler<HTMLInputElement>;
    onkeyup: KeyboardEventHandler<HTMLInputElement>;
    oninput: ChangeEventHandler<HTMLInputElement>;
    clear(): void;
};
/** @deprecated use [useSearchFlow] instead */
export declare const useSearchCtx: (<GItem>({ getCompareValues }: TSearchProps<GItem>) => {
    searchTerm: {
        readonly $: string[];
    };
    isSearching: {
        readonly $: boolean;
    };
    filter: <T extends GItem>(items: T[]) => T[];
    /** @deprecated use [onkeyup] instead */
    onKeyUp: KeyboardEventHandler<HTMLInputElement>;
    /** @deprecated use [oninput] instead */
    onInput: ChangeEventHandler<HTMLInputElement>;
    onkeyup: KeyboardEventHandler<HTMLInputElement>;
    oninput: ChangeEventHandler<HTMLInputElement>;
    clear(): void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: <GItem>({ getCompareValues }: TSearchProps<GItem>) => {
        searchTerm: {
            readonly $: string[];
        };
        isSearching: {
            readonly $: boolean;
        };
        filter: <T extends GItem>(items: T[]) => T[];
        /** @deprecated use [onkeyup] instead */
        onKeyUp: KeyboardEventHandler<HTMLInputElement>;
        /** @deprecated use [oninput] instead */
        onInput: ChangeEventHandler<HTMLInputElement>;
        onkeyup: KeyboardEventHandler<HTMLInputElement>;
        oninput: ChangeEventHandler<HTMLInputElement>;
        clear(): void;
    };
    __CTX: "webkit_useSearchCtx";
};
export {};
