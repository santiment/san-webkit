import { DrawingPrimitive } from '../_core/primitive.js';
import { FibRetracementPaneView } from './pane-view.js';
export default class FibRetracementPrimitive extends DrawingPrimitive {
    __type = 'fib_retracement';
    _paneViews = [new FibRetracementPaneView(this)];
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this._paneViews[0].update();
        this.requestUpdate();
    }
    constructOptions(options) {
        return { lineWidth: 2, ...options };
    }
}
