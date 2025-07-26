import { DrawingToolAxisView } from '../axis-view.js'

export class RectangleTimeAxisView extends DrawingToolAxisView {
  update() {
    const timeScale = this._source.chart.timeScale()
    this._pos = timeScale.timeToCoordinate(this._p.time)
  }
  text() {
    return this._source._options.timeLabelFormatter(this._p.time)
  }
}

export class RectanglePriceAxisView extends DrawingToolAxisView {
  update() {
    const series = this._source.series
    this._pos = series.priceToCoordinate(this._p.price)
  }
  text() {
    return this._source._options.priceLabelFormatter(this._p.price)
  }
}
