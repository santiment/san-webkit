// https://github.com/tradingview/lightweight-charts/blob/master/plugin-examples/src/plugins/rectangle-drawing-tool/rectangle-drawing-tool.ts#L267

import type {
  Coordinate,
  DataChangedScope,
  IChartApi,
  ISeriesApi,
  ISeriesPrimitive,
  PrimitiveHoveredItem,
  SeriesAttachedParameter,
  SeriesOptionsMap,
  Time,
} from '@santiment-network/chart-next'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPriceAxisView, DrawingTimeAxisView, type DrawingAxisView } from './axis-view.js'
import { type TData, type TOptions, type TPoint, type TViewPoint } from '../types.js'
import {
  DrawingPaneView,
  DrawingPriceAxisPaneView,
  DrawingTimeAxisPaneView,
  type DrawingAxisPaneView,
} from './pane-view.js'

export abstract class DrawingPrimitive<
  GDrawingType extends string,
  GOptions extends object = object,
> implements ISeriesPrimitive<Time>
{
  public abstract readonly __type: GDrawingType
  protected abstract readonly _paneViews: DrawingPaneView[]

  protected _chart: IChartApi | undefined = undefined
  protected _series: ISeriesApi<keyof SeriesOptionsMap> | undefined = undefined
  protected _seriesId: string | undefined = undefined

  protected _dataPoints: TPoint[]
  protected _viewPoints: TViewPoint[] = []
  protected _finalizedViewPoints: TViewPoint[] = []
  protected _options: GOptions & TOptions
  protected _isVisible = true

  protected _timeAxisViews: DrawingAxisView[] = []
  protected _priceAxisViews: DrawingAxisView[] = []
  protected _priceAxisPaneViews: DrawingAxisPaneView[] = []
  protected _timeAxisPaneViews: DrawingAxisPaneView[] = []

  protected dataUpdated?(scope: DataChangedScope): void
  protected requestUpdate(): void {
    if (this._requestUpdate) this._requestUpdate()
  }
  private _requestUpdate?: () => void

  public constructor(data: TData, options: Partial<GOptions> = {}) {
    this._dataPoints = data.points

    this._options = {
      axisLabels: {
        bg: getBrowserCssVariable('casper'),
        textColor: getBrowserCssVariable('black'),
      },
      ...(this.constructOptions(options) as GOptions),
    }

    for (let i = 0; i < data.points.length; i++) {
      this._priceAxisViews.push(new DrawingPriceAxisView(this, i))
      this._timeAxisViews.push(new DrawingTimeAxisView(this, i))
    }

    if (data.points.length > 1) {
      this._priceAxisPaneViews.push(new DrawingPriceAxisPaneView(this))
      this._timeAxisPaneViews.push(new DrawingTimeAxisPaneView(this))
    }
  }

  protected constructOptions(options: Partial<GOptions>) {
    return options
  }

  protected mapDataPointsToViewPoints(): undefined | TViewPoint[] {
    const timeScale = this._chart!.timeScale()
    const series = this._series

    if (!series) return

    return this._dataPoints.map((point) => ({
      x: timeScale.timeToCoordinate(point.time, true),
      y: series.priceToCoordinate(point.value),
    }))
  }

  public convertDataToViewPoints() {
    const viewPoints = this.mapDataPointsToViewPoints()
    if (!viewPoints) return

    this._viewPoints = viewPoints
    this._finalizedViewPoints = this._viewPoints.map((point) => ({ ...point }))
  }

  public attached({ chart, series, requestUpdate }: SeriesAttachedParameter<Time>) {
    this._chart = chart
    this._series = series

    this.convertDataToViewPoints()

    this._series.subscribeDataChanged(this._fireDataUpdated)
    this._requestUpdate = requestUpdate
    this.requestUpdate()
  }

  public detached() {
    this._series?.unsubscribeDataChanged(this._fireDataUpdated)
    this._chart = undefined
    this._series = undefined
    this._seriesId = undefined
    this._requestUpdate = undefined
  }

  /**
   * Completely removing primitive from a series
   */
  public delete() {
    this._series?.detachPrimitive(this)
  }

  public attachTo(series?: SeriesAttachedParameter<Time>['series'] | null, id?: string) {
    if (!series || this._series === series) {
      return
    }

    if (this._series) {
      // NOTE: Converting view points from old series to data points for new series to keep the drawings on same positions
      const oldSeries = this._series
      this._series = series
      this.finalize()

      this._series = oldSeries
      this._series.detachPrimitive(this)
    }

    this._seriesId = id
    series.attachPrimitive(this)
  }

  public get points(): TPoint[] {
    return this._dataPoints
  }

  public get chart(): IChartApi {
    return this._chart!
  }

  public get series(): ISeriesApi<keyof SeriesOptionsMap> {
    return this._series!
  }

  public get options(): TOptions & GOptions {
    return this._options
  }

  private _oldPriceRange: undefined | Record<string, number>
  private _oldTimeCache: null | any[] = null
  public validatePoints(): void {
    // @ts-expect-error Getting ref to a internal cached property
    const currentTimeCache = this._chart?.timeScale()._timeScale._timeMarksCache

    if (!currentTimeCache) {
      this._oldTimeCache = null
      return
    }

    // @ts-expect-error Getting ref to a internal cached property
    const currentPriceRange = this._series?.priceScale()._priceScale()._priceRange

    if (this._oldTimeCache && currentPriceRange === this._oldPriceRange) {
      return
    }

    this._oldPriceRange = currentPriceRange
    this._oldTimeCache = currentTimeCache

    this.convertDataToViewPoints()
  }

  public updateAllViews(): void {
    if (!this.isVisible()) {
      return
    }

    this.validatePoints()

    this._paneViews.forEach((pw) => pw.update())
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

  public applyOptions(options: Partial<TOptions & GOptions>) {
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

  public abstract updateEndPoint(p: TViewPoint): void

  protected sortViewPoints?(): void {}

  public hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null {
    if (!this.isVisible()) {
      return null
    }

    const [paneView] = this._paneViews
    return paneView.hitTest(x, y)
  }

  public isHovered() {
    return this._paneViews[0].isHovered
  }

  public isSelected() {
    return this._paneViews[0].isSelected
  }

  public select(value: boolean) {
    this._paneViews[0].isSelected = value
    this.requestUpdate()
  }

  public isVisible() {
    return this._isVisible
  }

  public setVisibility(value: boolean) {
    this._isVisible = value
    this.requestUpdate()
  }

  public move(diffXY: [number, number], handleIndices?: [number, number]) {
    this._paneViews.forEach((pw) => pw.move(diffXY, handleIndices))
    this.requestUpdate()
  }

  public get viewPoints(): TViewPoint[] {
    return this._viewPoints
  }

  public get finalizedViewPoints(): TViewPoint[] {
    return this._finalizedViewPoints
  }

  protected mapViewPointsToDataPoints(): undefined | TPoint[] {
    const timeScale = this._chart!.timeScale()
    const series = this._series

    if (!series) return

    return this._viewPoints.map((point) => ({
      time: timeScale.coordinateToTime(point.x!)!,
      value: series.coordinateToPrice(point.y!)!,
    }))
  }

  /**
   * Convert view points to data points
   * @returns
   */
  public finalize(): void {
    if (!this._chart) return

    this.sortViewPoints?.()

    const dataPoints = this.mapViewPointsToDataPoints()
    if (!dataPoints) return

    this._dataPoints = dataPoints
    this._finalizedViewPoints = this._viewPoints.map((point) => ({ ...point }))
  }

  public get seriesId(): string | undefined {
    return this._seriesId
  }

  public export() {
    this.finalize()

    return {
      seriesId: this._seriesId,
      points: this.points,
    }
  }
}
