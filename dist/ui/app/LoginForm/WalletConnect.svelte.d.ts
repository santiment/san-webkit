type $$ComponentProps = {
    class?: string;
    isSignUp: boolean;
    onLoginComplete?: (user: null | {
        id: string;
    }) => void;
};
declare const WalletConnect: import("svelte").Component<$$ComponentProps, {}, "">;
type WalletConnect = ReturnType<typeof WalletConnect>;
export default WalletConnect;
