const PositionSign = {
  top: -1,
  left: -1,
  right: 1,
  bottom: 1,
}
export function getHorizontalCorrection(tooltipWidth, left) {
  if (left < 0) return -left
  const { innerWidth } = window
  const maxLeft = innerWidth - tooltipWidth
  return left > maxLeft ? maxLeft - left : 0
}
export function calculateAlignment(triggerWidthOrHeight, tooltipWidthOrHeight, align) {
  switch (align) {
    case 'start':
      return 0
    case 'center':
      return (triggerWidthOrHeight - tooltipWidthOrHeight) / 2
    case 'end':
      return triggerWidthOrHeight - tooltipWidthOrHeight
  }
}
export function getTooltipStyles(tooltip, trigger, position, align, offsetX = 0, offsetY = 0) {
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
    top += (position === 'top' ? -tooltipHeight : triggerHeight) + sign * offsetY
    left += calculateAlignment(triggerWidth, tooltipWidth, align) + offsetX
    left += getHorizontalCorrection(tooltipWidth, left)
  } else {
    top += calculateAlignment(triggerHeight, tooltipHeight, align)
    left += (position === 'left' ? -tooltipWidth : triggerWidth) + sign * offsetX
  }
  if (isInRelativeCtx === false) {
    top += window.scrollY
  }
  const bottomViewportDiff = document.body.scrollHeight - (top + tooltipHeight)
  if (bottomViewportDiff < 0) top += bottomViewportDiff - 5
  return { left, top }
}
//# sourceMappingURL=utils.js.map
