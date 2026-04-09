// https://github.com/tradingview/lightweight-charts/blob/master/plugin-examples/src/plugins/rectangle-drawing-tool/rectangle-drawing-tool.ts#L267
import { getBrowserCssVariable } from '../../../../utils/index.js';
import { DrawingPriceAxisView, DrawingTimeAxisView } from './axis-view.js';
import {} from '../types.js';
import { DrawingPaneView, DrawingPriceAxisPaneView, DrawingTimeAxisPaneView, } from './pane-view.js';
export class DrawingPrimitive {
    _chart = undefined;
    _series = undefined;
    _seriesId = undefined;
    _dataPoints;
    _viewPoints = [];
    _finalizedViewPoints = [];
    _options;
    _timeAxisViews = [];
    _priceAxisViews = [];
    _priceAxisPaneViews = [];
    _timeAxisPaneViews = [];
    requestUpdate() {
        if (this._requestUpdate)
            this._requestUpdate();
    }
    _requestUpdate;
    constructor(data, options = {}) {
        this._dataPoints = data.points;
        this._options = {
            axisLabels: {
                bg: getBrowserCssVariable('casper'),
                textColor: getBrowserCssVariable('black'),
            },
            ...options,
        };
        for (let i = 0; i < data.points.length; i++) {
            this._priceAxisViews.push(new DrawingPriceAxisView(this, i));
            this._timeAxisViews.push(new DrawingTimeAxisView(this, i));
        }
        if (data.points.length > 1) {
            this._priceAxisPaneViews.push(new DrawingPriceAxisPaneView(this));
            this._timeAxisPaneViews.push(new DrawingTimeAxisPaneView(this));
        }
    }
    mapDataPointsToViewPoints() {
        const timeScale = this._chart.timeScale();
        const series = this._series;
        if (!series)
            return;
        return this._dataPoints.map((point) => ({
            x: timeScale.timeToCoordinate(point.time),
            y: series.priceToCoordinate(point.price),
        }));
    }
    convertDataToViewPoints() {
        const viewPoints = this.mapDataPointsToViewPoints();
        if (!viewPoints)
            return;
        this._viewPoints = viewPoints;
        this._finalizedViewPoints = this._viewPoints.map((point) => ({ ...point }));
    }
    attached({ chart, series, requestUpdate }) {
        this._chart = chart;
        this._series = series;
        this.convertDataToViewPoints();
        this._series.subscribeDataChanged(this._fireDataUpdated);
        this._requestUpdate = requestUpdate;
        this.requestUpdate();
    }
    detached() {
        this._series?.unsubscribeDataChanged(this._fireDataUpdated);
        this._chart = undefined;
        this._series = undefined;
        this._seriesId = undefined;
        this._requestUpdate = undefined;
    }
    /**
     * Completely removing primitive from a series
     */
    delete() {
        this._series?.detachPrimitive(this);
    }
    attachTo(series, id) {
        if (!series || this._series === series) {
            return;
        }
        if (this._series) {
            // NOTE: Converting view points from old series to data points for new series to keep the drawings on same positions
            this._series = series;
            this.finalize();
            this.detached();
        }
        this._seriesId = id;
        series.attachPrimitive(this);
    }
    get points() {
        return this._dataPoints;
    }
    get chart() {
        return this._chart;
    }
    get series() {
        return this._series;
    }
    get options() {
        return this._options;
    }
    _oldPriceRange;
    _oldTimeCache = null;
    validatePoints() {
        // @ts-expect-error Getting ref to a internal cached property
        const currentTimeCache = this._chart?.timeScale()._timeScale._timeMarksCache;
        if (!currentTimeCache) {
            this._oldTimeCache = null;
            return;
        }
        // @ts-expect-error Getting ref to a internal cached property
        const currentPriceRange = this._series?.priceScale()._priceScale()._priceRange;
        if (this._oldTimeCache && currentPriceRange === this._oldPriceRange) {
            return;
        }
        this._oldPriceRange = currentPriceRange;
        this._oldTimeCache = currentTimeCache;
        this.convertDataToViewPoints();
    }
    updateAllViews() {
        //if (!this._options.visible) {
        //  return
        //}
        this.validatePoints();
        this._paneViews.forEach((pw) => pw.update());
        this._priceAxisPaneViews.forEach((pw) => pw.update());
        this._timeAxisPaneViews.forEach((pw) => pw.update());
    }
    priceAxisViews() {
        return this._priceAxisViews;
    }
    timeAxisViews() {
        return this._timeAxisViews;
    }
    paneViews() {
        return this._paneViews;
    }
    priceAxisPaneViews() {
        return this._priceAxisPaneViews;
    }
    timeAxisPaneViews() {
        return this._timeAxisPaneViews;
    }
    applyOptions(options) {
        this._options = { ...this._options, ...options };
        this.requestUpdate();
    }
    // This method is a class property to maintain the
    // lexical 'this' scope (due to the use of the arrow function)
    // and to ensure its reference stays the same, so we can unsubscribe later.
    _fireDataUpdated = (scope) => {
        if (this.dataUpdated) {
            this.dataUpdated(scope);
        }
    };
    sortViewPoints() { }
    hitTest(x, y) {
        const [paneView] = this._paneViews;
        return paneView.hitTest(x, y);
    }
    isHovered() {
        return this._paneViews[0].isHovered;
    }
    isSelected() {
        return this._paneViews[0].isSelected;
    }
    select(value) {
        this._paneViews[0].isSelected = value;
        this.requestUpdate();
    }
    move(diffXY, handleIndices) {
        this._paneViews.forEach((pw) => pw.move(diffXY, handleIndices));
        this.requestUpdate();
    }
    get viewPoints() {
        return this._viewPoints;
    }
    get finalizedViewPoints() {
        return this._finalizedViewPoints;
    }
    mapViewPointsToDataPoints() {
        const timeScale = this._chart.timeScale();
        const series = this._series;
        if (!series)
            return;
        return this._viewPoints.map((point) => ({
            time: timeScale.coordinateToTime(point.x),
            price: series.coordinateToPrice(point.y),
        }));
    }
    /**
     * Convert view points to data points
     * @returns
     */
    finalize() {
        if (!this._chart)
            return;
        this.sortViewPoints?.();
        const dataPoints = this.mapViewPointsToDataPoints();
        if (!dataPoints)
            return;
        this._dataPoints = dataPoints;
        this._finalizedViewPoints = this._viewPoints.map((point) => ({ ...point }));
    }
    get seriesId() {
        return this._seriesId;
    }
    export() {
        this.finalize();
        return {
            series: this._seriesId,
            points: this.points,
        };
    }
}
