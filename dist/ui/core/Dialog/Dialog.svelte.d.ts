import { type Snippet } from 'svelte';
type $$ComponentProps = {
    class?: string;
    forceMobileLandscape?: boolean;
    children: Snippet<[{
        close: () => void;
    }]>;
};
declare const Dialog: import("svelte").Component<$$ComponentProps, {}, "">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;
