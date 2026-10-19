import type { TData, TPoint, TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { VerticalLinePaneView } from './pane-view.js';
import { type TLineOptions } from '../trendline/primitive.js';
export default class VerticalLinePrimitive extends DrawingPrimitive<'vertical-line', TLineOptions> {
    __type: "vertical-line";
    protected _paneViews: VerticalLinePaneView[];
    constructor(data: TData, options?: Partial<TLineOptions>);
    updateEndPoint(point: TViewPoint): void;
    protected mapDataPointsToViewPoints(): undefined | TViewPoint[];
    protected mapViewPointsToDataPoints(): undefined | TPoint[];
    select(): void;
}
