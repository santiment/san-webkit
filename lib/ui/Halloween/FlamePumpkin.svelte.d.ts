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
export type FlamePumpkinProps = typeof __propDef.props;
export type FlamePumpkinEvents = typeof __propDef.events;
export type FlamePumpkinSlots = typeof __propDef.slots;
export default class FlamePumpkin extends SvelteComponentTyped<FlamePumpkinProps, FlamePumpkinEvents, FlamePumpkinSlots> {
}
export {};
