export type Position = 'top' | 'right' | 'bottom' | 'left'
export type Align = 'start' | 'center' | 'end'
type Offset = {
  left: number
  top: number
}

const PositionSign = {
  top: -1,
  left: -1,
  right: 1,
  bottom: 1,
}

function getHorizontalCorrection(tooltipWidth: number, left: number): number {
  if (left < 0) return -left

  const { innerWidth } = window
  const maxLeft = innerWidth - tooltipWidth
  return left > maxLeft ? maxLeft - left : 0
}

export function calculateAlignment(
  triggerWidthOrHeight: number,
  tooltipWidthOrHeight: number,
  align: Align,
): number {
  switch (align) {
    case 'start':
      return 0
    case 'center':
      return (triggerWidthOrHeight - tooltipWidthOrHeight) / 2
    case 'end':
      return triggerWidthOrHeight - tooltipWidthOrHeight
  }
}

export function getTooltipStyles(
  tooltip: HTMLElement,
  trigger: HTMLElement,
  position: Position,
  align: Align,
  offsetX = 0,
  offsetY = 0,
): Offset {
  const { clientWidth: tooltipWidth, clientHeight: tooltipHeight } = tooltip
  const {
    left: triggerLeft,
    top: triggerTop,
    width: triggerWidth,
    height: triggerHeight,
  } = trigger.getBoundingClientRect()

  const { offsetLeft, offsetTop } = trigger
  const sign = PositionSign[position]
  const isInRelativeCtx = !!trigger.offsetParent

  let top = isInRelativeCtx ? offsetTop : triggerTop
  let left = isInRelativeCtx ? offsetLeft : triggerLeft

  if (position === 'top' || position === 'bottom') {
    top +=
      (position === 'top' ? -tooltipHeight : triggerHeight) + sign * offsetY
    left += calculateAlignment(triggerWidth, tooltipWidth, align)
    left += getHorizontalCorrection(tooltipWidth, left)
  } else {
    top += calculateAlignment(triggerHeight, tooltipHeight, align)
    left +=
      (position === 'left' ? -tooltipWidth : triggerWidth) + sign * offsetX
  }

  if (isInRelativeCtx === false) {
    top += window.scrollY
  }

  const bottomViewportDiff = document.body.scrollHeight - (top + tooltipHeight)
  if (bottomViewportDiff < 0) top += bottomViewportDiff - 5

  return { left, top }
}
