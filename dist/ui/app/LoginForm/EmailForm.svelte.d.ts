type TProps = {
    isSignUp?: boolean;
    from?: string;
    onSuccess: (email: string) => void;
};
declare const EmailForm: import("svelte").Component<TProps, {}, "">;
type EmailForm = ReturnType<typeof EmailForm>;
export default EmailForm;
