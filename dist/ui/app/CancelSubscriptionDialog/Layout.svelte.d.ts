import type { Snippet } from 'svelte';
type TProps = {
    title: string;
    onContinueClick: () => void;
    children: Snippet;
    loading?: boolean;
};
declare const Layout: import("svelte").Component<TProps, {}, "">;
type Layout = ReturnType<typeof Layout>;
export default Layout;
