import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RepliedToProps = typeof __propDef.props;
export declare type RepliedToEvents = typeof __propDef.events;
export declare type RepliedToSlots = typeof __propDef.slots;
export default class RepliedTo extends SvelteComponentTyped<RepliedToProps, RepliedToEvents, RepliedToSlots> {
}
export {};
