import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        user: SAN.Author;
        isTagName?: boolean | undefined;
        source: string;
        feature: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        name: {};
        default: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
