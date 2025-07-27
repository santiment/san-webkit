import type {
  Coordinate,
  IPrimitivePaneRenderer,
  IPrimitivePaneView,
  PrimitivePaneViewZOrder,
} from '@santiment-network/chart-next'
import type { DrawingPrimitive } from './primitive.js'

import { DrawingAxisPaneRenderer } from './renderer.js'

export abstract class DrawingPaneView implements IPrimitivePaneView {
  protected _source: DrawingPrimitive<any>

  constructor(source: DrawingPrimitive<any>) {
    this._source = source
  }

  abstract update(): void

  abstract renderer(): IPrimitivePaneRenderer | null
}

export abstract class DrawingAxisPaneView implements IPrimitivePaneView {
  _source: DrawingPrimitive<any>
  _points: (Coordinate | null)[] = []
  _vertical: boolean = false

  constructor(source: DrawingPrimitive<any>) {
    this._source = source
  }

  abstract getPoints(): (Coordinate | null)[]

  update() {
    this._points = this.getPoints()
  }

  renderer() {
    return new DrawingAxisPaneRenderer(
      this._points,
      this._source._options.fillColor,
      this._vertical,
    )
  }
  zOrder(): PrimitivePaneViewZOrder {
    return 'bottom'
  }
}

export class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
  _vertical: boolean = true

  getPoints(): (Coordinate | null)[] {
    const series = this._source.series
    return this._source.points.map((point) => series.priceToCoordinate(point.price))
  }
}

export class DrawingTimeAxisPaneView extends DrawingAxisPaneView {
  getPoints(): (Coordinate | null)[] {
    const timeScale = this._source.chart.timeScale()
    return this._source.points.map((point) => timeScale.timeToCoordinate(point.time))
  }
}
