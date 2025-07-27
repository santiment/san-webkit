import type { Coordinate, ISeriesPrimitiveAxisView } from '@santiment-network/chart-next'
import type { TPoint } from './types.js'
import type { DrawingPrimitive } from './primitive.js'

export abstract class DrawingAxisView implements ISeriesPrimitiveAxisView {
  protected _source: DrawingPrimitive<any>
  protected _point: TPoint
  protected _pos: Coordinate | null = null

  constructor(source: DrawingPrimitive<any>, point: TPoint) {
    this._source = source
    this._point = point
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
  movePoint(p: TPoint) {
    this._point = p
    this.update()
  }
}

export class DrawingTimeAxisView extends DrawingAxisView {
  update() {
    const timeScale = this._source.chart.timeScale()
    this._pos = timeScale.timeToCoordinate(this._point.time)
  }
  text() {
    const chart = this._source.chart
    return (
      chart.options().localization.timeFormatter?.(this._point.time) || this._point.time.toString()
    )
  }
}

export class DrawingPriceAxisView extends DrawingAxisView {
  update() {
    const series = this._source.series
    this._pos = series.priceToCoordinate(this._point.price)
  }
  text() {
    const series = this._source.series
    return series.priceFormatter().format(this._point.price)
  }
}
