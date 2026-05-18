import { DrawingPrimitive } from '../_core/primitive.js';
import { HorizontalLinePaneView } from './pane-view.js';
import { LineOptionsDefaults } from '../trendline/primitive.js';
export default class HorizontalLinePrimitive extends DrawingPrimitive {
    __type = 'horizontal-line';
    _paneViews = [new HorizontalLinePaneView(this)];
    constructor(data, options = {}) {
        data.points = data.points.slice(0, 1);
        super(data, {
            ...LineOptionsDefaults,
            ...options,
        });
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
            y: series.priceToCoordinate(point.value),
        }));
    }
    mapViewPointsToDataPoints() {
        const series = this._series;
        if (!series)
            return;
        return this._viewPoints.map((point) => ({
            time: 0,
            value: series.coordinateToPrice(point.y),
        }));
    }
    select() {
        this._paneViews[0].isSelected = true;
    }
}
