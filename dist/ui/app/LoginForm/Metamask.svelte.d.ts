type TProps = {
    isSignUp?: boolean;
    onclick: () => Promise<void>;
};
declare const Metamask: import("svelte").Component<TProps, {}, "">;
type Metamask = ReturnType<typeof Metamask>;
export default Metamask;
