export class DrawingAxisView {
    _source;
    _point;
    _pos = null;
    constructor(source, point) {
        this._source = source;
        this._point = point;
    }
    coordinate() {
        return this._pos ?? -1;
    }
    //visible(): boolean {
    //  return this._source._options.showLabels
    //}
    //
    //tickVisible(): boolean {
    //  return this._source._options.showLabels
    //}
    //
    textColor() {
        return this._source.options.axisLabels.textColor;
    }
    backColor() {
        return this._source.options.axisLabels.bg;
    }
    movePoint(p) {
        this._point = p;
        this.update();
    }
}
export class DrawingTimeAxisView extends DrawingAxisView {
    update() {
        const timeScale = this._source.chart.timeScale();
        this._pos = timeScale.timeToCoordinate(this._point.time);
    }
    text() {
        const chart = this._source.chart;
        return (chart.options().localization.timeFormatter?.(this._point.time) || this._point.time.toString());
    }
}
export class DrawingPriceAxisView extends DrawingAxisView {
    update() {
        const series = this._source.series;
        this._pos = series.priceToCoordinate(this._point.price);
    }
    text() {
        const series = this._source.series;
        return series.priceFormatter().format(this._point.price);
    }
}
