import { SnapGridController, SnapItem } from './types';
export declare type DraggableCtx = {
    pageX: number;
    pageY: number;
    xDiff: number;
    yDiff: number;
    draggedNode: HTMLElement;
    dropzoneNode: HTMLElement;
    draggedItem: SnapItem;
};
declare type DragController = undefined | {
    onMove: (e: MouseEvent) => void;
    onEnd?: () => void;
};
export declare function Draggable(clb: (layout: SnapItem[], settings: SnapGridController) => (e: MouseEvent, ctx: DraggableCtx) => DragController, activeClassName: string): (layout: SnapItem[], settings: any) => {
    onDragStart: (e: MouseEvent) => void;
};
export {};
