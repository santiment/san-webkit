import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        desktop?: boolean;
        tablet?: boolean;
        phone?: boolean;
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OnlyOnDeviceProps = typeof __propDef.props;
export type OnlyOnDeviceEvents = typeof __propDef.events;
export type OnlyOnDeviceSlots = typeof __propDef.slots;
export default class OnlyOnDevice extends SvelteComponent<OnlyOnDeviceProps, OnlyOnDeviceEvents, OnlyOnDeviceSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        desktop?: boolean;
        tablet?: boolean;
        phone?: boolean;
        children: Snippet;
    }>);
    $$bindings: "";
}
export {};
