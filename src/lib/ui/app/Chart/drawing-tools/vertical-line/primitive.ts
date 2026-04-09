import type { TData, TOptions, TPoint, TViewPoint } from '../types.js'
import type { Coordinate } from '@santiment-network/chart-next'

import { DrawingPrimitive } from '../_core/primitive.js'
import { VerticalLinePaneView } from './pane-view.js'

export default class VerticalLinePrimitive extends DrawingPrimitive<'vertical-line'> {
  public __type = 'vertical-line' as const

  protected _paneViews: VerticalLinePaneView[] = [new VerticalLinePaneView(this)]

  public constructor(data: TData, options: Partial<TOptions> = {}) {
    data.points = data.points.slice(0, 1)

    super(data, options)

    this._priceAxisViews.length = 0
    this._priceAxisPaneViews.length = 0
  }

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }

  protected mapDataPointsToViewPoints(): undefined | TViewPoint[] {
    const timeScale = this.chart.timeScale()

    // @ts-expect-error
    const y = (this.series.getPane()._pane._height / 2) as Coordinate

    return this._dataPoints.map((point) => ({
      x: timeScale.timeToCoordinate(point.time),
      y,
    }))
  }

  protected mapViewPointsToDataPoints(): undefined | TPoint[] {
    const timeScale = this.chart.timeScale()

    return this._viewPoints.map((point) => ({
      time: timeScale.coordinateToTime(point.x!)!,
      price: 0,
    }))
  }

  public select(): void {
    this._paneViews[0].isSelected = true
  }
}
