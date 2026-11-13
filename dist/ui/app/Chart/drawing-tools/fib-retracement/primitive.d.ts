import type { TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { FibRetracementPaneView } from './pane-view.js';
export type TFibRetracementOptions = {
    lineWidth: number;
};
export default class FibRetracementPrimitive extends DrawingPrimitive<'fib-retracement', TFibRetracementOptions> {
    __type: "fib-retracement";
    protected _paneViews: FibRetracementPaneView[];
    updateEndPoint(point: TViewPoint): void;
    protected constructOptions(options: Partial<TFibRetracementOptions>): {
        lineWidth: number;
    };
}
