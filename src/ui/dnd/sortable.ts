import type { ScrollContext } from './scroll'
import { autoScroll, clearAutoScroll, getScrollingParent } from './scroll'

export type Options = {
  scroll?: boolean
  cloner?: (node: DragElement) => HTMLElement
  onDragEnd?: (oldIndex: number, newIndex: number) => void
}
export type Context = Options & {
  grid: [number, DragElement[]][]
  nodes: DragElement[]
  recalcGrid: () => void
  isDisabled: boolean
  minDiff?: number
  scrollParent: HTMLElement | undefined | null
  scrollInterval: number | undefined
}

export type DragElement = HTMLElement & {
  isDndHooked: boolean
  dnd: {
    ctx: Context
    nodeIndex: number
    clientRect: {
      top: number
      bottom: number
      left: number
      right: number
      width: number
      height: number
      centerX: number
      centerY: number
    }
  }
}

/** Requires all sortable nodes to be present in the same parent node */
export function newSortableContext(options?: Options) {
  const grid = [] as [number, HTMLElement[]][]
  let nodes = [] as DragElement[]
  const ctx = Object.assign({ grid, nodes, recalcGrid }, options) as Context

  function updateItem(node: DragElement, nodeIndex: number) {
    const clientRect = node.getBoundingClientRect() as any
    const { left, top, width, height } = clientRect
    clientRect.centerX = left + width / 2
    clientRect.centerY = top + height / 2

    const gridLastIndex = grid.length - 1
    const lastRow = grid[gridLastIndex]
    const isNewRow = lastRow ? lastRow[0] < top : true

    if (isNewRow) {
      grid.push([top, [node]]) - 1
    } else {
      lastRow[1].push(node) - 1
    }

    node.dnd = { ctx, nodeIndex, clientRect }
  }

  function recalcGrid() {
    if (nodes.length === 0) return
    ctx.nodes = (nodes[0].parentNode as HTMLElement).children as any as DragElement[]
    grid.length = 0
    for (let i = 0, len = nodes.length; i < len; i++) {
      updateItem(nodes[i] as DragElement, i)
    }
  }

  return {
    ctx,
    toggle(value: boolean) {
      ctx.isDisabled = value
    },
    addItem(node: HTMLElement) {
      const parent = node.parentNode as HTMLElement
      nodes = parent.children as any as DragElement[]

      ctx.scrollParent = ctx.scroll ? getScrollingParent(parent) : undefined
      ctx.nodes = nodes

      // TODO: Pass node index explicitly to avoid grid recalc [@vanguard | May 24, 2021]
      recalcGrid()
      newDndItem(node as DragElement)
    },
  }
}

function newDragNode(node: DragElement): HTMLElement {
  const { cloner } = node.dnd.ctx
  const { top, left } = node.getBoundingClientRect()
  const { scrollY } = window

  const cloned = cloner ? cloner(node) : (node.cloneNode(true) as HTMLElement)
  const dragNode = document.createElement('div')
  dragNode.appendChild(cloned)

  cloned.style.pointerEvents = 'none'
  cloned.classList.add('preview-dragged')
  dragNode.style.cursor = 'grabbing'
  dragNode.style.top = top + scrollY + 'px'
  dragNode.style.left = left + 'px'
  dragNode.style.zIndex = '1000'
  document.body.appendChild(dragNode)

  return dragNode
}

