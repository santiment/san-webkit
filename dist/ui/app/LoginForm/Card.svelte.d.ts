import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet;
};
declare const Card: import("svelte").Component<TProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
