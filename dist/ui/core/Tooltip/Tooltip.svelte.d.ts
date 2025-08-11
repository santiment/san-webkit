import { type Snippet } from 'svelte';
import { type CreateTooltipProps } from '@melt-ui/svelte';
declare const Tooltip: import("svelte").Component<{
    class?: string;
    noStyles?: boolean;
    isOpened?: boolean;
    type?: "plain" | "arrow";
    children: Snippet<[{
        ref: import("svelte-runes").SS<HTMLElement | null>;
    }]>;
    content: Snippet<[{
        close: () => void;
    }]>;
    position?: NonNullable<CreateTooltipProps["positioning"]>["placement"];
} & Omit<CreateTooltipProps, "positioning">, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
