type TProps = {
    title: string;
    bottomLabel?: string;
    bottomAction?: string;
    bottomHref?: string;
    isSignUp?: boolean;
    from?: string;
    onMetamaskClick?: () => Promise<void>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
