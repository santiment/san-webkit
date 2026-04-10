import type { TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { TrendlinePaneView } from './pane-view.js';
export default class TrendlinePrimitive extends DrawingPrimitive<'trendline'> {
    __type: "trendline";
    protected _paneViews: TrendlinePaneView[];
    updateEndPoint(point: TViewPoint): void;
}
