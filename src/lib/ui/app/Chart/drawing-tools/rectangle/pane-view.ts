import type { TViewPoint } from '../types.js'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { RectanglePaneRenderer } from './renderer.js'

export class RectanglePaneView extends DrawingPaneView {
  protected _points: [TViewPoint, TViewPoint] = [
    { x: null, y: null },
    { x: null, y: null },
  ]

  protected _renderer = new RectanglePaneRenderer(this._points, getBrowserCssVariable('red') + '50')

  update() {
    const series = this._source.series
    const timeScale = this._source.chart.timeScale()

    const [p1, p2] = this._source.points

    const y1 = series.priceToCoordinate(p1.price)
    const y2 = series.priceToCoordinate(p2.price)

    const x1 = timeScale.timeToCoordinate(p1.time)
    const x2 = timeScale.timeToCoordinate(p2.time)

    const left = { x: x1, y: y1 }
    const right = { x: x2, y: y2 }

    this._points[0] = x1! < x2! ? left : right
    this._points[1] = x1! < x2! ? right : left
  }

  renderer() {
    return this._renderer
  }
}
