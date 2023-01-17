import type { SnapGridController, SnapItem } from './types';
/** Ascending sort - top-to-bottom & left-to-right */
export declare const sortLayout: (layout: SnapItem[]) => SnapItem[];
export declare function Dropzone(draggedNode: HTMLElement): HTMLDivElement;
export declare type GridController = ReturnType<typeof Grid>;
export declare function Grid(): {
    getRow([iLeft, _, iWidth]: SnapItem, iRight?: number): number;
    place([iLeft, iTop, iWidth, iHeight]: SnapItem, iRight?: number, iBottom?: number): void;
};
export declare function normalizeGrid(sortedLayout: SnapItem[], changedItems?: Set<SnapItem>, draggedItem?: SnapItem, onDraggedItemNormalize?: (oldTop: number, newTop: number) => void): void;
export declare function resolveDraggedCollisions(sortedLayout: SnapItem[], draggedItem: SnapItem, draggedStartBottom: number, isDraggingDown: boolean): Set<SnapItem>;
export declare function updateGridContainerHeight(settings: SnapGridController): void;
export declare function setGridContainerHeight(rows: number, { gridContainerNode, rowSize, margin }: SnapGridController): void;
