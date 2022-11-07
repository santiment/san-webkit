import { Field } from './types';
import { translateLayoutItem } from './style';
export function Draggable(clb, activeClassName) {
    return (layout, settings) => {
        const onStart = clb(layout, settings);
        let timer;
        function onDragStart(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            clearTimeout(timer);
            layout.forEach((item) => {
                translateLayoutItem(item[Field.NODE], item, settings);
            });
            const { pageX, pageY } = e;
            const ctx = { pageX, pageY };
            const dragCtx = onStart(e, ctx);
            if (!dragCtx)
                return;
            const { draggedNode, dropzoneNode, draggedItem } = ctx;
            const { onMove, onEnd } = dragCtx;
            draggedNode.classList.add(activeClassName);
            function onMouseMove(e) {
                ctx.xDiff = e.pageX - ctx.pageX;
                ctx.yDiff = e.pageY - ctx.pageY;
                onMove(e);
            }
            function onMouseUp() {
                window.removeEventListener('mousemove', onMouseMove);
                if (onEnd)
                    onEnd();
                translateLayoutItem(draggedNode, draggedItem, settings);
                draggedNode.classList.remove(activeClassName);
                dropzoneNode.remove();
            }
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp, { once: true });
        }
        return {
            onDragStart,
        };
    };
}
//# sourceMappingURL=event.js.map