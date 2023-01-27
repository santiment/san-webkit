import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        items: any[];
        key: string | undefined;
        renderAmount?: number | undefined;
        defaultItemHeight?: number | undefined;
        maxHeight: number;
        autoHeight?: boolean | undefined;
        autofocus?: boolean | undefined;
        placeholder?: string | undefined;
        debounceTime?: number | undefined;
        filter: (searchTerm: string, items: any[]) => any[];
        searchPosition?: "top" | "bottom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: any;
        };
    };
};
export declare type SearchableProps = typeof __propDef.props;
export declare type SearchableEvents = typeof __propDef.events;
export declare type SearchableSlots = typeof __propDef.slots;
export default class Searchable extends SvelteComponentTyped<SearchableProps, SearchableEvents, SearchableSlots> {
}
export {};
