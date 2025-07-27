import type { Point } from '../types.js'

import { DrawingPrimitive, PreviewDrawingPrimitive } from '../primitive.js'
import { FibRetracementPaneView } from './pane-view.js'

export class FibRetracementPrimitive extends DrawingPrimitive<'fib_retracement'> {
  protected __type = 'fib_retracement' as const
  protected _paneViews: FibRetracementPaneView[] = [new FibRetracementPaneView(this)]
}

export class PreviewFibRetracementPrimitive
  extends FibRetracementPrimitive
  implements PreviewDrawingPrimitive
{
  constructor(points: Point[], options: Partial<any> = {}) {
    super(points, options)
    this._options.fillColor = this._options.previewFillColor
  }

  public updateEndPoint(point: Point) {
    this._points[1] = point

    this._paneViews[0].update()
    this._timeAxisViews[1].movePoint(point)
    this._priceAxisViews[1].movePoint(point)

    this.requestUpdate()
  }
}
