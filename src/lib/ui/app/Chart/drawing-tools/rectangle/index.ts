import type {
  IChartApi,
  ISeriesApi,
  MouseEventParams,
  SeriesType,
} from '@santiment-network/chart-next'

import { ensureDefined, type Point, type RectangleDrawingToolOptions } from '../types.js'
import { PreviewRectanglePrimitive, RectanglePrimitive } from './_primitive.js'

export class RectangleDrawingTool {
  private _chart: IChartApi | undefined
  private _series: ISeriesApi<SeriesType> | undefined
  private _drawingsToolbarContainer: HTMLDivElement | undefined
  private _defaultOptions: Partial<RectangleDrawingToolOptions>
  private _rectangles: RectanglePrimitive[]
  private _previewRectangle: PreviewRectanglePrimitive | undefined = undefined
  private _points: Point[] = []
  private _drawing: boolean = false
  private _toolbarButton: HTMLDivElement | undefined

  constructor(
    chart: IChartApi,
    series: ISeriesApi<SeriesType>,
    drawingsToolbarContainer: HTMLDivElement,
    options: Partial<RectangleDrawingToolOptions>,
  ) {
    this._chart = chart
    this._series = series
    this._drawingsToolbarContainer = drawingsToolbarContainer
    this._addToolbarButton()
    this._defaultOptions = options
    this._rectangles = []
    this._chart.subscribeClick(this._clickHandler)
    this._chart.subscribeCrosshairMove(this._moveHandler)
  }

  private _clickHandler = (param: MouseEventParams) => this._onClick(param)
  private _moveHandler = (param: MouseEventParams) => this._onMouseMove(param)

  remove() {
    this.stopDrawing()
    if (this._chart) {
      this._chart.unsubscribeClick(this._clickHandler)
      this._chart.unsubscribeCrosshairMove(this._moveHandler)
    }
    this._rectangles.forEach((rectangle) => {
      this._removeRectangle(rectangle)
    })
    this._rectangles = []
    this._removePreviewRectangle()
    this._chart = undefined
    this._series = undefined
    this._drawingsToolbarContainer = undefined
  }

  startDrawing(): void {
    this._drawing = true
    this._points = []
    if (this._toolbarButton) {
      this._toolbarButton.style.fill = 'rgb(100, 150, 250)'
    }
  }

  stopDrawing(): void {
    this._drawing = false
    this._points = []
    if (this._toolbarButton) {
      this._toolbarButton.style.fill = 'rgb(0, 0, 0)'
    }
  }

  isDrawing(): boolean {
    return this._drawing
  }

  private _onClick(param: MouseEventParams) {
    if (!this._drawing || !param.point || !param.time || !this._series) return
    const price = this._series.coordinateToPrice(param.point.y)
    if (price === null) {
      return
    }
    this._addPoint({
      time: param.time,
      price,
    })
  }

  private _onMouseMove(param: MouseEventParams) {
    if (!this._drawing || !param.point || !param.time || !this._series) return
    const price = this._series.coordinateToPrice(param.point.y)
    if (price === null) {
      return
    }
    if (this._previewRectangle) {
      this._previewRectangle.updateEndPoint({
        time: param.time,
        price,
      })
    }
  }

  private _addPoint(p: Point) {
    this._points.push(p)
    if (this._points.length >= 2) {
      this._addNewRectangle(this._points[0], this._points[1])
      this.stopDrawing()
      this._removePreviewRectangle()
    }
    if (this._points.length === 1) {
      this._addPreviewRectangle(this._points[0])
    }
  }

  private _addNewRectangle(p1: Point, p2: Point) {
    const rectangle = new RectanglePrimitive([p1, p2], { ...this._defaultOptions })
    this._rectangles.push(rectangle)
    ensureDefined(this._series).attachPrimitive(rectangle)
  }

  private _removeRectangle(rectangle: RectanglePrimitive) {
    ensureDefined(this._series).detachPrimitive(rectangle)
  }

  private _addPreviewRectangle(p: Point) {
    this._previewRectangle = new PreviewRectanglePrimitive([p, p], {
      ...this._defaultOptions,
    })
    ensureDefined(this._series).attachPrimitive(this._previewRectangle)
  }

  private _removePreviewRectangle() {
    if (this._previewRectangle) {
      ensureDefined(this._series).detachPrimitive(this._previewRectangle)
      this._previewRectangle = undefined
    }
  }

  private _addToolbarButton() {
    if (!this._drawingsToolbarContainer) return
    const button = document.createElement('div')
    button.style.width = '20px'
    button.style.height = '20px'
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/></svg>`
    button.addEventListener('click', () => {
      if (this.isDrawing()) {
        this.stopDrawing()
      } else {
        this.startDrawing()
      }
    })
    this._drawingsToolbarContainer.appendChild(button)
    this._toolbarButton = button
    const colorPicker = document.createElement('input')
    colorPicker.type = 'color'
    colorPicker.value = '#C83264'
    colorPicker.style.width = '24px'
    colorPicker.style.height = '20px'
    colorPicker.style.border = 'none'
    colorPicker.style.padding = '0px'
    colorPicker.style.backgroundColor = 'transparent'
    colorPicker.addEventListener('change', () => {
      const newColor = colorPicker.value
      this._defaultOptions.fillColor = newColor + 'CC'
      this._defaultOptions.previewFillColor = newColor + '77'
      this._defaultOptions.labelColor = newColor
    })
    this._drawingsToolbarContainer.appendChild(colorPicker)
  }
}
