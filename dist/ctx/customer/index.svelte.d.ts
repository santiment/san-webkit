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
    get: (allCtxs?: Map<string, any>) => {
        customer: {
            readonly $: TCustomer;
            reload: () => Promise<void>;
        };
        currentUser: {
            readonly $$: import("./api.js").TCurrentUser | null;
        };
    };
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
