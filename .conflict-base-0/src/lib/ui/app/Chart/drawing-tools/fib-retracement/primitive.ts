import type { TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { FibRetracementPaneView } from './pane-view.js'

export type TFibRetracementOptions = {
  lineWidth: number
}

export default class FibRetracementPrimitive extends DrawingPrimitive<
  'fib-retracement',
  TFibRetracementOptions
> {
  public __type = 'fib-retracement' as const

  protected _paneViews: FibRetracementPaneView[] = [new FibRetracementPaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this._paneViews[0].update()

    this.requestUpdate()
  }

  protected constructOptions(options: Partial<TFibRetracementOptions>) {
    return { lineWidth: 2, ...options }
  }
}
