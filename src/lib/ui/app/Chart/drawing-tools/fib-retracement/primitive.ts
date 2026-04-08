import type { TPoint, TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { FibRetracementPaneView } from './pane-view.js'

export default class FibRetracementPrimitive extends DrawingPrimitive<'fib_retracement'> {
  public __type = 'fib_retracement' as const

  protected _paneViews: FibRetracementPaneView[] = [new FibRetracementPaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this._paneViews[0].update()

    this.requestUpdate()
  }
}
