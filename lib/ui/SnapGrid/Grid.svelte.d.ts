import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        tag?: string | undefined;
        isDragging?: boolean | undefined;
        cols?: number | undefined;
        rowSize?: number | undefined;
        layout: any[];
        maxCols: number;
        minCols: number;
        maxRows: number;
        minRows: number;
        onLayoutChange?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            i: any;
            gridItem: (node: HTMLElement) => void;
        };
    };
};
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
export default class Grid extends SvelteComponentTyped<GridProps, GridEvents, GridSlots> {
}
export {};
