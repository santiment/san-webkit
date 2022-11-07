import type { SnapGridController, SnapItem } from './types'

import { Field } from './types'

export const getTranslate = (x: number, y: number) => `translate(${x}px, ${y}px)`
export function styleTransform(left: number, top: number, settings: SnapGridController) {
  const { columnSize, margin } = settings
  const [xMargin] = margin
  const xOffset = (xMargin / 2) * left

  const x = left * columnSize + xOffset

  return getTranslate(x, calcY(top, settings))
}

export function translateLayoutItem(node: HTMLElement, item: SnapItem, settings) {
  node.style.transform = styleTransform(item[Field.LEFT], item[Field.TOP], settings)
}

export function getResponsiveTranslate([left, top, width]: SnapItem, settings: SnapGridController) {
  const { margin } = settings
  const [xMargin] = margin

  const xRatio = left / width

  return `translate(calc(${xRatio * 100}% + ${xRatio * xMargin}px), ${calcY(top, settings)}px)`
}
export function setResponsiveTranslate(item: SnapItem, settings) {
  item[Field.NODE].style.transform = getResponsiveTranslate(item, settings.rowSize)
}

// NOTE: Maybe call it getWidthCSS or getWidthPx ?
export function getWidth(item: SnapItem, settings: SnapGridController) {
  const width = item[Field.WIDTH]
  const { cols, margin } = settings
  const [xMargin] = margin

  const mrg = (xMargin / cols) * (cols - width)

  return `calc(${width / (cols / 100)}% - ${mrg}px)`
}

export function calcY(row: number, settings: SnapGridController, hasOutsideMargin = true) {
  const { rowSize, margin } = settings
  const [, yMargin] = margin

  return row * rowSize + yMargin * (row - (hasOutsideMargin ? 0 : 1))
}

export const calcHeight = (row: number, settings: SnapGridController) => calcY(row, settings, false)
