import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ClueProps = typeof __propDef.props;
export declare type ClueEvents = typeof __propDef.events;
export declare type ClueSlots = typeof __propDef.slots;
export default class Clue extends SvelteComponentTyped<ClueProps, ClueEvents, ClueSlots> {
}
export {};
