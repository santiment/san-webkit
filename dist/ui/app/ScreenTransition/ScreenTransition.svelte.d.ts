import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet;
    style?: string;
    isSizeTransition?: boolean;
    dataType: string;
    dataSource: string;
};
declare const ScreenTransition: import("svelte").Component<TProps, {}, "">;
type ScreenTransition = ReturnType<typeof ScreenTransition>;
export default ScreenTransition;
