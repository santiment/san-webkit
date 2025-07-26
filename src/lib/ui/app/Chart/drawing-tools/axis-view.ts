import type { Coordinate, ISeriesPrimitiveAxisView } from '@santiment-network/chart-next'
import type { RectanglePrimitive } from './rectangle/primitive.js'
import type { Point } from './types.js'

export abstract class DrawingToolAxisView implements ISeriesPrimitiveAxisView {
  _source: RectanglePrimitive
  _p: Point
  _pos: Coordinate | null = null
  constructor(source: RectanglePrimitive, p: Point) {
    this._source = source
    this._p = p
  }
  abstract update(): void
  abstract text(): string

  coordinate() {
    return this._pos ?? -1
  }

  visible(): boolean {
    return this._source._options.showLabels
  }

  tickVisible(): boolean {
    return this._source._options.showLabels
  }

  textColor() {
    return this._source._options.labelTextColor
  }
  backColor() {
    return this._source._options.labelColor
  }
  movePoint(p: Point) {
    this._p = p
    this.update()
  }
}
