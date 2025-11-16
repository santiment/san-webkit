import type { TPoint } from '../types.js';
import { DrawingPrimitive } from '../primitive.js';
import { FibRetracementPaneView } from './pane-view.js';
export default class FibRetracementPrimitive extends DrawingPrimitive<'fib_retracement'> {
    __type: "fib_retracement";
    protected _paneViews: FibRetracementPaneView[];
    updateEndPoint(point: TPoint): void;
}
