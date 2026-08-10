import type { Snippet } from 'svelte';
import { type RadioGroupItemProps } from 'bits-ui';
type TProps = Omit<RadioGroupItemProps, 'children'> & {
    class?: string;
    children: Snippet;
};
declare const RadioItem: import("svelte").Component<TProps, {}, "">;
type RadioItem = ReturnType<typeof RadioItem>;
export default RadioItem;
