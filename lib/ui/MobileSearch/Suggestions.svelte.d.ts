import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        searchTerm: any;
        type: any;
        Component: any;
        filter: any;
        query: any;
        show: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SuggestionsProps = typeof __propDef.props;
export declare type SuggestionsEvents = typeof __propDef.events;
export declare type SuggestionsSlots = typeof __propDef.slots;
export default class Suggestions extends SvelteComponentTyped<SuggestionsProps, SuggestionsEvents, SuggestionsSlots> {
}
export {};
