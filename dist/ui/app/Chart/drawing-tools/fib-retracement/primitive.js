import { DrawingPrimitive } from '../primitive.js';
import { FibRetracementPaneView } from './pane-view.js';
export default class FibRetracementPrimitive extends DrawingPrimitive {
    __type = 'fib_retracement';
    _paneViews = [new FibRetracementPaneView(this)];
    updateEndPoint(point) {
        this._points[1] = point;
        this._paneViews[0].update();
        this._timeAxisViews[1].movePoint(point);
        this._priceAxisViews[1].movePoint(point);
        this.requestUpdate();
    }
}
