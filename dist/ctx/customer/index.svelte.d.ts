import { type TCustomer } from './api.js';
export declare const useCustomerCtx: ((initialValue?: TCustomer) => {
    customer: {
        readonly $: TCustomer;
        reload: () => Promise<void>;
    };
    currentUser: {
        readonly $$: import("./api.js").TCurrentUser | null;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (initialValue?: TCustomer) => {
        customer: {
            readonly $: TCustomer;
            reload: () => Promise<void>;
        };
        currentUser: {
            readonly $$: import("./api.js").TCurrentUser | null;
        };
    };
    __CTX: "useCustomerCtx";
};
