import type { Coordinate, IPrimitivePaneView } from '@santiment-network/chart-next'
import type { ViewPoint } from '../types.js'
import type { RectanglePrimitive } from './primitive.js'

import { RectanglePaneRenderer } from './renderer.js'
import { DrawingToolAxisPaneView } from '../pane-view.js'

export class RectanglePaneView implements IPrimitivePaneView {
  _source: RectanglePrimitive
  _p1: ViewPoint = { x: null, y: null }
  _p2: ViewPoint = { x: null, y: null }

  constructor(source: RectanglePrimitive) {
    this._source = source
  }

  update() {
    const series = this._source.series
    const y1 = series.priceToCoordinate(this._source._p1.price)
    const y2 = series.priceToCoordinate(this._source._p2.price)
    const timeScale = this._source.chart.timeScale()
    const x1 = timeScale.timeToCoordinate(this._source._p1.time)
    const x2 = timeScale.timeToCoordinate(this._source._p2.time)
    this._p1 = { x: x1, y: y1 }
    this._p2 = { x: x2, y: y2 }
  }

  renderer() {
    return new RectanglePaneRenderer(this._p1, this._p2, this._source._options.fillColor)
  }
}

export class RectanglePriceAxisPaneView extends DrawingToolAxisPaneView {
  getPoints(): [Coordinate | null, Coordinate | null] {
    const series = this._source.series
    const y1 = series.priceToCoordinate(this._source._p1.price)
    const y2 = series.priceToCoordinate(this._source._p2.price)
    return [y1, y2]
  }
}

export class RectangleTimeAxisPaneView extends DrawingToolAxisPaneView {
  getPoints(): [Coordinate | null, Coordinate | null] {
    const timeScale = this._source.chart.timeScale()
    const x1 = timeScale.timeToCoordinate(this._source._p1.time)
    const x2 = timeScale.timeToCoordinate(this._source._p2.time)
    return [x1, x2]
  }
}
