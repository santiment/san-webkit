import { DrawingAxisPaneRenderer } from './renderer.js';
export class DrawingPaneView {
    _source;
    constructor(source) {
        this._source = source;
    }
}
export class DrawingAxisPaneView {
    _source;
    _points = [];
    _vertical = false;
    constructor(source) {
        this._source = source;
    }
    update() {
        this._points = this.getPoints();
    }
    renderer() {
        return new DrawingAxisPaneRenderer(this._points, this._source.options.axisLabels.bg, this._vertical);
    }
    zOrder() {
        return 'bottom';
    }
}
export class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
    _vertical = true;
    getPoints() {
        const series = this._source.series;
        return this._source.points.map((point) => series.priceToCoordinate(point.price));
    }
}
export class DrawingTimeAxisPaneView extends DrawingAxisPaneView {
    getPoints() {
        const timeScale = this._source.chart.timeScale();
        return this._source.points.map((point) => timeScale.timeToCoordinate(point.time));
    }
}
