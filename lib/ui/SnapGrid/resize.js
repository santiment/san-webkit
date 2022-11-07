import { Draggable } from './event';
import { Dropzone, normalizeGrid, sortLayout } from './layout';
import { calcHeight, calcY, getWidth, translateLayoutItem } from './style';
import { Field } from './types';
import { minMax } from './../../utils';
export const Resizer = Draggable((layout, settings) => {
    function onStart(e, ctx) {
        const resizerNode = e.currentTarget;
        const draggedNode = resizerNode.closest('.snap-item');
        if (!draggedNode)
            return;
        const { columnSize, rowSize } = settings;
        const dropzoneNode = Dropzone(draggedNode);
        const draggedItem = layout[+draggedNode.dataset.i];
        Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode });
        let [, , draggedWidth, draggedHeight] = draggedItem;
        let { offsetWidth: nodeWidth, offsetHeight: nodeHeight } = draggedNode;
        let sortedLayout = sortLayout(layout);
        const [, yMargin] = settings.margin;
        function onEnd() {
            draggedNode.style.height = dropzoneNode.style.height;
            draggedNode.style.width = getWidth(draggedItem, settings);
        }
        function onMove() {
            const { xDiff, yDiff } = ctx;
            const leftDiff = Math.round(xDiff / columnSize);
            const topDiff = Math.round(yDiff / (rowSize + yMargin));
            draggedNode.style.width = Math.max(nodeWidth + xDiff, columnSize) + 'px';
            draggedNode.style.height = Math.max(nodeHeight + yDiff, rowSize) + 'px';
            const width = minMax(draggedWidth + leftDiff, settings.minCols, settings.maxCols);
            const height = minMax(draggedHeight + topDiff, settings.minRows, settings.maxRows);
            if (width === draggedItem[Field.WIDTH] && height === draggedItem[Field.HEIGHT]) {
                return;
            }
            draggedItem[Field.WIDTH] = width;
            draggedItem[Field.HEIGHT] = height;
            const changed = new Set();
            normalizeGrid(sortedLayout, changed, draggedItem, (oldTop, newTop) => {
                draggedHeight = Math.max(draggedItem[Field.HEIGHT] + oldTop - newTop, 1);
                if (topDiff < 0)
                    draggedHeight = Math.max(draggedHeight + topDiff, 1);
                draggedItem[Field.HEIGHT] = draggedHeight;
                nodeHeight = calcHeight(draggedHeight, settings);
                draggedNode.style.height = nodeHeight + 'px';
                ctx.pageY = calcY(newTop, settings) + resizerNode.offsetTop + 10;
            });
            sortedLayout = sortLayout(layout);
            translateLayoutItem(draggedNode, draggedItem, settings);
            translateLayoutItem(dropzoneNode, draggedItem, settings);
            dropzoneNode.style.width = getWidth(draggedItem, settings);
            dropzoneNode.style.height = calcHeight(draggedItem[Field.HEIGHT], settings) + 'px';
            changed.forEach((item) => {
                translateLayoutItem(item[Field.NODE], item, settings);
            });
        }
        return { onEnd, onMove };
    }
    return onStart;
}, 'snap-item_resizing');
//# sourceMappingURL=resize.js.map