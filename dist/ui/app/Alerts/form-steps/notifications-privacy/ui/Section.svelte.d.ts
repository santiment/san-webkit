import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    title: string;
    children: Snippet;
};
declare const Section: import("svelte").Component<TProps, {}, "">;
type Section = ReturnType<typeof Section>;
export default Section;
