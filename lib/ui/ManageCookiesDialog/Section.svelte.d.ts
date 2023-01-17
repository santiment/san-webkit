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
export declare type SectionProps = typeof __propDef.props;
export declare type SectionEvents = typeof __propDef.events;
export declare type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponentTyped<SectionProps, SectionEvents, SectionSlots> {
}
export {};
