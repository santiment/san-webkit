type TProps = {
    onSuccess?: (token: string) => void;
    onError?: (error: string) => void;
};
declare const Turnstile: import("svelte").Component<TProps, {
    getToken: () => string | null | undefined;
}, "">;
type Turnstile = ReturnType<typeof Turnstile>;
export default Turnstile;
