import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onEnd: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ResizerProps = typeof __propDef.props;
export type ResizerEvents = typeof __propDef.events;
export type ResizerSlots = typeof __propDef.slots;
export default class Resizer extends SvelteComponentTyped<ResizerProps, ResizerEvents, ResizerSlots> {
}
export {};
