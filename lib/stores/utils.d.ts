export declare const getSessionValue: () => any;
export declare const setSessionValue: (value: any) => any;
export declare function QueryStore<T>(defaultValue: T, query: () => Promise<T>, schema: string, DEFAULT?: T): {
    DEFAULT: T;
    fetched: boolean;
    set: (value: T) => T;
    subscribe(run: import("svelte/store").Subscriber<T>, invalidate: any): import("svelte/store").Unsubscriber;
    clear(): void;
    query(): Promise<T>;
    refetch(): undefined | Promise<T>;
    resetToDefault(): void;
};
