import type { ComponentProps, Snippet } from 'svelte';
import Popover from '../../core/Popover/Popover.svelte';
type TProps = {
    class?: string;
    dropdownClassName?: string;
    isCompact?: boolean;
    isOpened?: boolean;
    active?: string;
    variant?: 'green' | 'blue';
    align?: ComponentProps<typeof Popover>['align'];
    closeTimeout?: number;
    children?: Snippet<[{
        props: Record<string, unknown>;
    }]>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
