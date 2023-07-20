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
export type ChangeProps = typeof __propDef.props;
export type ChangeEvents = typeof __propDef.events;
export type ChangeSlots = typeof __propDef.slots;
export default class Change extends SvelteComponentTyped<ChangeProps, ChangeEvents, ChangeSlots> {
}
export {};
