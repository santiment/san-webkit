import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { Coordinate } from '@santiment-network/chart-next'
import type { HorizontalLinePaneView } from './pane-view.js'

import {
  positionPoint,
  RenderHitTest,
  type TPaneRenderer,
  type TRenderHitTestData,
} from '../_core/renderer.js'
import { createLineSegments, drawLine } from '../trendline/renderer.js'

export class HorizontalLinePaneRenderer implements TPaneRenderer {
  private _paneView: HorizontalLinePaneView

  constructor(paneView: HorizontalLinePaneView) {
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
        positionPoint(0, scope.horizontalPixelRatio),
        positionPoint(p1.y, scope.verticalPixelRatio),
        positionPoint(scope.mediaSize.width, scope.horizontalPixelRatio),
        positionPoint(p1.y, scope.verticalPixelRatio),
        lineWidth * scope.verticalPixelRatio,
        strokeColor,
        createLineSegments(lineStyle, lineWidth, scope),
      )

      ctx.restore()
    })
  }

  hitTest(_: Coordinate, y: Coordinate): TRenderHitTestData | null {
    const [p1] = this._paneView.viewPoints

    if (y < p1.y! - 2 || y > p1.y! + 2) {
      return null
    }

    return { type: RenderHitTest.PRIMITIVE }
  }
}
