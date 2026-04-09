import { DrawingPrimitive } from '../_core/primitive.js';
import { HorizontalLinePaneView } from './pane-view.js';
export default class HorizontalLinePrimitive extends DrawingPrimitive {
    __type = 'horizontal-line';
    _paneViews = [new HorizontalLinePaneView(this)];
    constructor(dataPoints, options = {}) {
        super(dataPoints.slice(0, 1), options);
        this._timeAxisViews.length = 0;
        this._timeAxisPaneViews.length = 0;
    }
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this.requestUpdate();
    }
    mapDataPointsToViewPoints() {
        const series = this._series;
        if (!series)
            return;
        // @ts-expect-error
        const x = (this.series.getPane()._pane._width / 2);
        return this._dataPoints.map((point) => ({
            x,
            y: series.priceToCoordinate(point.price),
        }));
    }
    mapViewPointsToDataPoints() {
        const series = this._series;
        if (!series)
            return;
        return this._viewPoints.map((point) => ({
            time: 0,
            price: series.coordinateToPrice(point.y),
        }));
    }
    select() {
        this._paneViews[0].isSelected = true;
    }
}
