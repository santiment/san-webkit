import type { CanvasRenderingTarget2D } from 'fancy-canvas'
import type { IPrimitivePaneRenderer } from '@santiment-network/chart-next'
import type { ViewPoint } from '../types.js'

export class RectanglePaneRenderer implements IPrimitivePaneRenderer {
  _p1: ViewPoint
  _p2: ViewPoint
  _fillColor: string

  constructor(p1: ViewPoint, p2: ViewPoint, fillColor: string) {
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

/**
 * Determines the bitmap position and length for a dimension of a shape to be drawn.
 * @param position1Media - media coordinate for the first point
 * @param position2Media - media coordinate for the second point
 * @param pixelRatio - pixel ratio for the corresponding axis (vertical or horizontal)
 * @returns Position of of the start point and length dimension.
 */
export function positionsBox(
  position1Media: number,
  position2Media: number,
  pixelRatio: number,
): BitmapPositionLength {
  const scaledPosition1 = Math.round(pixelRatio * position1Media)
  const scaledPosition2 = Math.round(pixelRatio * position2Media)
  return {
    position: Math.min(scaledPosition1, scaledPosition2),
    length: Math.abs(scaledPosition2 - scaledPosition1) + 1,
  }
}

export interface BitmapPositionLength {
  /** coordinate for use with a bitmap rendering scope */
  position: number
  /** length for use with a bitmap rendering scope */
  length: number
}
