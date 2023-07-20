import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TrendProps = typeof __propDef.props;
export type TrendEvents = typeof __propDef.events;
export type TrendSlots = typeof __propDef.slots;
export default class Trend extends SvelteComponentTyped<TrendProps, TrendEvents, TrendSlots> {
}
export {};
