import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    dropdownClassName?: string;
    tooltipClass?: string;
    isCompact?: boolean;
    isOpened?: any;
    active?: any;
    variant?: 'green' | 'blue';
    closeTimeout?: number;
    children?: Snippet<[{
        props: Record<string, unknown>;
    }]>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
