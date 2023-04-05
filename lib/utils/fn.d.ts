type Callback = (...args: any[]) => void;
export declare function debounce<T extends Callback>(timeout: number, fn: T): [T, () => void];
/** Debounced function can be accessed by subscribing to a store by prefixing it with a $ sign*/
export declare function debounce$<T extends Callback>(timeout: number, fn: T): import("svelte/store").Readable<T>;
export declare function Preloader(dataPreloader: (...args: any) => any): (node: HTMLElement) => void;
export {};
