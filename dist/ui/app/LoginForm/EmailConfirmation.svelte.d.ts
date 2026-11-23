type TProps = {
    class?: string;
    email: string;
    clearEmail: () => void;
    isSignUp?: boolean;
    from?: string;
};
declare const EmailConfirmation: import("svelte").Component<TProps, {}, "">;
type EmailConfirmation = ReturnType<typeof EmailConfirmation>;
export default EmailConfirmation;
