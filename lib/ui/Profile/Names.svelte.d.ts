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
export declare type NamesProps = typeof __propDef.props;
export declare type NamesEvents = typeof __propDef.events;
export declare type NamesSlots = typeof __propDef.slots;
export default class Names extends SvelteComponentTyped<NamesProps, NamesEvents, NamesSlots> {
}
export {};
