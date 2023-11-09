import type { ScrollContext } from '../dnd/scroll';
export declare const enum Field {
    LEFT = 0,
    TOP = 1,
    WIDTH = 2,
    HEIGHT = 3,
    NODE = 4
}
/**  [left, top, width, height, htmlNode] */
export type SnapItem = [number, number, number, number, HTMLElement] & SnapItemOptions;
export type SnapItemOptions = Partial<{
    minRows: number;
    minCols: number;
}>;
export type Margin = [number, number];
export type SnapGridController = {
    gridContainerNode: HTMLElement;
    gridWidth: number;
    layout: SnapItem[];
    cols: number;
    margin: Margin;
    columnSize: number;
    rowSize: number;
    maxCols: number;
    minCols: number;
    maxRows: number;
    minRows: number;
    readonly: boolean;
    mount: (gridContainerNode: HTMLElement) => void;
    resize: (gridWidth: number) => void;
    updateLayout: (layout: SnapItem[]) => void;
    setReadonly: (value: boolean) => void;
    onDragStart: (e: MouseEvent) => void;
} & ScrollContext;
export type Handlers = Partial<{
    onStart: () => void;
    onEnd: () => void;
}>;
