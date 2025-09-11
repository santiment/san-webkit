import { DrawingPrimitive } from '../primitive.js';
import { RectanglePaneView } from './pane-view.js';
export default class RectanglePrimitive extends DrawingPrimitive {
    __type = 'rectangle';
    _paneViews = [new RectanglePaneView(this)];
    updateEndPoint(point) {
        this._points[1] = point;
        //this._p2 = point
        this._paneViews[0].update();
        this._timeAxisViews[1].movePoint(point);
        this._priceAxisViews[1].movePoint(point);
        this.requestUpdate();
    }
}
