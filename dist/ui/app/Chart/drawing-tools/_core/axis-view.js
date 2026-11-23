export class DrawingAxisView {
    _source;
    _index;
    constructor(source, index) {
        this._source = source;
        this._index = index;
    }
    coordinate() {
        return this._source.viewPoints[this._index][this.position] ?? -1;
    }
    visible() {
        return this._source.isSelected();
    }
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
}
export class DrawingTimeAxisView extends DrawingAxisView {
    position = 'x';
    text() {
        const chart = this._source.chart;
        const point = this._source.points[this._index];
        return chart.options().localization.timeFormatter?.(point.time) || point.time.toString();
    }
}
export class DrawingPriceAxisView extends DrawingAxisView {
    position = 'y';
    text() {
        const series = this._source.series;
        return series.priceFormatter().format(this._source.points[this._index].value);
    }
}
