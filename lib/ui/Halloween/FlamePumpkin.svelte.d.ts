import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        small?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FlamePumpkinProps = typeof __propDef.props;
export declare type FlamePumpkinEvents = typeof __propDef.events;
export declare type FlamePumpkinSlots = typeof __propDef.slots;
export default class FlamePumpkin extends SvelteComponentTyped<FlamePumpkinProps, FlamePumpkinEvents, FlamePumpkinSlots> {
}
export {};
