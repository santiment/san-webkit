import type {
  Coordinate,
  IPrimitivePaneView,
  PrimitivePaneViewZOrder,
} from '@santiment-network/chart-next'
import type { RectanglePrimitive } from './rectangle/primitive.js'

import { RectangleAxisPaneRenderer } from './rectangle/renderer.js'

export abstract class DrawingToolAxisPaneView implements IPrimitivePaneView {
  _source: RectanglePrimitive
  _p1: number | null = null
  _p2: number | null = null
  _vertical: boolean = false

  constructor(source: RectanglePrimitive, vertical: boolean) {
    this._source = source
    this._vertical = vertical
  }

  abstract getPoints(): [Coordinate | null, Coordinate | null]

  update() {
    ;[this._p1, this._p2] = this.getPoints()
  }

  renderer() {
    return new RectangleAxisPaneRenderer(
      this._p1,
      this._p2,
      this._source._options.fillColor,
      this._vertical,
    )
  }
  zOrder(): PrimitivePaneViewZOrder {
    return 'bottom'
  }
}
