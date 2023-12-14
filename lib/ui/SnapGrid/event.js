import { Field } from './types.js';
import { clearAutoScroll } from './../../ui/dnd/scroll.js';
import { translateLayoutItem } from './style.js';
const THRESHOLD = 10;
export function Draggable(clb, activeClassName) {
    return (settings, handlers = {}) => {
        const { layout } = settings;
        const onStart = clb(settings);
        let timer;
        function onDragStart(e) {
            if (settings.readonly)
                return;
            e.stopImmediatePropagation();
            clearTimeout(timer);
            const preventDefaultMouseDown = () => e.preventDefault();
            const target = e.target;
            const isInsideEditable = target.isContentEditable;
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
                var _a, _b;
                ctx.xDiff = e.pageX - ctx.pageX;
                ctx.yDiff = e.pageY - ctx.pageY;
                if (isRegularClick) {
                    const { xDiff, yDiff } = ctx;
                    if (Math.max(Math.abs(xDiff), Math.abs(yDiff)) > THRESHOLD) {
                        if (isInsideEditable && ((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.isCollapsed) === false) {
                            window.removeEventListener('mousemove', onMouseMove);
                            return;
                        }
                        preventDefaultMouseDown();
                        enableDragging();
                        (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.empty();
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
                // NOTE: Because of scroll bar, relative translate will not be equal to absolute translate
                /*
                 timer = setTimeout(() => {
                 layout.forEach((item) => {
                 setResponsiveTranslate(item, settings)
                 })
                 }, 250) */
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