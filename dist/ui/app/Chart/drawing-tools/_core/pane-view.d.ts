import type { Coordinate, IPrimitivePaneRenderer, IPrimitivePaneView, PrimitiveHoveredItem, PrimitivePaneViewZOrder } from '@santiment-network/chart-next';
import type { DrawingPrimitive } from './primitive.js';
import type { TViewPoint } from '../types.js';
import { DrawingAxisPaneRenderer, type TPaneRenderer } from './renderer.js';
export declare abstract class DrawingPaneView implements IPrimitivePaneView {
    protected _source: DrawingPrimitive<any>;
    protected abstract _renderer: TPaneRenderer;
    abstract get viewPoints(): TViewPoint[];
    isHovered: boolean;
    isSelected: boolean;
    constructor(source: DrawingPrimitive<any>);
    abstract update(): void;
    abstract renderer(): IPrimitivePaneRenderer | null;
    hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null;
    zOrder(): PrimitivePaneViewZOrder;
    move(diffXY: [number, number], handleIndices?: [number, number]): void;
    protected movePoint(xIndex: number, yIndex: number, diffX: number, diffY: number): void;
}
export declare abstract class DrawingAxisPaneView implements IPrimitivePaneView {
    _source: DrawingPrimitive<any>;
    _points: (Coordinate | null)[];
    _vertical: boolean;
    constructor(source: DrawingPrimitive<any>);
    update(): void;
    renderer(): DrawingAxisPaneRenderer | null;
    zOrder(): PrimitivePaneViewZOrder;
}
export declare class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
    _vertical: boolean;
}
export declare class DrawingTimeAxisPaneView extends DrawingAxisPaneView {
}
