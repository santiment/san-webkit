import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        close: () => void;
        children: Snippet<[{
            close: () => void;
        }]>;
        isNested?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MobileDrawerProps = typeof __propDef.props;
export type MobileDrawerEvents = typeof __propDef.events;
export type MobileDrawerSlots = typeof __propDef.slots;
export default class MobileDrawer extends SvelteComponent<MobileDrawerProps, MobileDrawerEvents, MobileDrawerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        close: () => void;
        children: Snippet<[{
            close: () => void;
        }]>;
        isNested?: boolean;
    }>);
    $$bindings: "";
}
export {};
