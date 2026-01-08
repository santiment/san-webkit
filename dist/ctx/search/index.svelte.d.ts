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
    get: (allCtxs?: Map<string, any>) => {
        searchTerm: {
            readonly $: string;
        };
        filter: <T extends unknown>(items: T[]) => T[];
        onKeyUp: KeyboardEventHandler<HTMLInputElement>;
        onInput: ChangeEventHandler<HTMLInputElement>;
        clear(): void;
    };
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
