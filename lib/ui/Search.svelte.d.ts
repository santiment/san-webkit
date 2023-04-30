import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        autofocus?: boolean | undefined;
        placeholder: string;
        value?: string | undefined;
        big?: boolean | undefined;
    };
    events: {
        input: Event;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
