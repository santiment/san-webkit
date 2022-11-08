import { Field } from './types';
import { clearAutoScroll } from './../../ui/dnd/scroll';
import { translateLayoutItem } from './style';
const THRESHOLD = 10;
export function Draggable(clb, activeClassName) {
    return (settings, handlers = {}) => {
        const { layout } = settings;
        const onStart = clb(settings);
        let timer;
        function onDragStart(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            clearTimeout(timer);
            const { pageX, pageY, currentTarget } = e;
            const ctx = { pageX, pageY };
            let isRegularClick = true;
            let dragCtx;
            function enableDragging() {
                layout.forEach((item) => {
                    translateLayoutItem(item[Field.NODE], item, settings);
                });
                dragCtx = onStart(currentTarget, ctx);
                if (!dragCtx)
                    return;
                ctx.draggedNode.classList.add(activeClassName);
                if (handlers.onStart)
                    handlers.onStart();
                isRegularClick = false;
            }
            function onMouseMove(e) {
                ctx.xDiff = e.pageX - ctx.pageX;
                ctx.yDiff = e.pageY - ctx.pageY;
                if (isRegularClick) {
                    const { xDiff, yDiff } = ctx;
                    if (Math.max(Math.abs(xDiff), Math.abs(yDiff)) > THRESHOLD) {
                        enableDragging();
                    }
                    return;
                }
                const { onMove } = dragCtx;
                onMove(e);
            }
            function onMouseUp() {
                window.removeEventListener('mousemove', onMouseMove);
                if (isRegularClick)
                    return;
                const { draggedNode, dropzoneNode, draggedItem } = ctx;
                const { onEnd } = dragCtx;
                if (onEnd)
                    onEnd();
                translateLayoutItem(draggedNode, draggedItem, settings);
                draggedNode.classList.remove(activeClassName);
                dropzoneNode.remove();
                clearAutoScroll(settings);
                if (handlers.onEnd)
                    handlers.onEnd();
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