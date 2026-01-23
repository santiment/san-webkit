import type { Coordinate, ISeriesPrimitiveAxisView } from '@santiment-network/chart-next';
import type { TPoint } from './types.js';
import type { DrawingPrimitive } from './primitive.js';
export declare abstract class DrawingAxisView implements ISeriesPrimitiveAxisView {
    protected _source: DrawingPrimitive<any>;
    protected _point: TPoint;
    protected _pos: Coordinate | null;
    constructor(source: DrawingPrimitive<any>, point: TPoint);
    abstract update(): void;
    abstract text(): string;
    coordinate(): -1 | Coordinate;
    textColor(): string;
    backColor(): string;
    movePoint(p: TPoint): void;
}
export declare class DrawingTimeAxisView extends DrawingAxisView {
    update(): void;
    text(): string;
}
export declare class DrawingPriceAxisView extends DrawingAxisView {
    update(): void;
    text(): string;
}
