import { DrawingPaneView } from '../pane-view.js'
import { FibRetracementPaneRenderer, type TRenderData } from './renderer.js'
import { FIBONACCI_LEVELS } from './defaults.js'

export class FibRetracementPaneView extends DrawingPaneView {
  private _data: TRenderData | { x1: null; x2: null; y1: null; y2: null; levels: [] } = {
    x1: null,
    x2: null,
    y1: null,
    y2: null,
    levels: [],
  }

  update() {
    const series = this._source.series
    const timeScale = this._source.chart.timeScale()

    const [p1, p2] = this._source.points

    const x1 = timeScale.timeToCoordinate(p1.time)
    const x2 = timeScale.timeToCoordinate(p2.time)
    const y1 = series.priceToCoordinate(p1.price)
    const y2 = series.priceToCoordinate(p2.price)

    if (!x1 || !x2 || !y1 || !y2) {
      this._data = { x1: null, x2: null, y1: null, y2: null, levels: [] }
      return
    }

    const formatter = series.priceFormatter()

    // Calculate price difference
    const priceDiff = p1.price - p2.price

    // Calculate all Fibonacci levels
    this._data = {
      x1,
      x2,
      y1,
      y2,
      levels: FIBONACCI_LEVELS.map((item) => {
        const price = p2.price + priceDiff * item.level
        return {
          ...item,
          value: formatter.format(price),
          y: series.priceToCoordinate(price)!,
        }
      }),
    }
  }

  renderer() {
    const { x1, x2, y1, y2 } = this._data
    if (x1 !== null && x2 !== null && y1 !== null && y2 !== null) {
      return new FibRetracementPaneRenderer(this._data)
    }

    return null
  }
}
