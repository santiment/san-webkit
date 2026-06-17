import { getBrowserCssVariable } from '$ui/utils/index.js'

import { LineStyle, type TLineStyles, type TViewPoint } from '../types.js'
import { DrawingPrimitive } from '../_core/primitive.js'
import { TrendlinePaneView } from './pane-view.js'

export type TLineOptions = {
  lineWidth: number
  strokeColor: string
  lineStyle: TLineStyles
}

export const LineOptionsDefaults = {
  strokeColor: getBrowserCssVariable('waterloo'),
  lineWidth: 2,
  lineStyle: LineStyle.SOLID,
} as const satisfies TLineOptions

export default class TrendlinePrimitive extends DrawingPrimitive<'trendline', TLineOptions> {
  public __type = 'trendline' as const

  protected _paneViews: TrendlinePaneView[] = [new TrendlinePaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }

  protected constructOptions(options: Partial<TLineOptions>) {
    return {
      ...LineOptionsDefaults,
      ...options,
    }
  }
}
