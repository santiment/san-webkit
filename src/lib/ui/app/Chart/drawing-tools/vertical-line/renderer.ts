import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { Coordinate } from '@santiment-network/chart-next'
import type { VerticalLinePaneView } from './pane-view.js'

import {
  positionPoint,
  RenderHitTest,
  type TPaneRenderer,
  type TRenderHitTestData,
} from '../_core/renderer.js'
import { createLineSegments, drawLine } from '../trendline/renderer.js'

export class VerticalLinePaneRenderer implements TPaneRenderer {
  private _paneView: VerticalLinePaneView

  constructor(paneView: VerticalLinePaneView) {
    this._paneView = paneView
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      const p1 = this._paneView.viewPoints[0]

      if (p1.y === null) {
        return
      }

      const ctx = scope.context
      const { lineWidth, strokeColor, lineStyle } = this._paneView.options

      ctx.save()

      drawLine(
        ctx,
        positionPoint(p1.x!, scope.horizontalPixelRatio),
        positionPoint(0, scope.verticalPixelRatio),
        positionPoint(p1.x!, scope.horizontalPixelRatio),
        positionPoint(scope.mediaSize.height, scope.verticalPixelRatio),
        lineWidth * scope.verticalPixelRatio,
        strokeColor,
        createLineSegments(lineStyle, lineWidth, scope),
      )

      ctx.restore()
    })
  }

  hitTest(x: Coordinate, _: Coordinate): TRenderHitTestData | null {
    const [p1] = this._paneView.viewPoints

    if (x < p1.x! - 2 || x > p1.x! + 2) {
      return null
    }

    return { type: RenderHitTest.PRIMITIVE }
  }
}
