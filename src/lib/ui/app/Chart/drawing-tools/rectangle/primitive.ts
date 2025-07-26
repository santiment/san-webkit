import { DrawingPrimitive } from '../primitive.js'
import { defaultOptions, type Point, type RectangleDrawingToolOptions } from '../types.js'
import { RectanglePriceAxisView, RectangleTimeAxisView } from './axis-view.js'
import {
  RectanglePaneView,
  RectanglePriceAxisPaneView,
  RectangleTimeAxisPaneView,
} from './pane-view.js'

export class RectanglePrimitive extends DrawingPrimitive {
  _options: RectangleDrawingToolOptions
  _p1: Point
  _p2: Point
  _paneViews: RectanglePaneView[]
  _timeAxisViews: RectangleTimeAxisView[]
  _priceAxisViews: RectanglePriceAxisView[]
  _priceAxisPaneViews: RectanglePriceAxisPaneView[]
  _timeAxisPaneViews: RectangleTimeAxisPaneView[]

  constructor(p1: Point, p2: Point, options: Partial<RectangleDrawingToolOptions> = {}) {
    super()
    this._p1 = p1
    this._p2 = p2
    this._options = {
      ...defaultOptions,
      ...options,
    }
    this._paneViews = [new RectanglePaneView(this)]
    this._timeAxisViews = [new RectangleTimeAxisView(this, p1), new RectangleTimeAxisView(this, p2)]
    this._priceAxisViews = [
      new RectanglePriceAxisView(this, p1),
      new RectanglePriceAxisView(this, p2),
    ]
    this._priceAxisPaneViews = [new RectanglePriceAxisPaneView(this, true)]
    this._timeAxisPaneViews = [new RectangleTimeAxisPaneView(this, false)]
  }

  updateAllViews() {
    this._paneViews.forEach((pw) => pw.update())
    this._timeAxisViews.forEach((pw) => pw.update())
    this._priceAxisViews.forEach((pw) => pw.update())
    this._priceAxisPaneViews.forEach((pw) => pw.update())
    this._timeAxisPaneViews.forEach((pw) => pw.update())
  }

  priceAxisViews() {
    return this._priceAxisViews
  }

  timeAxisViews() {
    return this._timeAxisViews
  }

  paneViews() {
    return this._paneViews
  }

  priceAxisPaneViews() {
    return this._priceAxisPaneViews
  }

  timeAxisPaneViews() {
    return this._timeAxisPaneViews
  }

  applyOptions(options: Partial<RectangleDrawingToolOptions>) {
    this._options = { ...this._options, ...options }
    this.requestUpdate()
  }
}

export class PreviewRectangle extends RectanglePrimitive {
  constructor(p1: Point, p2: Point, options: Partial<RectangleDrawingToolOptions> = {}) {
    super(p1, p2, options)
    this._options.fillColor = this._options.previewFillColor
  }

  public updateEndPoint(p: Point) {
    this._p2 = p
    this._paneViews[0].update()
    this._timeAxisViews[1].movePoint(p)
    this._priceAxisViews[1].movePoint(p)
    this.requestUpdate()
  }
}
