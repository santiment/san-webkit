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

type DragController =
  | undefined
  | {
      onMove: (e: MouseEvent) => void
      onEnd?: () => void
    }

export function Draggable(
  clb: (settings: SnapGridController) => (e: MouseEvent, ctx: DraggableCtx) => DragController,
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

      layout.forEach((item) => {
        translateLayoutItem(item[Field.NODE], item, settings)
      })

      const { pageX, pageY } = e
      const ctx = { pageX, pageY } as DraggableCtx
      const dragCtx = onStart(e, ctx)

      if (!dragCtx) return

      const { draggedNode, dropzoneNode, draggedItem } = ctx
      const { onMove, onEnd } = dragCtx

      draggedNode.classList.add(activeClassName)

      if (handlers.onStart) handlers.onStart()

      function onMouseMove(e: MouseEvent) {
        ctx.xDiff = e.pageX - ctx.pageX
        ctx.yDiff = e.pageY - ctx.pageY

        onMove(e)
      }

      function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove)

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
