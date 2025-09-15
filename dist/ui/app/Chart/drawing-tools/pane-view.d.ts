import type { Coordinate, IPrimitivePaneRenderer, IPrimitivePaneView, PrimitivePaneViewZOrder } from '@santiment-network/chart-next';
import type { DrawingPrimitive } from './primitive.js';
import { DrawingAxisPaneRenderer } from './renderer.js';
export declare abstract class DrawingPaneView implements IPrimitivePaneView {
    protected _source: DrawingPrimitive<any>;
    constructor(source: DrawingPrimitive<any>);
    abstract update(): void;
    abstract renderer(): IPrimitivePaneRenderer | null;
}
export declare abstract class DrawingAxisPaneView implements IPrimitivePaneView {
    _source: DrawingPrimitive<any>;
    _points: (Coordinate | null)[];
    _vertical: boolean;
    constructor(source: DrawingPrimitive<any>);
    abstract getPoints(): (Coordinate | null)[];
    update(): void;
    renderer(): DrawingAxisPaneRenderer;
    zOrder(): PrimitivePaneViewZOrder;
}
export declare class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
    _vertical: boolean;
    getPoints(): (Coordinate | null)[];
}
export declare class DrawingTimeAxisPaneView extends DrawingAxisPaneView {
    getPoints(): (Coordinate | null)[];
}