export function newDndItem(node: DragElement) {
  if (node.isDndHooked) return
  node.isDndHooked = true
  node.addEventListener('mousedown', (e) => {
    const { clientX: startX, clientY: startY } = e
    const { dnd } = node
    const { ctx } = dnd
    const { nodes, grid, minDiff = 20, isDisabled, scrollParent } = ctx
    const { clientRect, nodeIndex } = dnd
    const { left, right, width, centerY } = clientRect
    let dragNode

    if (!isDisabled) window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    let isRightShift = false
    let newNodeIndex = nodeIndex

    const nodeRect = node.getBoundingClientRect()
    const scrollStart = scrollParent?.scrollTop || 0
    const scrollRect = scrollParent?.getBoundingClientRect()

    function onMouseMove({ clientX, clientY }) {
      const xDiff = clientX - startX
      const yDiff = clientY - startY
      // prettier-ignore
      const newY = centerY + yDiff -
            (scrollParent ? (scrollStart - scrollParent.scrollTop) : 0)

      if (!dragNode) {
        if (Math.abs(xDiff) > minDiff || Math.abs(yDiff) > minDiff) {
          dragNode = newDragNode(node)
        } else {
          return
        }
      }

      if (scrollParent) {
        autoScroll(ctx as ScrollContext, nodeRect, scrollRect, yDiff)
      }

      // TODO: Reset transform only for previously touched ones [@vanguard | May 24, 2021]
      for (let i = 0, len = nodes.length; i < len; i++) {
        nodes[i].style.transform = 'translate3d(0,0,0)'
      }

      let newRowIndex = 0
      for (let i = 0, len = grid.length; i < len; i++) {
        if (grid[i][0] < newY) newRowIndex++
      }
      newRowIndex -= +(newRowIndex !== 0)

      const targetRowNodes = grid[newRowIndex][1]
      const nodesRowLength = targetRowNodes.length

      const isLeftMove = xDiff < 0
      const newX = (isLeftMove ? left : right) + xDiff
      let newInRowIndex = isLeftMove ? 0 : nodesRowLength - 1
      if (isLeftMove) {
        // TODO: Search until current item index [@vanguard | May 24, 2021]
        for (; newInRowIndex < nodesRowLength; newInRowIndex++) {
          const { clientRect } = targetRowNodes[newInRowIndex].dnd
          if (newX < clientRect.centerX) break
        }
        if (newInRowIndex === nodesRowLength) newInRowIndex--
      } else {
        // TODO: Search until current item index [@vanguard | May 24, 2021]
        for (; newInRowIndex > -1; newInRowIndex--) {
          const { clientRect } = targetRowNodes[newInRowIndex].dnd
          if (newX > clientRect.centerX) break
        }
        if (newInRowIndex === -1) newInRowIndex++
      }

      newNodeIndex = targetRowNodes[newInRowIndex].dnd.nodeIndex
      isRightShift = newNodeIndex > nodeIndex
      const start = isRightShift ? nodeIndex + +(nodeIndex === 0) : newNodeIndex
      const end = isRightShift ? newNodeIndex - +(newNodeIndex === nodes.length) : nodeIndex

      for (let i = start; i <= end; i++) {
        const node = nodes[i]
        const neighbour = (
          isRightShift ? node.previousElementSibling : node.nextElementSibling
        ) as DragElement

        if (!neighbour) continue
        const neighbourRect = neighbour.dnd.clientRect
        const iterRect = node.dnd.clientRect

        const offsetY = neighbourRect.top - iterRect.top
        let offsetX = neighbourRect.left - iterRect.left

        if (isRightShift) {
          if (i > 1) offsetX -= width - neighbourRect.width
        } else {
          offsetX += width - iterRect.width
        }

        node.style.transition = 'transform 250ms'
        node.style.transform = `translate3d(${offsetX}px,${offsetY}px,0px)`
      }

      node.style.visibility = 'hidden'
      dragNode.style.position = 'absolute'
      dragNode.style.transform = `translate3d(${xDiff}px,${yDiff}px,0px)`
    }

    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      if (!dragNode || isDisabled) return

      clearAutoScroll(ctx)
      const { recalcGrid, onDragEnd } = dnd.ctx
      dragNode.remove()
      node.style.visibility = ''

      for (let i = 0, len = nodes.length; i < len; i++) {
        nodes[i].style.transform = ''
        nodes[i].style.transition = ''
      }

      // NOTE: Should enable manual nodes rearranging? [@vanguard | May 24, 2021]
      // node.parentNode.insertBefore(
      //   node,
      //   nodes[newNodeIndex + +isRightShift] || null,
      // )

      onDragEnd?.(nodeIndex, newNodeIndex)
      recalcGrid()
    }
  })
}
