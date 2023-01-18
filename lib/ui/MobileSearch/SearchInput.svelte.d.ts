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
export type SearchInputProps = typeof __propDef.props;
export type SearchInputEvents = typeof __propDef.events;
export type SearchInputSlots = typeof __propDef.slots;
export default class SearchInput extends SvelteComponentTyped<SearchInputProps, SearchInputEvents, SearchInputSlots> {
}
export {};
