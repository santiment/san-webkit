export type Options = {
    scroll?: boolean;
    cloner?: (node: DragElement) => HTMLElement;
    onDragEnd?: (oldIndex: number, newIndex: number) => void;
};
export type Context = Options & {
    grid: [number, DragElement[]][];
    nodes: DragElement[];
    recalcGrid: () => void;
    isDisabled: boolean;
    minDiff?: number;
    scrollParent: HTMLElement | undefined | null;
    scrollInterval: number | undefined;
};
export type DragElement = HTMLElement & {
    isDndHooked: boolean;
    dnd: {
        ctx: Context;
        nodeIndex: number;
        clientRect: {
            top: number;
            bottom: number;
            left: number;
            right: number;
            width: number;
            height: number;
            centerX: number;
            centerY: number;
        };
    };
};
/** Requires all sortable nodes to be present in the same parent node */
export declare function newSortableContext(options?: Options): {
    ctx: Context;
    toggle(value: boolean): void;
    addItem(node: HTMLElement): void;
};
export declare function newDndItem(node: DragElement): void;
