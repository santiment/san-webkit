import {
  drawCircle,
  drawSvgIcon,
  ItemMouseState,
  type BitmapCoordinates,
  type ICircleDrawOptions,
  type IRenderItem,
} from '@santiment-network/chart-next'

export const AI_ICON = {
  boxSize: [9, 7],
  path: new Path2D(
    'M1.76219 5.82543L1.27219 7.10542H-0.0078125L2.61219 0.435425H4.07219L6.69219 7.10542H5.41219L4.92219 5.82543H1.76219ZM7.7207 0.435425H8.8907V7.10542H7.7207V0.435425ZM4.5918 4.79566L3.3418 1.42566L2.0918 4.79566H4.5918Z',
  ),
} as const

export function drawSpikeExplanation(
  this: IRenderItem,
  ctx: CanvasRenderingContext2D,
  coords: BitmapCoordinates,
  circleOptions: ICircleDrawOptions,
): void {
  if (this.state === ItemMouseState.ACTIVE) {
    ctx.fillStyle = 'blue'
    drawCircle(ctx, coords, circleOptions)
    ctx.fill()

    ctx.fillStyle = 'white'
    drawSvgIcon(ctx, coords, AI_ICON)
    return
  }

  ctx.strokeStyle = 'blue'
  drawCircle(ctx, coords, circleOptions)
  ctx.stroke()

  if (this.state === ItemMouseState.HOVER) {
    ctx.fillStyle = 'cyan'
    ctx.fill()
  }

  ctx.fillStyle = 'blue'
  drawSvgIcon(ctx, coords, AI_ICON)
}
