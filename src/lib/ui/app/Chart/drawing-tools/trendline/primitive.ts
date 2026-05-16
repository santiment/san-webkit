import { getBrowserCssVariable } from '$ui/utils/index.js'

import { LineStyle, type TLineStyles, type TViewPoint } from '../types.js'
import { DrawingPrimitive } from '../_core/primitive.js'
import { TrendlinePaneView } from './pane-view.js'

export type TOptions = {
  lineWidth: number
  strokeColor: string
  lineStyle: TLineStyles
}

export default class TrendlinePrimitive extends DrawingPrimitive<'trendline', TOptions> {
  public __type = 'trendline' as const

  protected _paneViews: TrendlinePaneView[] = [new TrendlinePaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }

  protected constructOptions(options: Partial<TOptions>) {
    return {
      strokeColor: getBrowserCssVariable('waterloo'),
      lineWidth: 2,
      lineStyle: LineStyle.SOLID,

      ...options,
    }
  }
}
