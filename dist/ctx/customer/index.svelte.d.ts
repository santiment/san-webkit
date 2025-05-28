import { type TCustomer } from './api.js';
export declare const useCustomerCtx: ((initialValue?: TCustomer) => {
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
            featureAccessLevel: "ALPHA" | "BETA" | "RELEASED";
            settings: {
                theme: null | "nightmode";
                isPromoter: boolean;
                sanbaseVersion: null | string;
                alertNotifyEmail: boolean;
                alertNotifyTelegram: boolean;
            };
            ethAccounts: {
                address: string;
            }[];
        } | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
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
                featureAccessLevel: "ALPHA" | "BETA" | "RELEASED";
                settings: {
                    theme: null | "nightmode";
                    isPromoter: boolean;
                    sanbaseVersion: null | string;
                    alertNotifyEmail: boolean;
                    alertNotifyTelegram: boolean;
                };
                ethAccounts: {
                    address: string;
                }[];
            } | null;
        };
    };
    set: (initialValue?: TCustomer) => {
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
                featureAccessLevel: "ALPHA" | "BETA" | "RELEASED";
                settings: {
                    theme: null | "nightmode";
                    isPromoter: boolean;
                    sanbaseVersion: null | string;
                    alertNotifyEmail: boolean;
                    alertNotifyTelegram: boolean;
                };
                ethAccounts: {
                    address: string;
                }[];
            } | null;
        };
    };
};
