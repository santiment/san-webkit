// https://github.com/tradingview/lightweight-charts/blob/master/plugin-examples/src/plugins/rectangle-drawing-tool/rectangle-drawing-tool.ts#L267
import { getBrowserCssVariable } from '../../../utils/index.js';
import { DrawingPriceAxisView, DrawingTimeAxisView } from './axis-view.js';
import {} from './types.js';
import { DrawingPaneView, DrawingPriceAxisPaneView, DrawingTimeAxisPaneView, } from './pane-view.js';
export class DrawingPrimitive {
    _chart = undefined;
    _series = undefined;
    _points;
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
    constructor(points, options = {}) {
        this._points = points;
        this._options = {
            axisLabels: {
                bg: getBrowserCssVariable('casper'),
                textColor: getBrowserCssVariable('black'),
            },
            ...options,
        };
        for (let i = 0; i < points.length; i++) {
            this._priceAxisViews.push(new DrawingPriceAxisView(this, points[i]));
            this._timeAxisViews.push(new DrawingTimeAxisView(this, points[i]));
        }
        if (points.length > 1) {
            this._priceAxisPaneViews.push(new DrawingPriceAxisPaneView(this));
            this._timeAxisPaneViews.push(new DrawingTimeAxisPaneView(this));
        }
    }
    attached({ chart, series, requestUpdate }) {
        this._chart = chart;
        this._series = series;
        this._series.subscribeDataChanged(this._fireDataUpdated);
        this._requestUpdate = requestUpdate;
        this.requestUpdate();
    }
    detached() {
        this._series?.unsubscribeDataChanged(this._fireDataUpdated);
        this._chart = undefined;
        this._series = undefined;
        this._requestUpdate = undefined;
    }
    get points() {
        return this._points;
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
    updateAllViews() {
        //if (!this._options.visible) {
        //  return
        //}
        this._paneViews.forEach((pw) => pw.update());
        this._timeAxisViews.forEach((pw) => pw.update());
        this._priceAxisViews.forEach((pw) => pw.update());
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
}
