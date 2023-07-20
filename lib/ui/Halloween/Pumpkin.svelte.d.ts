import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        showOn?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PumpkinProps = typeof __propDef.props;
export type PumpkinEvents = typeof __propDef.events;
export type PumpkinSlots = typeof __propDef.slots;
export default class Pumpkin extends SvelteComponentTyped<PumpkinProps, PumpkinEvents, PumpkinSlots> {
}
export {};
