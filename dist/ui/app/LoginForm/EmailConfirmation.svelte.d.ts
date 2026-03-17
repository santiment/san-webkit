type TProps = {
    email: string;
    clearEmail: () => void;
    isSignUp?: boolean;
};
declare const EmailConfirmation: import("svelte").Component<TProps, {}, "">;
type EmailConfirmation = ReturnType<typeof EmailConfirmation>;
export default EmailConfirmation;
