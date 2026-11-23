import type { TData, TPoint, TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { HorizontalLinePaneView } from './pane-view.js';
import { type TLineOptions } from '../trendline/primitive.js';
export default class HorizontalLinePrimitive extends DrawingPrimitive<'horizontal-line', TLineOptions> {
    __type: "horizontal-line";
    protected _paneViews: HorizontalLinePaneView[];
    constructor(data: TData, options?: Partial<TLineOptions>);
    updateEndPoint(point: TViewPoint): void;
    protected mapDataPointsToViewPoints(): undefined | TViewPoint[];
    protected mapViewPointsToDataPoints(): undefined | TPoint[];
    select(): void;
}
