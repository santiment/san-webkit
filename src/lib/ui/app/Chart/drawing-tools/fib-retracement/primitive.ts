import type { TPoint } from '../types.js'

import { DrawingPrimitive } from '../primitive.js'
import { FibRetracementPaneView } from './pane-view.js'

export default class FibRetracementPrimitive extends DrawingPrimitive<'fib_retracement'> {
  public __type = 'fib_retracement' as const

  protected _paneViews: FibRetracementPaneView[] = [new FibRetracementPaneView(this)]

  public updateEndPoint(point: TPoint) {
    this._points[1] = point

    this._paneViews[0].update()
    this._timeAxisViews[1].movePoint(point)
    this._priceAxisViews[1].movePoint(point)

    this.requestUpdate()
  }
}
