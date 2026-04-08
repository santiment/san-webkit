import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { TViewPoint } from '../types.js'

import { positionsBox, type TPaneRenderer } from '../_core/renderer.js'
import type { Coordinate, PrimitiveHoveredItem } from '@santiment-network/chart-next'

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

  hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null {
    const [p1, p2] = this._data

    if (x < p1.x! || x > p2.x!) {
      return null
    }

    const [top, bottom] = p1.y! < p2.y! ? [p1, p2] : [p2, p1]
    if (y < top.y! || y > bottom.y!) {
      return null
    }

    return {
      cursorStyle: 'pointer',
      externalId: 'rect',
      zOrder: 'top',
    }
  }

  // hitTest(x: Coordinate, y: Coordinate): TDrawingHitTestResult | null {
  //   const hitSize = this._data.size + ANCHOR_HIT_PADDING * 2

  //   for (let i = 0; i < this._data.points.length; i++) {
  //     const point = this._data.points[i]
  //     if (point.x === null || point.y === null) continue

  //     const left = point.x - hitSize / 2
  //     const right = point.x + hitSize / 2
  //     const top = point.y - hitSize / 2
  //     const bottom = point.y + hitSize / 2

  //     if (x >= left && x <= right && y >= top && y <= bottom) {
  //       return { pointIndex: i, cursorStyle: PaneCursorType.Pointer }
  //     }
  //   }

  //   return null
  // }
}
