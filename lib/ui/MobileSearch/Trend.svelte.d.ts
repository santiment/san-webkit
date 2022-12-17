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
export declare type TrendProps = typeof __propDef.props;
export declare type TrendEvents = typeof __propDef.events;
export declare type TrendSlots = typeof __propDef.slots;
export default class Trend extends SvelteComponentTyped<TrendProps, TrendEvents, TrendSlots> {
}
export {};
