import type { TData, TPoint, TViewPoint } from '../types.js'
import type { Coordinate } from '@santiment-network/chart-next'

import { DrawingPrimitive } from '../_core/primitive.js'
import { VerticalLinePaneView } from './pane-view.js'
import { LineOptionsDefaults, type TLineOptions } from '../trendline/primitive.js'

export default class VerticalLinePrimitive extends DrawingPrimitive<'vertical-line', TLineOptions> {
  public __type = 'vertical-line' as const

  protected _paneViews: VerticalLinePaneView[] = [new VerticalLinePaneView(this)]

  public constructor(data: TData, options: Partial<TLineOptions> = {}) {
    data.points = data.points.slice(0, 1)

    super(data, {
      ...LineOptionsDefaults,
      ...options,
    })

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
      x: timeScale.timeToCoordinate(point.time, true),
      y,
    }))
  }

  protected mapViewPointsToDataPoints(): undefined | TPoint[] {
    const timeScale = this.chart.timeScale()

    return this._viewPoints.map((point) => ({
      time: timeScale.coordinateToTime(point.x!)!,
      value: 0,
    }))
  }

  public select(): void {
    this._paneViews[0].isSelected = true
  }
}
