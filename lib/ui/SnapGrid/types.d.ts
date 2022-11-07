export declare const enum Field {
    LEFT = 0,
    TOP = 1,
    WIDTH = 2,
    HEIGHT = 3,
    NODE = 4
}
export declare type SnapItem = [number, number, number, number, HTMLElement];
export declare type Margin = [number, number];
export declare type SnapGridController = {
    layout: SnapItem[];
    cols: number;
    margin: Margin;
    columnSize: number;
    rowSize: number;
    maxCols: number;
    minCols: number;
    maxRows: number;
    minRows: number;
    mount: (gridContainerNode: HTMLElement) => void;
    resize: (gridWidth: number) => void;
    onDragStart: (e: MouseEvent) => void;
};
