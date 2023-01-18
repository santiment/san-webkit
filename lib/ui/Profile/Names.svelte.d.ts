import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        user: SAN.Author & {
            name?: string;
        };
        followers?: number | undefined;
        feature: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NamesProps = typeof __propDef.props;
export type NamesEvents = typeof __propDef.events;
export type NamesSlots = typeof __propDef.slots;
export default class Names extends SvelteComponentTyped<NamesProps, NamesEvents, NamesSlots> {
}
export {};
