import type { TOptions, TPoint, TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { HorizontalLinePaneView } from './pane-view.js'
import type { Coordinate } from '@santiment-network/chart-next'

export default class HorizontalLinePrimitive extends DrawingPrimitive<'horizontal-line'> {
  public __type = 'horizontal-line' as const

  protected _paneViews: HorizontalLinePaneView[] = [new HorizontalLinePaneView(this)]

  public constructor(dataPoints: TPoint[], options: Partial<TOptions> = {}) {
    super(dataPoints.slice(0, 1), options)

    this._timeAxisViews.length = 0
    this._timeAxisPaneViews.length = 0
  }

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }

  protected mapDataPointsToViewPoints(): undefined | TViewPoint[] {
    const series = this._series
    if (!series) return

    // @ts-expect-error
    const x = (this.series.getPane()._pane._width / 2) as Coordinate

    return this._dataPoints.map((point) => ({
      x,
      y: series.priceToCoordinate(point.price),
    }))
  }

  protected mapViewPointsToDataPoints(): undefined | TPoint[] {
    const series = this._series
    if (!series) return

    return this._viewPoints.map((point) => ({
      time: 0 as TPoint['time'],
      price: series.coordinateToPrice(point.y!)!,
    }))
  }

  public select(value: boolean): void {
    this._paneViews[0].isSelected = true
  }
}
