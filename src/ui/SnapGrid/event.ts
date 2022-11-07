import { Field, Handlers, SnapGridController, SnapItem } from './types'

import { translateLayoutItem } from './style'

export type DraggableCtx = {
  pageX: number
  pageY: number
  xDiff: number
  yDiff: number

  draggedNode: HTMLElement
  dropzoneNode: HTMLElement
  draggedItem: SnapItem
}

type DragController = {
  onMove: (e: MouseEvent) => void
  onEnd?: () => void
}

const THRESHOLD = 10
export function Draggable(
  clb: (
    settings: SnapGridController,
  ) => (currentTarget: HTMLElement, ctx: DraggableCtx) => undefined | DragController,
  activeClassName: string,
) {
  return (settings: SnapGridController, handlers: Handlers = {}) => {
    const { layout } = settings
    const onStart = clb(settings)

    let timer
    function onDragStart(e: MouseEvent) {
      e.stopImmediatePropagation()
      e.preventDefault()
      clearTimeout(timer)

      const { pageX, pageY, currentTarget } = e
      const ctx = { pageX, pageY } as DraggableCtx

      let isRegularClick = true
      let dragCtx: DragController | undefined

      function enableDragging() {
        layout.forEach((item) => {
          translateLayoutItem(item[Field.NODE], item, settings)
        })

        dragCtx = onStart(currentTarget as HTMLElement, ctx)
        if (!dragCtx) return

        ctx.draggedNode.classList.add(activeClassName)

        if (handlers.onStart) handlers.onStart()

        isRegularClick = false
      }

      function onMouseMove(e: MouseEvent) {
        ctx.xDiff = e.pageX - ctx.pageX
        ctx.yDiff = e.pageY - ctx.pageY

        if (isRegularClick) {
          const { xDiff, yDiff } = ctx
          if (Math.max(Math.abs(xDiff), Math.abs(yDiff)) > THRESHOLD) {
            enableDragging()
          }
          return
        }

        const { onMove } = dragCtx as DragController
        onMove(e)
      }

      function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove)

        if (isRegularClick) return

        const { draggedNode, dropzoneNode, draggedItem } = ctx
        const { onEnd } = dragCtx as DragController

        if (onEnd) onEnd()

        translateLayoutItem(draggedNode, draggedItem, settings)
        draggedNode.classList.remove(activeClassName)
        dropzoneNode.remove()

        // NOTE: Because of scroll bar, relative translate will not be equal to absolute translate
        /*
         timer = setTimeout(() => {
         layout.forEach((item) => {
         setResponsiveTranslate(item, settings)
         })
         }, 250) */

        if (handlers.onEnd) handlers.onEnd()
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp, { once: true })
    }

    return {
      onDragStart,
    }
  }
}
