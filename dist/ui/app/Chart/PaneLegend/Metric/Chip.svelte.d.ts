import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet;
    explanation: string;
    onclick?: (e: MouseEvent & {
        currentTarget: HTMLElement;
    }) => void;
};
declare const Chip: import("svelte").Component<TProps, {}, "">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
