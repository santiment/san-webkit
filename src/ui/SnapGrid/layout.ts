import type { SnapGridController, SnapItem } from './types'

import { Field } from './types'

/** Ascending sort - top-to-bottom & left-to-right */
export const sortLayout = (layout: SnapItem[]) =>
  layout.slice().sort((a, b) => a[Field.TOP] - b[Field.TOP] || a[Field.LEFT] - b[Field.LEFT])

export function Dropzone(draggedNode: HTMLElement) {
  const dropzoneNode = document.createElement('div')

  dropzoneNode.setAttribute('style', draggedNode.getAttribute('style') as string)
  dropzoneNode.classList.add('snap-dropzone')

  draggedNode.parentNode?.append(dropzoneNode)

  return dropzoneNode
}

export type GridController = ReturnType<typeof Grid>
export function Grid() {
  const grid = [] as number[]

  return {
    getRow([iLeft, _, iWidth]: SnapItem, iRight = iLeft + iWidth) {
      const numbers = grid.slice(iLeft, iRight)

      let max = 0
      for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) max = numbers[i]
      }
      return max
    },
    place(
      [iLeft, iTop, iWidth, iHeight]: SnapItem,
      iRight = iLeft + iWidth,
      iBottom = iTop + iHeight,
    ) {
      for (let i = iLeft; i < iRight; i++) grid[i] = iBottom
    },
  }
}

export function normalizeGrid(
  sortedLayout: SnapItem[],
  changedItems: Set<SnapItem>,
  draggedItem: SnapItem,
  onDraggedItemNormalize?: (oldTop: number, newTop: number) => void,
) {
  const grid = Grid()

  for (let i = 0; i < sortedLayout.length; i++) {
    const item = sortedLayout[i]

    const [iLeft, iTop, iWidth] = item
    const iRight = iLeft + iWidth

    const top = grid.getRow(item, iRight)

    if (top !== iTop) {
      item[Field.TOP] = top
      if (item !== draggedItem) changedItems.add(item)
      else if (onDraggedItemNormalize) onDraggedItemNormalize(iTop, top)
    }

    grid.place(item, iRight, top + item[Field.HEIGHT])
  }
}

export function resolveDraggedCollisions(
  sortedLayout: SnapItem[],
  draggedItem: SnapItem,
  draggedStartBottom: number,
  isDraggingDown: boolean,
) {
  const [left, top, width, height] = draggedItem

  const bottom = top + height
  const right = left + width
  const offset = isDraggingDown ? 0 : 1

  let compacted = isDraggingDown && Grid()
  let changed = new Set<SnapItem>()

  for (let i = 0; i < sortedLayout.length; i++) {
    const item = sortedLayout[i]
    if (draggedItem === item) continue

    const [iLeft, iTop, iWidth, iHeight] = item
    const iRight = iLeft + iWidth
    const iBottom = iTop + iHeight

    if (compacted && draggedStartBottom > iTop) compacted.place(item, iRight, iBottom)

    if (top >= iBottom) continue
    if (bottom <= iTop) continue
    if (left >= iRight) continue
    if (right <= iLeft) continue

    item[Field.TOP] += offset
    changed.add(item)
  }

  if (compacted) {
    changed.forEach((item) => {
      const row = (compacted as GridController).getRow(item)

      if (row + item[Field.HEIGHT] > top) return

      item[Field.TOP] = row
    })
  }

  return changed
}

export function updateGridContainerHeight(settings: SnapGridController) {
  const { layout } = settings
  let bottom = 0

  for (let i = 0; i < layout.length; i++) {
    const item = layout[i]
    const iBottom = item[Field.TOP] + item[Field.HEIGHT]
    if (bottom < iBottom) bottom = iBottom
  }

  setGridContainerHeight(bottom, settings)
}

export function setGridContainerHeight(
  rows: number,
  { gridContainerNode, rowSize, margin }: SnapGridController,
) {
  gridContainerNode.style.height = rows * (rowSize + margin[1]) + 'px'
}
