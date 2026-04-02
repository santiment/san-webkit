import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { IPrimitivePaneRenderer } from '@santiment-network/chart-next';
import type { TViewPoint } from '../types.js';
export declare class RectanglePaneRenderer implements IPrimitivePaneRenderer {
    _p1: TViewPoint;
    _p2: TViewPoint;
    _fillColor: string;
    constructor(p1: TViewPoint, p2: TViewPoint, fillColor: string);
    draw(target: CanvasRenderingTarget2D): void;
}
/**
 * Determines the bitmap position and length for a dimension of a shape to be drawn.
 * @param position1Media - media coordinate for the first point
 * @param position2Media - media coordinate for the second point
 * @param pixelRatio - pixel ratio for the corresponding axis (vertical or horizontal)
 * @returns Position of of the start point and length dimension.
 */
export declare function positionsBox(position1Media: number, position2Media: number, pixelRatio: number): BitmapPositionLength;
export interface BitmapPositionLength {
    /** coordinate for use with a bitmap rendering scope */
    position: number;
    /** length for use with a bitmap rendering scope */
    length: number;
}
