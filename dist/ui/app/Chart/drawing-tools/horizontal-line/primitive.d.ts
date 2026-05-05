import type { TData, TOptions, TPoint, TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { HorizontalLinePaneView } from './pane-view.js';
export default class HorizontalLinePrimitive extends DrawingPrimitive<'horizontal-line'> {
    __type: "horizontal-line";
    protected _paneViews: HorizontalLinePaneView[];
    constructor(data: TData, options?: Partial<TOptions>);
    updateEndPoint(point: TViewPoint): void;
    protected mapDataPointsToViewPoints(): undefined | TViewPoint[];
    protected mapViewPointsToDataPoints(): undefined | TPoint[];
    select(): void;
}
