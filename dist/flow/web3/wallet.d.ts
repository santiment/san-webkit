export declare function useConnectMetamaskFlow(): {
    onConnectMetamaskClick: () => void;
};
export declare function useWalletConnectLoginFlow(isSignUp?: boolean, onLoginComplete?: (user: null | {
    id: string;
}) => void): {
    loginWithWallet: (address: string) => Promise<{
        id: string;
        firstLogin: boolean;
    } | null>;
};
