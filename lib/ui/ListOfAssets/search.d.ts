/// <reference types="svelte" />
export declare function Searcher$$(options?: any): {
    searchTerm$: import("svelte/store").Writable<string>;
    filter: <T>(items: T[]) => T[];
    onKeyUp: ({ currentTarget, code }: KeyboardEvent) => void;
    onInput: ({ currentTarget }: {
        currentTarget: any;
    }) => Promise<void>;
    clear(): void;
};
export declare const getSearcher$Ctx: () => {
    searchTerm$: import("svelte/store").Writable<string>;
    filter: <T>(items: T[]) => T[];
    onKeyUp: ({ currentTarget, code }: KeyboardEvent) => void;
    onInput: ({ currentTarget }: {
        currentTarget: any;
    }) => Promise<void>;
    clear(): void;
};
