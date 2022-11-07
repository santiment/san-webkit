import type { Margin, SnapGridController, SnapItem } from './types'
import type { DraggableCtx } from './event'

import { minMax } from '@/utils'
import { Field } from './types'
import { Draggable } from './event'
import { normalizeGrid, resolveDraggedCollisions, Dropzone, sortLayout } from './layout'
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

export function SnapGrid(layout: SnapItem[], settings: Settings) {
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
    layout,
    cols,
    columnSize: gridWidth || 0, // LAYOUT_WIDTH / settings.cols,

    rowSize,
    margin: [xMargin, yMargin],

    maxCols,
    minCols,
    maxRows,
    minRows,

    mount,
    resize,
  } as SnapGridController

  Object.assign(ctx, ItemMover(layout, ctx))

  function mount(gridContainerNode: HTMLElement) {
    resize(gridContainerNode.offsetWidth)

    Array.from(gridContainerNode.children).forEach((node: HTMLElement, i) => {
      node.dataset.i = i.toString()
      layout[i][Field.NODE] = node
    })
  }

  function resize(gridWidth: number) {
    const [xMargin] = ctx.margin
    const margin = xMargin - (xMargin / settings.cols) * 2

    ctx.columnSize = gridWidth / settings.cols - margin / 2
  }

  return ctx
}

const ItemMover = Draggable((layout, settings) => {
  function onStart(e: MouseEvent, ctx: DraggableCtx) {
    const draggedNode = e.currentTarget as HTMLElement
    const draggedItem = layout[+(draggedNode.dataset.i as string)]
    const dropzoneNode = Dropzone(draggedNode)
    const { columnSize, rowSize } = settings

    Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode })

    const [startX, startY] = getAbsolutePosition(draggedItem, settings)

    let [startLeft, startTop, draggedWidth, draggedHeight] = draggedItem
    let sortedLayout = sortLayout(layout)

    const [, yMargin] = settings.margin

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
    }

    return { onMove }
  }

  return onStart
}, 'snap-item_dragged')