import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SettingProps = typeof __propDef.props;
export type SettingEvents = typeof __propDef.events;
export type SettingSlots = typeof __propDef.slots;
export default class Setting extends SvelteComponentTyped<SettingProps, SettingEvents, SettingSlots> {
}
export {};
