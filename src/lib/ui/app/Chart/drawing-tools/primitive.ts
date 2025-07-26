import type {
  DataChangedScope,
  IChartApi,
  ISeriesApi,
  ISeriesPrimitive,
  SeriesAttachedParameter,
  SeriesOptionsMap,
  Time,
} from '@santiment-network/chart-next'

import { ensureDefined } from './types.js'

export abstract class DrawingToolPrimitive implements ISeriesPrimitive<Time> {
  private _chart: IChartApi | undefined = undefined
  private _series: ISeriesApi<keyof SeriesOptionsMap> | undefined = undefined

  protected dataUpdated?(scope: DataChangedScope): void
  protected requestUpdate(): void {
    if (this._requestUpdate) this._requestUpdate()
  }
  private _requestUpdate?: () => void

  public attached({ chart, series, requestUpdate }: SeriesAttachedParameter<Time>) {
    this._chart = chart
    this._series = series
    this._series.subscribeDataChanged(this._fireDataUpdated)
    this._requestUpdate = requestUpdate
    this.requestUpdate()
  }

  public detached() {
    this._series?.unsubscribeDataChanged(this._fireDataUpdated)
    this._chart = undefined
    this._series = undefined
    this._requestUpdate = undefined
  }

  public get chart(): IChartApi {
    return ensureDefined(this._chart)
  }

  public get series(): ISeriesApi<keyof SeriesOptionsMap> {
    return ensureDefined(this._series)
  }

  // This method is a class property to maintain the
  // lexical 'this' scope (due to the use of the arrow function)
  // and to ensure its reference stays the same, so we can unsubscribe later.
  private _fireDataUpdated = (scope: DataChangedScope) => {
    if (this.dataUpdated) {
      this.dataUpdated(scope)
    }
  }
}
