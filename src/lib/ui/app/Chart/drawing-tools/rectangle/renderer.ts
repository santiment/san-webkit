import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { Coordinate } from '@santiment-network/chart-next'
import type { RectanglePaneView } from './pane-view.js'

import {
  checkIsOutsideRect,
  positionsBox,
  RenderHitTest,
  type TPaneRenderer,
  type TRenderHitTestData,
} from '../_core/renderer.js'

export class RectanglePaneRenderer implements TPaneRenderer {
  private _paneView: RectanglePaneView

  constructor(paneView: RectanglePaneView) {
    this._paneView = paneView
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      const [p1, p2] = this._paneView.viewPoints

      if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) {
        return
      }

      const ctx = scope.context
      const { fillStyle } = this._paneView.options

      const horizontalPositions = positionsBox(p1.x, p2.x, scope.horizontalPixelRatio)
      const verticalPositions = positionsBox(p1.y, p2.y, scope.verticalPixelRatio)

      ctx.fillStyle = fillStyle
      ctx.fillRect(
        horizontalPositions.position,
        verticalPositions.position,
        horizontalPositions.length,
        verticalPositions.length,
      )
    })
  }

  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null {
    const [p1, p2] = this._paneView.viewPoints

    if (checkIsOutsideRect(x, y, p1.x, p2.x, p1.y, p2.y)) {
      return null
    }

    return { type: RenderHitTest.PRIMITIVE }
  }
}
