import { SvelteComponentTyped } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        Component: ComponentType;
        props: Record<string, unknown>;
        i: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RenderProps = typeof __propDef.props;
export type RenderEvents = typeof __propDef.events;
export type RenderSlots = typeof __propDef.slots;
export default class Render extends SvelteComponentTyped<RenderProps, RenderEvents, RenderSlots> {
}
export {};
