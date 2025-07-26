import type { Point } from '../types.js'

import { DrawingPrimitive, PreviewDrawingPrimitive } from '../_primitive.js'
import { RectanglePaneView } from './_pane-view.js'

export class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
  protected __type = 'rectangle' as const
  protected _paneViews: RectanglePaneView[] = [new RectanglePaneView(this)]
}

export class PreviewRectanglePrimitive
  extends RectanglePrimitive
  implements PreviewDrawingPrimitive
{
  constructor(points: Point[], options: Partial<any> = {}) {
    super(points, options)
    this._options.fillColor = this._options.previewFillColor
  }

  public updateEndPoint(point: Point) {
    this._points[1] = point
    //this._p2 = point

    this._paneViews[0].update()
    this._timeAxisViews[1].movePoint(point)
    this._priceAxisViews[1].movePoint(point)

    this.requestUpdate()
  }
}
