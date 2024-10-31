import { type TCustomer } from './api.js';
export declare const useCustomerCtx: {
    (initialValue?: TCustomer | undefined): {
        customer: {
            readonly $: TCustomer;
            reload: () => Promise<void>;
        };
        currentUser: {
            readonly $$: {
                id: string;
                email: null | string;
                name: null | string;
                username: null | string;
                avatarUrl: null | string;
                privacyPolicyAccepted: boolean;
                marketingAccepted: boolean;
                firstLogin: boolean;
                isModerator: boolean;
                settings: {
                    theme: null | "nightmode";
                    isPromoter: boolean;
                    sanbaseVersion: null | string;
                };
                ethAccounts: {
                    address: string;
                }[];
            } | null;
        };
    };
    get(): {
        customer: {
            readonly $: TCustomer;
            reload: () => Promise<void>;
        };
        currentUser: {
            readonly $$: {
                id: string;
                email: null | string;
                name: null | string;
                username: null | string;
                avatarUrl: null | string;
                privacyPolicyAccepted: boolean;
                marketingAccepted: boolean;
                firstLogin: boolean;
                isModerator: boolean;
                settings: {
                    theme: null | "nightmode";
                    isPromoter: boolean;
                    sanbaseVersion: null | string;
                };
                ethAccounts: {
                    address: string;
                }[];
            } | null;
        };
    };
    set(initialValue?: TCustomer | undefined): {
        customer: {
            readonly $: TCustomer;
            reload: () => Promise<void>;
        };
        currentUser: {
            readonly $$: {
                id: string;
                email: null | string;
                name: null | string;
                username: null | string;
                avatarUrl: null | string;
                privacyPolicyAccepted: boolean;
                marketingAccepted: boolean;
                firstLogin: boolean;
                isModerator: boolean;
                settings: {
                    theme: null | "nightmode";
                    isPromoter: boolean;
                    sanbaseVersion: null | string;
                };
                ethAccounts: {
                    address: string;
                }[];
            } | null;
        };
    };
};
