import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RepliedToProps = typeof __propDef.props;
export type RepliedToEvents = typeof __propDef.events;
export type RepliedToSlots = typeof __propDef.slots;
export default class RepliedTo extends SvelteComponentTyped<RepliedToProps, RepliedToEvents, RepliedToSlots> {
}
export {};
