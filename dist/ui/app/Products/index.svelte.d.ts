import type { SS } from 'svelte-runes';
import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    dropdownClassName?: string;
    tooltipClass?: string;
    isCompact?: boolean;
    isColumn?: boolean;
    isOpened?: any;
    active?: any;
    closeTimeout?: number;
    children?: Snippet<[{
        ref: SS<HTMLElement | null>;
    }]>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
