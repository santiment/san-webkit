import { type Snippet } from 'svelte';
type $$ComponentProps = {
    class?: string;
    overlayClass?: string;
    forceMobileLandscape?: boolean;
    forceDesktop?: boolean;
    children: Snippet<[{
        close: () => void;
    }]>;
};
declare const Dialog: import("svelte").Component<$$ComponentProps, {}, "">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;
