import type { TData, TOptions, TPoint, TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { VerticalLinePaneView } from './pane-view.js';
export default class VerticalLinePrimitive extends DrawingPrimitive<'vertical-line'> {
    __type: "vertical-line";
    protected _paneViews: VerticalLinePaneView[];
    constructor(data: TData, options?: Partial<TOptions>);
    updateEndPoint(point: TViewPoint): void;
    protected mapDataPointsToViewPoints(): undefined | TViewPoint[];
    protected mapViewPointsToDataPoints(): undefined | TPoint[];
    select(): void;
}
