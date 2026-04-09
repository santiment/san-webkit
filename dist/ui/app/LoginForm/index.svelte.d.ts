import type { Snippet } from 'svelte';
type TProps = {
    title: string;
    bottomLabel?: string;
    bottomAction?: string;
    bottomHref?: string;
    isSignUp?: boolean;
    from?: string;
    children?: Snippet;
    class?: string;
    onMetamaskClick?: () => Promise<void>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
