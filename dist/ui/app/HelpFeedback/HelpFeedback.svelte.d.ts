import type { MouseEventHandler } from 'svelte/elements';
type TProps = {
    class?: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
};
declare const HelpFeedback: import("svelte").Component<TProps, {}, "">;
type HelpFeedback = ReturnType<typeof HelpFeedback>;
export default HelpFeedback;
