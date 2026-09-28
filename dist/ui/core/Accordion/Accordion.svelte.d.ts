import type { Snippet } from 'svelte';
import { Accordion } from 'bits-ui';
type TItem = {
    label: string;
    answer: string;
};
type $$ComponentProps = {
    items: TItem[];
    content: Snippet<[TItem]>;
};
declare const Accordion: import("svelte").Component<$$ComponentProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
