import { type TCustomer } from './api.js';
export declare const useCustomerCtx: {
    (): {
        customer: {
            readonly $: TCustomer;
            reload: () => void;
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
            } | null;
        };
    };
    get(): {
        customer: {
            readonly $: TCustomer;
            reload: () => void;
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
            } | null;
        };
    };
    set(): {
        customer: {
            readonly $: TCustomer;
            reload: () => void;
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
            } | null;
        };
    };
};
