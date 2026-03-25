export declare function controlledPromisePolyfill<T = unknown>(): {
    promise: Promise<T>;
    resolve: (value?: T) => void;
    reject: (reason?: unknown) => void;
};
export declare const sleep: (delay: number) => Promise<void>;
