import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isActive?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckboxProps = typeof __propDef.props;
export declare type CheckboxEvents = typeof __propDef.events;
export declare type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
