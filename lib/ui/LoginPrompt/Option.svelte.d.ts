export function openPopup(e: any): void;
/** @typedef {typeof __propDef.props}  OptionProps */
/** @typedef {typeof __propDef.events}  OptionEvents */
/** @typedef {typeof __propDef.slots}  OptionSlots */
export default class Option extends SvelteComponentTyped<{
    title: any;
    href: any;
    icon: any;
    class?: string | undefined;
    loading?: boolean | undefined;
    tag?: string | undefined;
    isSignUp?: boolean | undefined;
    prefetch?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OptionProps = typeof __propDef.props;
export type OptionEvents = typeof __propDef.events;
export type OptionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        href: any;
        icon: any;
        class?: string | undefined;
        loading?: boolean | undefined;
        tag?: string | undefined;
        isSignUp?: boolean | undefined;
        prefetch?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
