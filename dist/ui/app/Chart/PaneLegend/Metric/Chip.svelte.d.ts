import type { Snippet } from 'svelte';
type TProps = {
    children: Snippet;
    explanation: string;
};
declare const Chip: import("svelte").Component<TProps, {}, "">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
