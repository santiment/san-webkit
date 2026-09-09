import type { ISeriesPrimitiveAxisView } from '@santiment-network/chart-next';
import type { DrawingPrimitive } from './primitive.js';
export declare abstract class DrawingAxisView implements ISeriesPrimitiveAxisView {
    protected _source: DrawingPrimitive<any>;
    protected _index: number;
    constructor(source: DrawingPrimitive<any>, index: number);
    abstract position: 'x' | 'y';
    abstract text(): string;
    coordinate(): -1 | import("@santiment-network/chart-next").Coordinate;
    visible(): boolean;
    textColor(): string;
    backColor(): string;
}
export declare class DrawingTimeAxisView extends DrawingAxisView {
    position: "x";
    text(): string;
}
export declare class DrawingPriceAxisView extends DrawingAxisView {
    position: "y";
    text(): string;
}
