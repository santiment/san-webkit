import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        searchTerm: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SearchInputProps = typeof __propDef.props;
export declare type SearchInputEvents = typeof __propDef.events;
export declare type SearchInputSlots = typeof __propDef.slots;
export default class SearchInput extends SvelteComponentTyped<SearchInputProps, SearchInputEvents, SearchInputSlots> {
}
export {};
