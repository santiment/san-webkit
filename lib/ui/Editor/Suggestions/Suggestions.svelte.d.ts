import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key?: string | undefined;
        items?: any[] | undefined;
        position: {
            x: number;
            y: number;
            bottom: number;
        };
        loading?: boolean | undefined;
        setNode: any;
        ctx?: {} | undefined;
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
export declare type SuggestionsProps = typeof __propDef.props;
export declare type SuggestionsEvents = typeof __propDef.events;
export declare type SuggestionsSlots = typeof __propDef.slots;
export default class Suggestions extends SvelteComponentTyped<SuggestionsProps, SuggestionsEvents, SuggestionsSlots> {
}
export {};
