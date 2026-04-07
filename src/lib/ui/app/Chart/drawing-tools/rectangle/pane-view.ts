import type { TViewPoint } from '../types.js'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'
import { RectanglePaneRenderer } from './renderer.js'

export class RectanglePaneView extends DrawingPaneView {
  public points: [TViewPoint, TViewPoint] = [
    { x: null, y: null },
    { x: null, y: null },
  ]

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new RectanglePaneRenderer(this.points, getBrowserCssVariable('red') + '50'),

    // top left
    new HandleRenderer(this, {
      position(points) {
        return { x: points[0].x, y: points[0].y }
      },
    }),

    // top right
    new HandleRenderer(this, {
      position(points) {
        return { x: points[1].x, y: points[0].y }
      },
    }),

    // bottom right
    new HandleRenderer(this, {
      position(points) {
        return { x: points[1].x, y: points[1].y }
      },
    }),

    // bottom left
    new HandleRenderer(this, {
      position(points) {
        return { x: points[0].x, y: points[1].y }
      },
    }),
  ])

  update() {
    // console.log('auto update?')
    const series = this._source.series
    const timeScale = this._source.chart.timeScale()

    // const [p1, p2] = this._source.points

    // const y1 = series.priceToCoordinate(p1.price)
    // const y2 = series.priceToCoordinate(p2.price)

    // const x1 = timeScale.timeToCoordinate(p1.time)
    // const x2 = timeScale.timeToCoordinate(p2.time)

    // const [top, bottom] = y1! < y2! ? [y1, y2] : [y2, y1]
    // const [left, right] = x1! < x2! ? [x1, x2] : [x2, x1]

    // this.points[0] = { x: left, y: top }
    // this.points[1] = { x: right, y: bottom }
    this.points[0] = this._source.viewPoints[0]
    this.points[1] = this._source.viewPoints[1]
  }

  renderer() {
    return this._renderer
  }
}
