import { SvelteComponentTyped } from "svelte";
import type { OffsetOptions, Placement } from '@floating-ui/dom';
declare const __propDef: {
    props: {
        class?: string | undefined;
        dark?: boolean | undefined;
        isOpened?: boolean | undefined;
        style?: string | undefined;
        position?: Placement | undefined;
        activeClass?: string | undefined;
        overflowFlip?: boolean | undefined;
        on?: "click" | "mouseenter" | undefined;
        duration?: number | undefined;
        clickaway?: boolean | undefined;
        openDelay?: number | undefined;
        closeDelay?: number | undefined;
        margin?: OffsetOptions | undefined;
        onTriggerClick?: ((e: MouseEvent) => void) | null | undefined;
        tooltip?: HTMLElement | null | undefined;
        open?: (() => void) | undefined;
        close?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
            close: () => void;
        };
        tooltip: {
            close: () => void;
        };
    };
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponentTyped<TooltipProps, TooltipEvents, TooltipSlots> {
    get open(): () => void;
    get close(): () => void;
}
export {};
