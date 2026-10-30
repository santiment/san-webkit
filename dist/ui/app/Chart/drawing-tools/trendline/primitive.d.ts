import { type TLineStyles, type TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { TrendlinePaneView } from './pane-view.js';
export type TLineOptions = {
    lineWidth: number;
    strokeColor: string;
    lineStyle: TLineStyles;
};
export declare const LineOptionsDefaults: {
    readonly strokeColor: string;
    readonly lineWidth: 2;
    readonly lineStyle: 0;
};
export default class TrendlinePrimitive extends DrawingPrimitive<'trendline', TLineOptions> {
    __type: "trendline";
    protected _paneViews: TrendlinePaneView[];
    updateEndPoint(point: TViewPoint): void;
    protected constructOptions(options: Partial<TLineOptions>): {
        lineWidth: number;
        strokeColor: string;
        lineStyle: TLineStyles;
    };
}
