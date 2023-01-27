import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SuggestionsScreenProps = typeof __propDef.props;
export declare type SuggestionsScreenEvents = typeof __propDef.events;
export declare type SuggestionsScreenSlots = typeof __propDef.slots;
export default class SuggestionsScreen extends SvelteComponentTyped<SuggestionsScreenProps, SuggestionsScreenEvents, SuggestionsScreenSlots> {
}
export {};
