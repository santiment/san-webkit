import type { TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { FibRetracementPaneView } from './pane-view.js';
export default class FibRetracementPrimitive extends DrawingPrimitive<'fib_retracement'> {
    __type: "fib_retracement";
    protected _paneViews: FibRetracementPaneView[];
    updateEndPoint(point: TViewPoint): void;
}
