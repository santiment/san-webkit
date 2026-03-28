import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { IPrimitivePaneRenderer } from '@santiment-network/chart-next'
import type { TViewPoint } from '../types.js'

import { positionsBox } from '../_core/renderer.js'

export class RectanglePaneRenderer implements IPrimitivePaneRenderer {
  _p1: TViewPoint
  _p2: TViewPoint
  _fillColor: string

  constructor(p1: TViewPoint, p2: TViewPoint, fillColor: string) {
    this._p1 = p1
    this._p2 = p2
    this._fillColor = fillColor
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      if (this._p1.x === null || this._p1.y === null || this._p2.x === null || this._p2.y === null)
        return
      const ctx = scope.context
      const horizontalPositions = positionsBox(this._p1.x, this._p2.x, scope.horizontalPixelRatio)
      const verticalPositions = positionsBox(this._p1.y, this._p2.y, scope.verticalPixelRatio)
      ctx.fillStyle = this._fillColor
      ctx.fillRect(
        horizontalPositions.position,
        verticalPositions.position,
        horizontalPositions.length,
        verticalPositions.length,
      )
    })
  }
}
