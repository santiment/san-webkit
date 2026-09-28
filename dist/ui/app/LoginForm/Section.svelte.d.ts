import type { MouseEventHandler } from 'svelte/elements';
import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    title: string;
    titleClass?: string;
    bottomLabel?: string;
    bottomAction?: string;
    bottomHref?: string;
    onBottomClick?: MouseEventHandler<HTMLAnchorElement>;
    children: Snippet;
};
declare const Section: import("svelte").Component<TProps, {}, "">;
type Section = ReturnType<typeof Section>;
export default Section;
