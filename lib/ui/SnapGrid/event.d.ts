import { Handlers, SnapGridController, SnapItem } from './types';
export type DraggableCtx = {
    pageX: number;
    pageY: number;
    xDiff: number;
    yDiff: number;
    draggedNode: HTMLElement;
    dropzoneNode: HTMLElement;
    draggedItem: SnapItem;
};
type DragController = {
    onMove: (e: MouseEvent) => void;
    onEnd?: () => void;
};
export declare function Draggable(clb: (settings: SnapGridController) => (currentTarget: HTMLElement, ctx: DraggableCtx) => undefined | DragController, activeClassName: string): (settings: SnapGridController, handlers?: Handlers) => {
    onDragStart: (e: MouseEvent) => void;
};
export {};
