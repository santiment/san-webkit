import type { ViewPoint } from '../types.js'

import { DrawingPaneView } from '../pane-view.js'
import { RectanglePaneRenderer } from './renderer.js'

export class RectanglePaneView extends DrawingPaneView {
  private _p1: ViewPoint = { x: null, y: null }
  private _p2: ViewPoint = { x: null, y: null }

  update() {
    const series = this._source.series
    const timeScale = this._source.chart.timeScale()

    const [p1, p2] = this._source.points

    const y1 = series.priceToCoordinate(p1.price)
    const y2 = series.priceToCoordinate(p2.price)

    const x1 = timeScale.timeToCoordinate(p1.time)
    const x2 = timeScale.timeToCoordinate(p2.time)

    this._p1 = { x: x1, y: y1 }
    this._p2 = { x: x2, y: y2 }
  }

  renderer() {
    return new RectanglePaneRenderer(this._p1, this._p2, this._source._options.fillColor)
  }
}
