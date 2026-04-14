import { DrawingPrimitive } from '../_core/primitive.js';
import { TrendlinePaneView } from './pane-view.js';
export default class TrendlinePrimitive extends DrawingPrimitive {
    __type = 'trendline';
    _paneViews = [new TrendlinePaneView(this)];
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this.requestUpdate();
    }
}
