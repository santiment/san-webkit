import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        desktop?: boolean | undefined;
        laptop?: boolean | undefined;
        tablet?: boolean | undefined;
        phone?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OnlyOnDeviceProps = typeof __propDef.props;
export type OnlyOnDeviceEvents = typeof __propDef.events;
export type OnlyOnDeviceSlots = typeof __propDef.slots;
export default class OnlyOnDevice extends SvelteComponentTyped<OnlyOnDeviceProps, OnlyOnDeviceEvents, OnlyOnDeviceSlots> {
}
export {};
