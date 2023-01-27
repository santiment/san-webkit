import { SvelteComponentTyped } from "svelte";
export declare function percentChange(oldValue: number, newValue: number): number;
export declare function formatPercentChange(value: number): number;
declare const __propDef: {
    props: {
        class?: string | undefined;
        change: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ChangeProps = typeof __propDef.props;
export declare type ChangeEvents = typeof __propDef.events;
export declare type ChangeSlots = typeof __propDef.slots;
export default class Change extends SvelteComponentTyped<ChangeProps, ChangeEvents, ChangeSlots> {
}
export {};
