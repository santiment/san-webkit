import type { Handlers, Margin, SnapGridController, SnapItem } from './types'
import type { DraggableCtx } from './event'

import { minMax } from '@/utils'
import { autoScroll, getScrollingParent } from '@/ui/dnd/scroll'
import { Field } from './types'
import { Draggable } from './event'
import {
  normalizeGrid,
  resolveDraggedCollisions,
  Dropzone,
  sortLayout,
  updateGridContainerHeight,
  setGridContainerHeight,
} from './layout'
import { calcY, getTranslate, translateLayoutItem } from './style'
import './snap-grid.css'

export function getAbsolutePosition([left, top]: SnapItem, settings: SnapGridController) {
  const { columnSize, margin } = settings

  const [xMargin] = margin
  const xOffset = (xMargin / 2) * left

  return [left * columnSize + xOffset, calcY(top, settings)]
}

type Settings = {
  cols: number
  rowSize: number
  gridWidth?: number
  margin?: Margin

  maxCols?: number
  minCols?: number
  maxRows?: number
  minRows?: number
}

export function SnapGrid(layout: SnapItem[], settings: Settings, handlers: Handlers) {
  const {
    cols,
    rowSize,
    gridWidth,
    maxCols = cols,
    minCols = 1,
    maxRows,
    minRows = 1,
    margin = [12, 12],
  } = settings
  const [xMargin, yMargin = xMargin] = margin

  const ctx = {
    gridWidth,

    layout,
    cols,
    columnSize: (gridWidth || 0) / cols, // LAYOUT_WIDTH / settings.cols,

    rowSize,
    margin: [xMargin, yMargin],

    maxCols,
    minCols,
    maxRows,
    minRows,

    mount,
    resize,
    updateLayout,
  } as SnapGridController

  Object.assign(ctx, ItemMover(ctx, handlers))

  function mount(gridContainerNode: HTMLElement) {
    ctx.gridContainerNode = gridContainerNode
    resize(gridContainerNode.offsetWidth)

    let bottom = 0
    Array.from(gridContainerNode.children).forEach((node: HTMLElement, i) => {
      const item = ctx.layout[i]
      node.dataset.i = i.toString()
      item[Field.NODE] = node

      const iBottom = item[Field.TOP] + item[Field.HEIGHT]
      if (bottom < iBottom) bottom = iBottom
    })

    setGridContainerHeight(bottom, ctx)
    ctx.scrollParent = getScrollingParent(gridContainerNode)
  }

  function resize(gridWidth: number) {
    const [xMargin] = ctx.margin
    const margin = xMargin - (xMargin / settings.cols) * 2

    ctx.gridWidth = gridWidth
    ctx.columnSize = gridWidth / settings.cols - margin / 2 // TODO: don't subtract margin?
  }

  function updateLayout(layout: SnapItem[]) {
    ctx.layout = layout
  }

  return ctx
}

const ItemMover = Draggable((settings) => {
  function onStart(draggedNode: HTMLElement, ctx: DraggableCtx) {
    const { layout, scrollParent, columnSize, rowSize } = settings
    const draggedItem = layout[+(draggedNode.dataset.i as string)]
    const dropzoneNode = Dropzone(draggedNode)

    Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode })

    const [startX, startY] = getAbsolutePosition(draggedItem, settings)

    let [startLeft, startTop, draggedWidth, draggedHeight] = draggedItem
    let sortedLayout = sortLayout(layout)

    const [, yMargin] = settings.margin

    const nodeRect = draggedNode.getBoundingClientRect()
    const scrollStart = scrollParent?.scrollTop || 0
    const scrollRect = { top: 0, bottom: window.innerHeight }

    function onMove(e: MouseEvent) {
      const { xDiff, yDiff } = ctx

      const x = startX + xDiff
      const y = startY + yDiff

      draggedNode.style.transform = getTranslate(x, y)

      // TODO: Should X change include margin offset?
      const left = minMax(Math.round(x / columnSize), 0, settings.cols - draggedWidth)
      const top = Math.round(y / (rowSize + yMargin))

      if (startLeft === left && startTop === top) return

      draggedItem[Field.LEFT] = left
      draggedItem[Field.TOP] = top

      const changed = resolveDraggedCollisions(
        sortedLayout,
        draggedItem,
        startTop + draggedHeight,
        e.movementY > 0,
      )

      // TODO: Potential optimization - reuse grid used for intersections
      sortedLayout = sortLayout(layout)

      normalizeGrid(sortedLayout, changed, draggedItem)
      ;[startLeft, startTop] = draggedItem

      sortedLayout = sortLayout(layout)

      translateLayoutItem(dropzoneNode, draggedItem, settings)
      changed.forEach((item) => {
        translateLayoutItem(item[Field.NODE], item, settings)
      })

      updateGridContainerHeight(settings)

      if (scrollParent) {
        autoScroll(settings, nodeRect, scrollRect, yDiff - (scrollParent?.scrollTop - scrollStart))
      }
    }

    return { onMove }
  }

  return onStart
}, 'snap-item_dragged')
