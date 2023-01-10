type Callback = (...args: any[]) => void;
export declare function debounce<T extends Callback>(timeout: number, fn: T): [T, () => void];
export declare function Preloader(dataPreloader: (...args: any) => any): (node: HTMLElement) => void;
export {};
