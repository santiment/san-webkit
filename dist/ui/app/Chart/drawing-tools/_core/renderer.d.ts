import type { Coordinate, IPrimitivePaneRenderer } from '@santiment-network/chart-next';
import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { DrawingPaneView } from './pane-view.js';
import type { TViewPoint } from '../types.js';
export declare const RenderHitTest: {
    readonly PRIMITIVE: 1;
    readonly HANDLE: 2;
};
export type TRenderHitTestValue = (typeof RenderHitTest)[keyof typeof RenderHitTest];
export type TRenderHitTestData = {
    type: (typeof RenderHitTest)['PRIMITIVE'];
} | {
    type: (typeof RenderHitTest)['HANDLE'];
    indices: [number, number];
};
export interface TPaneRenderer extends IPrimitivePaneRenderer {
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
export declare class DrawingCompositePaneRenderer implements TPaneRenderer {
    _renderers: TPaneRenderer[];
    constructor(renderers: TPaneRenderer[]);
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
type THandleConfig = {
    pointIndices: [number, number];
};
export declare class HandleRenderer<GPaneView extends DrawingPaneView> {
    protected _paneView: GPaneView;
    private _config;
    private _size;
    constructor(paneView: GPaneView, config: THandleConfig);
    get viewPoint(): TViewPoint;
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
export declare class DrawingAxisPaneRenderer implements IPrimitivePaneRenderer {
    _points: (number | null)[];
    _fillColor: string;
    _vertical: boolean;
    constructor(points: (number | null)[], fillColor: string, vertical: boolean);
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
export declare function positionPoint(coor: number, pixelRatio: number): number;
export interface BitmapPositionLength {
    /** coordinate for use with a bitmap rendering scope */
    position: number;
    /** length for use with a bitmap rendering scope */
    length: number;
}
/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param px1 - x coordinate of the left of the rectangle
 * @param px2 - x coordinate of the right of the rectangle
 * @param py1 - y coordinate of the top of the rectangle
 * @param py2 - y coordinate of the bottom of the rectangle
 * @returns {boolean} - true if the point is outside the rectangle, false otherwise
 */
export declare function checkIsOutsideRect(x: Coordinate, y: Coordinate, px1: null | number, px2: null | number, py1: null | number, py2: null | number): boolean;
/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param p1 - first point of the line
 * @param p2 - second point of the line
 * @returns {boolean} - true if the point is outside the line, false otherwise
 */
export declare function checkIsOutsideLine(x: Coordinate, y: Coordinate, p1: {
    x: null | Coordinate;
    y: null | Coordinate;
}, p2: {
    x: null | Coordinate;
    y: null | Coordinate;
}, tolerance?: number): boolean;
export {};
