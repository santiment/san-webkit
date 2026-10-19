import type Turnstile from './Turnstile.svelte';
type TEmailLoginProps = {
    errorMsg?: string;
};
type TEmailSubmitProps = {
    email: string;
    from: string | undefined;
    turnstileRef: Turnstile;
    isSignUp: boolean;
};
export declare function useEmailLogin({ errorMsg, }?: TEmailLoginProps): {
    loading: {
        readonly $: boolean;
    };
    loginEmail: ({ email, turnstileRef, isSignUp, from, }: TEmailSubmitProps) => Promise<boolean>;
};
export {};
