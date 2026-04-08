import type { Coordinate, IPrimitivePaneRenderer } from '@santiment-network/chart-next'
import type { CanvasRenderingTarget2D } from 'fancy-canvas'

import { getBrowserCssVariable } from '$ui/utils/index.js'
import type { DrawingPaneView } from './pane-view.js'

export const RenderHitTest = {
  PRIMITIVE: 1,
  HANDLE: 2,
} as const

export type TRenderHitTestValue = (typeof RenderHitTest)[keyof typeof RenderHitTest]

export type TRenderHitTestData =
  | {
      type: (typeof RenderHitTest)['PRIMITIVE']
    }
  | {
      type: (typeof RenderHitTest)['HANDLE']
      indices: [number, number]
    }

export interface TPaneRenderer extends IPrimitivePaneRenderer {
  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null
}

export class DrawingCompositePaneRenderer implements TPaneRenderer {
  _renderers: TPaneRenderer[]

  constructor(renderers: TPaneRenderer[]) {
    this._renderers = renderers
  }

  draw(target: CanvasRenderingTarget2D) {
    for (const renderer of this._renderers) {
      renderer.draw(target)
    }
  }

  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null {
    for (let i = this._renderers.length - 1; i > -1; i--) {
      const result = this._renderers[i].hitTest?.(x, y)

      if (result !== null) {
        return result
      }
    }

    return null
  }
}

export class HandleRenderer<GPaneView extends DrawingPaneView> {
  protected _paneView: GPaneView

  private _config: {
    pointIndices: [number, number]
  }
  private _size = 8 / 2

  constructor(
    paneView: GPaneView,
    config: {
      pointIndices: [number, number]
    },
  ) {
    this._paneView = paneView
    this._config = config
  }

  draw(target: CanvasRenderingTarget2D) {
    if (!this._paneView.isSelected && !this._paneView.isHovered) {
      return
    }

    target.useBitmapCoordinateSpace((scope) => {
      const x = this._paneView.viewPoints[this._config.pointIndices[0]].x
      const y = this._paneView.viewPoints[this._config.pointIndices[1]].y

      if (x === null || y === null) {
        return
      }

      const ctx = scope.context
      const horizontalPositions = positionsBox(
        x - this._size,
        x + this._size,
        scope.horizontalPixelRatio,
      )
      const verticalPositions = positionsBox(
        y - this._size,
        y + this._size,
        scope.verticalPixelRatio,
      )

      ctx.fillStyle = getBrowserCssVariable('white')
      ctx.fillRect(
        horizontalPositions.position,
        verticalPositions.position,
        horizontalPositions.length,
        verticalPositions.length,
      )

      ctx.strokeStyle = getBrowserCssVariable('waterloo')
      ctx.lineWidth = 3
      ctx.strokeRect(
        horizontalPositions.position,
        verticalPositions.position,
        horizontalPositions.length,
        verticalPositions.length,
      )
    })
  }

  hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null {
    const px = this._paneView.viewPoints[this._config.pointIndices[0]].x!
    const py = this._paneView.viewPoints[this._config.pointIndices[1]].y!

    if (
      checkIsOutsideRect(x, y, px - this._size, px + this._size, py - this._size, py + this._size)
    ) {
      return null
    }

    return { type: RenderHitTest.HANDLE, indices: this._config.pointIndices }
  }
}

export class DrawingAxisPaneRenderer implements IPrimitivePaneRenderer {
  _points: (number | null)[]
  _fillColor: string
  _vertical: boolean = false

  constructor(points: (number | null)[], fillColor: string, vertical: boolean) {
    this._points = points
    this._fillColor = fillColor
    this._vertical = vertical
  }

  draw(target: CanvasRenderingTarget2D) {
    target.useBitmapCoordinateSpace((scope) => {
      const [p1, p2] = this._points
      if (p1 === null || p2 === null) return

      const ctx = scope.context
      ctx.globalAlpha = 0.5
      const positions = positionsBox(
        p1,
        p2,
        this._vertical ? scope.verticalPixelRatio : scope.horizontalPixelRatio,
      )

      ctx.fillStyle = this._fillColor
      if (this._vertical) {
        ctx.fillRect(0, positions.position, 15, positions.length)
      } else {
        ctx.fillRect(positions.position, 0, positions.length, 15)
      }
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

/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param px1 - x coordinate of the left of the rectangle
 * @param px2 - x coordinate of the right of the rectangle
 * @param py1 - y coordinate of the top of the rectangle
 * @param py2 - y coordinate of the bottom of the rectangle
 * @returns {boolean} - true if the point is outside the rectangle, false otherwise
 */
export function checkIsOutsideRect(
  x: Coordinate,
  y: Coordinate,
  px1: null | number,
  px2: null | number,
  py1: null | number,
  py2: null | number,
): boolean {
  return x < px1! || x > px2! || y < py1! || y > py2!
}

const TOLERANCE = 6

/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param p1 - first point of the line
 * @param p2 - second point of the line
 * @returns {boolean} - true if the point is outside the line, false otherwise
 */
export function checkIsOutsideLine(
  x: Coordinate,
  y: Coordinate,
  p1: { x: null | Coordinate; y: null | Coordinate },
  p2: { x: null | Coordinate; y: null | Coordinate },
  tolerance: number = TOLERANCE,
): boolean {
  const [top, bottom] = p1.y! < p2.y! ? [p1, p2] : [p2, p1]

  if (y < top.y! || y > bottom.y!) {
    return true
  }

  // Calculate the progress between bottom and top (0 at bottom, 1 at top)
  const t = (y - bottom.y!) / (top.y! - bottom.y!)

  // Calculate left boundary at this Y (interpolate between leftBottom and leftTop)
  const leftX = bottom.x! + t * (top.x! - bottom.x!)

  // Calculate right boundary at this Y (interpolate between rightBottom and rightTop)
  const rightX = bottom.x! + t * (top.x! - bottom.x!)

  // Check if X is outside the horizontal bounds at this Y
  if (x < leftX - tolerance || x > rightX + tolerance) {
    return true
  }

  return false
}
