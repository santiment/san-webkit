import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { TViewPoint } from '../types.js'
import type { Coordinate, PrimitiveHoveredItem } from '@santiment-network/chart-next'

import {
  checkIsOutsideRect,
  positionsBox,
  RenderHitTest,
  type TPaneRenderer,
  type TRenderHitTestValue,
} from '../_core/renderer.js'

export class RectanglePaneRenderer implements TPaneRenderer {
  private _data: [TViewPoint, TViewPoint]
  private _fillColor: string

  constructor(data: [TViewPoint, TViewPoint], fillColor: string) {
    this._data = data
    this._fillColor = fillColor
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      const [p1, p2] = this._data

      if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) {
        return
      }

      const ctx = scope.context
      const horizontalPositions = positionsBox(p1.x, p2.x, scope.horizontalPixelRatio)
      const verticalPositions = positionsBox(p1.y, p2.y, scope.verticalPixelRatio)
      ctx.fillStyle = this._fillColor
      ctx.fillRect(
        horizontalPositions.position,
        verticalPositions.position,
        horizontalPositions.length,
        verticalPositions.length,
      )
    })
  }

  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestValue | null {
    const [p1, p2] = this._data

    if (checkIsOutsideRect(x, y, p1.x, p2.x, p1.y, p2.y)) {
      return null
    }

    return RenderHitTest.PRIMITIVE
  }
}
