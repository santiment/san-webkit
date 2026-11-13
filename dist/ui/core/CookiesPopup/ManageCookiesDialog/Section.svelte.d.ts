import type { Snippet } from 'svelte';
type TProps = {
    title: string;
    description: string;
    children: Snippet;
};
declare const Section: import("svelte").Component<TProps, {}, "">;
type Section = ReturnType<typeof Section>;
export default Section;
