// https://github.com/tradingview/lightweight-charts/blob/master/plugin-examples/src/plugins/rectangle-drawing-tool/rectangle-drawing-tool.ts#L267

import type {
  DataChangedScope,
  IChartApi,
  ISeriesApi,
  ISeriesPrimitive,
  SeriesAttachedParameter,
  SeriesOptionsMap,
  Time,
} from '@santiment-network/chart-next'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPriceAxisView, DrawingTimeAxisView, type DrawingAxisView } from './axis-view.js'
import { type TOptions, type TPoint } from './types.js'
import {
  DrawingPaneView,
  DrawingPriceAxisPaneView,
  DrawingTimeAxisPaneView,
  type DrawingAxisPaneView,
} from './pane-view.js'

export abstract class DrawingPrimitive<GDrawingType extends string>
  implements ISeriesPrimitive<Time>
{
  public abstract readonly __type: GDrawingType
  protected abstract readonly _paneViews: DrawingPaneView[]

  protected _chart: IChartApi | undefined = undefined
  protected _series: ISeriesApi<keyof SeriesOptionsMap> | undefined = undefined

  protected _points: TPoint[]
  protected _options: TOptions

  protected _timeAxisViews: DrawingAxisView[] = []
  protected _priceAxisViews: DrawingAxisView[] = []
  protected _priceAxisPaneViews: DrawingAxisPaneView[] = []
  protected _timeAxisPaneViews: DrawingAxisPaneView[] = []

  protected dataUpdated?(scope: DataChangedScope): void
  protected requestUpdate(): void {
    if (this._requestUpdate) this._requestUpdate()
  }
  private _requestUpdate?: () => void

  public constructor(points: TPoint[], options: Partial<TOptions> = {}) {
    this._points = points
    this._options = {
      axisLabels: {
        bg: getBrowserCssVariable('casper'),
        textColor: getBrowserCssVariable('black'),
      },
      ...options,
    }

    for (let i = 0; i < points.length; i++) {
      this._priceAxisViews.push(new DrawingPriceAxisView(this, points[i]))
      this._timeAxisViews.push(new DrawingTimeAxisView(this, points[i]))
    }

    if (points.length > 1) {
      this._priceAxisPaneViews.push(new DrawingPriceAxisPaneView(this))
      this._timeAxisPaneViews.push(new DrawingTimeAxisPaneView(this))
    }
  }

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

  public get points(): TPoint[] {
    return this._points
  }

  public get chart(): IChartApi {
    return this._chart!
  }

  public get series(): ISeriesApi<keyof SeriesOptionsMap> {
    return this._series!
  }

  public get options(): TOptions {
    return this._options
  }

  public updateAllViews(): void {
    //if (!this._options.visible) {
    //  return
    //}

    this._paneViews.forEach((pw) => pw.update())
    this._timeAxisViews.forEach((pw) => pw.update())
    this._priceAxisViews.forEach((pw) => pw.update())
    this._priceAxisPaneViews.forEach((pw) => pw.update())
    this._timeAxisPaneViews.forEach((pw) => pw.update())
  }

  public priceAxisViews() {
    return this._priceAxisViews
  }

  public timeAxisViews() {
    return this._timeAxisViews
  }

  public paneViews() {
    return this._paneViews
  }

  public priceAxisPaneViews() {
    return this._priceAxisPaneViews
  }

  public timeAxisPaneViews() {
    return this._timeAxisPaneViews
  }

  public applyOptions(options: Partial<TOptions>) {
    this._options = { ...this._options, ...options }
    this.requestUpdate()
  }

  // This method is a class property to maintain the
  // lexical 'this' scope (due to the use of the arrow function)
  // and to ensure its reference stays the same, so we can unsubscribe later.
  private _fireDataUpdated = (scope: DataChangedScope) => {
    if (this.dataUpdated) {
      this.dataUpdated(scope)
    }
  }

  public abstract updateEndPoint(p: TPoint): void
}
