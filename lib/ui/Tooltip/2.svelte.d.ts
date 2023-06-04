import { SvelteComponentTyped } from "svelte";
import type { Placement } from '@floating-ui/dom';
declare const __propDef: {
    props: {
        class?: string | undefined;
        dark?: boolean | undefined;
        isOpened?: boolean | undefined;
        style?: string | undefined;
        position?: Placement | undefined;
        activeClass?: string | undefined;
        on?: "click" | "mouseenter" | undefined;
        duration?: number | undefined;
        openDelay?: number | undefined;
        closeDelay?: number | undefined;
        margin?: number | undefined;
        tooltip?: HTMLElement | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
        };
        tooltip: {};
    };
};
export type A2Props = typeof __propDef.props;
export type A2Events = typeof __propDef.events;
export type A2Slots = typeof __propDef.slots;
export default class A2 extends SvelteComponentTyped<A2Props, A2Events, A2Slots> {
}
export {};
