import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SuggestionsScreenProps = typeof __propDef.props;
export type SuggestionsScreenEvents = typeof __propDef.events;
export type SuggestionsScreenSlots = typeof __propDef.slots;
export default class SuggestionsScreen extends SvelteComponentTyped<SuggestionsScreenProps, SuggestionsScreenEvents, SuggestionsScreenSlots> {
}
export {};
