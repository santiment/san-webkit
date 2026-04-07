import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { Coordinate } from '@santiment-network/chart-next'
import type { TrendlinePaneView } from './pane-view.js'

import {
  checkIsOutsideLine,
  positionPoint,
  RenderHitTest,
  type TPaneRenderer,
  type TRenderHitTestData,
} from '../_core/renderer.js'

export class TrendlinePaneRenderer implements TPaneRenderer {
  private _paneView: TrendlinePaneView

  constructor(paneView: TrendlinePaneView) {
    this._paneView = paneView
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      const [p1, p2] = this._paneView.viewPoints

      if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) {
        return
      }

      const ctx = scope.context

      ctx.save()

      ctx.beginPath()
      ctx.moveTo(
        positionPoint(p1.x, scope.horizontalPixelRatio),
        positionPoint(p1.y, scope.verticalPixelRatio),
      )
      ctx.lineTo(
        positionPoint(p2.x, scope.horizontalPixelRatio),
        positionPoint(p2.y, scope.verticalPixelRatio),
      )
      ctx.lineWidth = 2 * scope.verticalPixelRatio
      ctx.strokeStyle = this._paneView.strokeColor

      ctx.stroke()
      ctx.restore()
    })
  }

  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null {
    const [p1, p2] = this._paneView.viewPoints

    if (checkIsOutsideLine(x, y, p1, p2)) {
      return null
    }

    return { type: RenderHitTest.PRIMITIVE }
  }
}
