import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ClueProps = typeof __propDef.props;
export type ClueEvents = typeof __propDef.events;
export type ClueSlots = typeof __propDef.slots;
export default class Clue extends SvelteComponentTyped<ClueProps, ClueEvents, ClueSlots> {
}
export {};
