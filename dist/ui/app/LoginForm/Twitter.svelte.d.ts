import type { ComponentProps } from 'svelte';
import Option from './Option.svelte';
type TProps = {
    from?: string;
} & Omit<ComponentProps<typeof Option>, 'title' | 'href' | 'icon' | 'onclick'>;
declare const Twitter: import("svelte").Component<TProps, {}, "">;
type Twitter = ReturnType<typeof Twitter>;
export default Twitter;
