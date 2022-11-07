import type { SnapItem } from './types'
import type { DraggableCtx } from './event'

import { Draggable } from './event'
import { Dropzone, normalizeGrid, sortLayout } from './layout'
import { calcHeight, calcY, getWidth, translateLayoutItem } from './style'
import { Field } from './types'
import { minMax } from '@/utils'

export const Resizer = Draggable((layout, settings) => {
  function onStart(e: MouseEvent, ctx: DraggableCtx) {
    const resizerNode = e.currentTarget as HTMLElement
    const draggedNode = resizerNode.closest('.snap-item') as HTMLElement

    if (!draggedNode) return // Returning true to signal early exit

    const { columnSize, rowSize, minCols, maxCols, minRows, maxRows } = settings
    const dropzoneNode = Dropzone(draggedNode)
    const draggedItem = layout[+(draggedNode.dataset.i as string)]

    Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode })

    let [, , draggedWidth, draggedHeight] = draggedItem
    let { offsetWidth: nodeWidth, offsetHeight: nodeHeight } = draggedNode

    let sortedLayout = sortLayout(layout)
    const [, yMargin] = settings.margin

    function onEnd() {
      draggedNode.style.height = dropzoneNode.style.height
      draggedNode.style.width = getWidth(draggedItem, settings)
    }

    function onMove() {
      const { xDiff, yDiff } = ctx

      // TODO: Should X change include margin offset?
      const leftDiff = Math.round(xDiff / columnSize)
      const topDiff = Math.round(yDiff / (rowSize + yMargin))

      draggedNode.style.width = Math.max(nodeWidth + xDiff, columnSize * minCols) + 'px'
      draggedNode.style.height = Math.max(nodeHeight + yDiff, calcHeight(minRows, settings)) + 'px'

      const width = minMax(draggedWidth + leftDiff, minCols, maxCols)
      const height = minMax(draggedHeight + topDiff, minRows, maxRows)

      if (width === draggedItem[Field.WIDTH] && height === draggedItem[Field.HEIGHT]) {
        return
      }

      draggedItem[Field.WIDTH] = width
      draggedItem[Field.HEIGHT] = height

      const changed = new Set<SnapItem>()
      normalizeGrid(sortedLayout, changed, draggedItem, (oldTop, newTop) => {
        draggedHeight = Math.max(draggedItem[Field.HEIGHT] + oldTop - newTop, 1)
        if (topDiff < 0) draggedHeight = Math.max(draggedHeight + topDiff, 1)

        draggedItem[Field.HEIGHT] = draggedHeight

        nodeHeight = calcHeight(draggedHeight, settings) // TODO: Subtract diff to keep under mouse position
        draggedNode.style.height = nodeHeight + 'px'

        ctx.pageY = calcY(newTop, settings) + resizerNode.offsetTop + 10
      })

      sortedLayout = sortLayout(layout)

      translateLayoutItem(draggedNode, draggedItem, settings)
      translateLayoutItem(dropzoneNode, draggedItem, settings)

      dropzoneNode.style.width = getWidth(draggedItem, settings)
      dropzoneNode.style.height = calcHeight(draggedItem[Field.HEIGHT], settings) + 'px'

      changed.forEach((item: any) => {
        translateLayoutItem(item[Field.NODE], item, settings)
      })
    }

    return { onEnd, onMove }
  }

  return onStart
}, 'snap-item_resizing')
