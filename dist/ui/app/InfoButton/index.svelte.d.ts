import type { ComponentProps, Snippet } from 'svelte';
import Button from '../../core/Button/Button.svelte';
type TBtnProps = ComponentProps<typeof Button>;
type TProps = {
    dialogTitle?: string;
    contentClass?: string;
    dialogClass?: string;
    popoverClass?: string;
    children: Snippet;
    trigger?: Snippet<[{
        isOpened: boolean;
        props: TBtnProps;
    }]>;
} & Omit<TBtnProps, 'children' | 'onclick'>;
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
