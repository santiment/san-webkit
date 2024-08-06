import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlansProps = typeof __propDef.props;
export type PlansEvents = typeof __propDef.events;
export type PlansSlots = typeof __propDef.slots;
export default class Plans extends SvelteComponent<PlansProps, PlansEvents, PlansSlots> {
}
export {};
