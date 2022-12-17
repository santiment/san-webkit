import { SvelteComponentTyped } from "svelte";
/**
   * If scrolling cousing issues, add class="relative" to the trigger's parent
   */
import type { Align, Position } from './utils';
declare const __propDef: {
    props: {
        class?: string | undefined;
        isEnabled?: boolean | undefined;
        isOpened?: boolean | undefined;
        activeClass?: string | undefined;
        position?: Position | undefined;
        align?: Align | undefined;
        on?: "click" | "mouseenter" | undefined;
        duration?: number | undefined;
        openDelay?: number | undefined;
        closeTimeout?: number | undefined;
        dark?: boolean | undefined;
        trigger?: Element | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
        scrollParent?: Element | undefined;
        passive?: boolean | undefined;
        static?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
        default: {
            on: "click" | "mouseenter";
            setTrigger: (value?: Element) => Element | undefined;
            startOpenTimer: () => void;
            destroy: () => void;
        };
        tooltip: {};
    };
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
