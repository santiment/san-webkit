import type { Snippet } from 'svelte';
import { Accordion, type AccordionHeaderProps } from 'bits-ui';
type TItem = {
    label: string;
    answer: string;
};
type TProps = {
    items: TItem[];
    content: Snippet<[TItem]>;
    level?: AccordionHeaderProps['level'];
    class?: string;
    triggerClass?: string;
    iconClass?: string;
};
declare const Accordion: import("svelte").Component<TProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
