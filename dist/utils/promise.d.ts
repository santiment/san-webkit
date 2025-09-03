export declare function controlledPromisePolyfill(): {
    promise: Promise<unknown>;
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
};
