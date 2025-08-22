import type { TPoint } from '../types.js'

import { DrawingPrimitive } from '../primitive.js'
import { RectanglePaneView } from './pane-view.js'

export default class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
  public __type = 'rectangle' as const
  protected _paneViews: RectanglePaneView[] = [new RectanglePaneView(this)]

  public updateEndPoint(point: TPoint) {
    this._points[1] = point
    //this._p2 = point

    this._paneViews[0].update()
    this._timeAxisViews[1].movePoint(point)
    this._priceAxisViews[1].movePoint(point)

    this.requestUpdate()
  }
}
