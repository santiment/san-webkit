import type { TViewPoint } from '../types.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { FibRetracementPaneRenderer, type TRenderData } from './renderer.js'
import { FIBONACCI_LEVELS } from './defaults.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'

export class FibRetracementPaneView extends DrawingPaneView {
  public get viewPoints(): [TViewPoint, TViewPoint] {
    return this._source.viewPoints as [TViewPoint, TViewPoint]
  }

  public data = {
    levels: [] as TRenderData['levels'],
  }

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new FibRetracementPaneRenderer(this),

    new HandleRenderer(this, { pointIndices: [0, 0] }),

    new HandleRenderer(this, { pointIndices: [1, 1] }),
  ])

  update() {
    const series = this._source.series

    const [vp1, vp2] = this._source.viewPoints

    if (!vp1.x || !vp2.x || !vp1.y || !vp2.y) {
      this.data.levels = []
      return
    }

    const formatter = series.priceFormatter()

    const firstPrice = series.coordinateToPrice(vp1.y)!
    const lastPrice = series.coordinateToPrice(vp2.y)!

    // Calculate price difference
    const priceDiff = firstPrice - lastPrice

    // Calculate all Fibonacci levels
    this.data.levels = FIBONACCI_LEVELS.map((item) => {
      const price = lastPrice + priceDiff * item.level
      return { ...item, value: formatter.format(price), y: series.priceToCoordinate(price)! }
    })
  }
}
