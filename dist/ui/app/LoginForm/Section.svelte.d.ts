import type { MouseEventHandler } from 'svelte/elements';
import type { Snippet } from 'svelte';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Section: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    title: string;
    titleClass?: string;
    bottomLabel?: string;
    bottomAction?: string;
    bottomHref?: string;
    onBottomClick?: MouseEventHandler<HTMLAnchorElement>;
    children: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Section = InstanceType<typeof Section>;
export default Section;
