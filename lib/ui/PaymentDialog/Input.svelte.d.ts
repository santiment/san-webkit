import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        title: string;
        name?: string | undefined;
        placeholder?: string | undefined;
        required?: boolean | undefined;
    };
    events: {
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        input: {};
        default: {};
    };
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
