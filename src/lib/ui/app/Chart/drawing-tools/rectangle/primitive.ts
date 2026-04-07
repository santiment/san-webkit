import type { TPoint, TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { RectanglePaneView } from './pane-view.js'

export default class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
  public __type = 'rectangle' as const
  protected _paneViews: RectanglePaneView[] = [new RectanglePaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this._paneViews[0].update()
    // this._timeAxisViews[1].movePoint()
    // this._priceAxisViews[1].movePoint()

    this.requestUpdate()
  }
}
