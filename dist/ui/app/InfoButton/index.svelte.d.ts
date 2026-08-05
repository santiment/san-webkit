import type { ComponentProps, Snippet } from 'svelte';
import Button from '../../core/Button/Button.svelte';
type TProps = {
    class?: string;
    title?: string;
    contentClass?: string;
    triggerProps?: Omit<ComponentProps<typeof Button>, 'onclick' | 'class'>;
    children: Snippet;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
