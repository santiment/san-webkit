import type { ComponentProps, Snippet } from 'svelte';
import { Popover, type PopoverContentProps, type PopoverRootProps, type PopoverTriggerProps } from 'bits-ui';
type TProps = {
    class?: string;
    children?: PopoverTriggerProps['child'];
    content: Snippet<[{
        close: () => void;
    }]>;
    noStyles?: boolean;
    isOpened?: boolean;
    matchTriggerWidth?: boolean;
    align?: PopoverContentProps['align'];
    side?: PopoverContentProps['side'];
    rootProps?: PopoverRootProps;
    contentProps?: PopoverContentProps;
    portalTo?: ComponentProps<typeof Popover.Portal>['to'];
    openDelay?: number;
    closeDelay?: number;
    openOnHover?: boolean;
};
declare const Popover: import("svelte").Component<TProps, {}, "isOpened">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
