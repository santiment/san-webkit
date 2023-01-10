import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        description: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponentTyped<SectionProps, SectionEvents, SectionSlots> {
}
export {};
