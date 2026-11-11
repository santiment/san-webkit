import { type Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet;
    element: HTMLElement;
};
declare const Pane: import("svelte").Component<TProps, {}, "">;
type Pane = ReturnType<typeof Pane>;
export default Pane;
