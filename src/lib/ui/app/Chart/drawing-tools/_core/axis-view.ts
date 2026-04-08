import type { ISeriesPrimitiveAxisView } from '@santiment-network/chart-next'
import type { DrawingPrimitive } from './primitive.js'

export abstract class DrawingAxisView implements ISeriesPrimitiveAxisView {
  protected _source: DrawingPrimitive<any>
  protected _index: number

  constructor(source: DrawingPrimitive<any>, index: number) {
    this._source = source
    this._index = index
  }

  abstract position: 'x' | 'y'
  abstract text(): string

  coordinate() {
    return this._source.viewPoints[this._index][this.position] ?? -1
  }

  visible(): boolean {
    return this._source.isSelected()
  }
  //
  //tickVisible(): boolean {
  //  return this._source._options.showLabels
  //}
  //
  textColor() {
    return this._source.options.axisLabels.textColor
  }
  backColor() {
    return this._source.options.axisLabels.bg
  }
}

export class DrawingTimeAxisView extends DrawingAxisView {
  position = 'x' as const

  text() {
    const chart = this._source.chart
    const point = this._source.points[this._index]

    return chart.options().localization.timeFormatter?.(point.time) || point.time.toString()
  }
}

export class DrawingPriceAxisView extends DrawingAxisView {
  position = 'y' as const

  text() {
    const series = this._source.series
    return series.priceFormatter().format(this._source.points[this._index].price)
  }
}
