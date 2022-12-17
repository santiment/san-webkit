/** @typedef {typeof __propDef.props}  SectionProps */
/** @typedef {typeof __propDef.events}  SectionEvents */
/** @typedef {typeof __propDef.slots}  SectionSlots */
export default class Section extends SvelteComponentTyped<{
    title: any;
    bottomLabel: any;
    bottomAction: any;
    bottomHref: any;
    class?: string | undefined;
    titleMargin?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        bottomLabel: any;
        bottomAction: any;
        bottomHref: any;
        class?: string | undefined;
        titleMargin?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
