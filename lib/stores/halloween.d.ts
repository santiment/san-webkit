export declare const PUMPKINS_QUERY = "{\n   pages:getPumpkins\n   code:getPumpkinCode\n}";
export declare const queryPumpkins: () => Promise<{
    pages: Set<string>;
    code: string | null;
}>;
export type HalloweenData = {
    pages: Set<string>;
    code: string | null;
};
export declare const DEFAULT: {
    pages: Set<never>;
    code: null;
};
export declare const halloweenData$: {
    DEFAULT: HalloweenData;
    fetched: boolean;
    set: (value: HalloweenData) => HalloweenData;
    subscribe(run: import("svelte/store").Subscriber<HalloweenData>, invalidate: any): import("svelte/store").Unsubscriber;
    clear(): void;
    query(): Promise<HalloweenData>;
    refetch(): Promise<HalloweenData> | undefined;
    resetToDefault(): void;
};
