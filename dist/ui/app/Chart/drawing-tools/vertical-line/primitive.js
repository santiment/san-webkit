import { DrawingPrimitive } from '../_core/primitive.js';
import { VerticalLinePaneView } from './pane-view.js';
import { LineOptionsDefaults } from '../trendline/primitive.js';
export default class VerticalLinePrimitive extends DrawingPrimitive {
    __type = 'vertical-line';
    _paneViews = [new VerticalLinePaneView(this)];
    constructor(data, options = {}) {
        data.points = data.points.slice(0, 1);
        super(data, {
            ...LineOptionsDefaults,
            ...options,
        });
        this._priceAxisViews.length = 0;
        this._priceAxisPaneViews.length = 0;
    }
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this.requestUpdate();
    }
    mapDataPointsToViewPoints() {
        const timeScale = this.chart.timeScale();
        // @ts-expect-error
        const y = (this.series.getPane()._pane._height / 2);
        return this._dataPoints.map((point) => ({
            x: timeScale.timeToCoordinate(point.time),
            y,
        }));
    }
    mapViewPointsToDataPoints() {
        const timeScale = this.chart.timeScale();
        return this._viewPoints.map((point) => ({
            time: timeScale.coordinateToTime(point.x),
            value: 0,
        }));
    }
    select() {
        this._paneViews[0].isSelected = true;
    }
}
