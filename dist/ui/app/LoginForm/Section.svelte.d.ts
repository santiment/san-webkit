import type { ComponentProps, Snippet } from 'svelte';
import Button from '../../core/Button/Button.svelte';
type TProps = {
    class?: string;
    title: string;
    titleClass?: string;
    bottomLabel?: string;
    bottomAction?: string;
    bottomHref?: string;
    onBottomClick?: ComponentProps<typeof Button>['onclick'];
    children: Snippet;
};
declare const Section: import("svelte").Component<TProps, {}, "">;
type Section = ReturnType<typeof Section>;
export default Section;
