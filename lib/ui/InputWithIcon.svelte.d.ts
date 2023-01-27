/** @typedef {typeof __propDef.props}  InputWithIconProps */
/** @typedef {typeof __propDef.events}  InputWithIconEvents */
/** @typedef {typeof __propDef.slots}  InputWithIconSlots */
export default class InputWithIcon extends SvelteComponentTyped<{
    name: any;
    w: any;
    h: any;
    placeholder: any;
    icon: any;
    constraints: any;
    autofocus: any;
    type?: string | undefined;
    value?: string | undefined;
    big?: boolean | undefined;
    class?: string | undefined;
}, {
    input: Event;
    focus: FocusEvent;
    blur: FocusEvent;
    keydown: KeyboardEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    left: {};
    default: {};
}> {
}
export type InputWithIconProps = typeof __propDef.props;
export type InputWithIconEvents = typeof __propDef.events;
export type InputWithIconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name: any;
        w: any;
        h: any;
        placeholder: any;
        icon: any;
        constraints: any;
        autofocus: any;
        type?: string | undefined;
        value?: string | undefined;
        big?: boolean | undefined;
        class?: string | undefined;
    };
    events: {
        input: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        default: {};
    };
};
export {};
