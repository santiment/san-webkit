import type { ComponentProps } from 'svelte';
import Option from './Option.svelte';
type TProps = {
    from?: string;
} & Omit<ComponentProps<typeof Option>, 'title' | 'href' | 'icon' | 'onclick'>;
declare const Google: import("svelte").Component<TProps, {}, "">;
type Google = ReturnType<typeof Google>;
export default Google;
