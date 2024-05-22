import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        currentPlanName: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FullAccessCardProps = typeof __propDef.props;
export type FullAccessCardEvents = typeof __propDef.events;
export type FullAccessCardSlots = typeof __propDef.slots;
export default class FullAccessCard extends SvelteComponentTyped<FullAccessCardProps, FullAccessCardEvents, FullAccessCardSlots> {
}
export {};
