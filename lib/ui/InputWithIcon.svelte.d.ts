import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        icon: string;
        w: number | string;
        h?: string | number | undefined;
        type?: string | undefined;
        placeholder: undefined | string;
        name?: undefined | string;
        big?: boolean | undefined;
        constraints?: any;
        value?: string | undefined;
        autofocus?: boolean | undefined;
    };
    events: {
        input: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        default: {};
    };
};
export declare type InputWithIconProps = typeof __propDef.props;
export declare type InputWithIconEvents = typeof __propDef.events;
export declare type InputWithIconSlots = typeof __propDef.slots;
export default class InputWithIcon extends SvelteComponentTyped<InputWithIconProps, InputWithIconEvents, InputWithIconSlots> {
}
export {};
