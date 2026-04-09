import type { TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { TrendlinePaneView } from './pane-view.js'

export default class TrendlinePrimitive extends DrawingPrimitive<'trendline'> {
  public __type = 'trendline' as const

  protected _paneViews: TrendlinePaneView[] = [new TrendlinePaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }
}
