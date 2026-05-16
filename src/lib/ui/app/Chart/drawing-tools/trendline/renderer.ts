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
import { LineStyle } from '../types.js'

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
      const { lineWidth, strokeColor, lineStyle } = this._paneView.options

      ctx.save()

      const segments = lineStyle
        ? lineStyle === LineStyle.DOTTED
          ? [Math.max(lineWidth, 2), 5]
          : [8, 8]
        : undefined

      const lineDash =
        segments &&
        ([
          positionPoint(segments[0], scope.horizontalPixelRatio),
          positionPoint(segments[1], scope.horizontalPixelRatio),
        ] as const)

      drawLine(
        ctx,
        positionPoint(p1.x, scope.horizontalPixelRatio),
        positionPoint(p1.y, scope.verticalPixelRatio),
        positionPoint(p2.x, scope.horizontalPixelRatio),
        positionPoint(p2.y, scope.verticalPixelRatio),
        lineWidth * scope.verticalPixelRatio,
        strokeColor,
        lineDash,
      )

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

export function drawLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  width: number,
  color: string,
  lineDash?: readonly [number, number],
) {
  ctx.beginPath()

  if (lineDash) {
    ctx.setLineDash(lineDash)
  }

  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = width
  ctx.strokeStyle = color

  ctx.stroke()
}
