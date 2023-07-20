import { Draggable } from './event.js';
import { Dropzone, normalizeGrid, sortLayout, updateGridContainerHeight } from './layout.js';
import { calcHeight, calcY, getWidth, translateLayoutItem } from './style.js';
import { Field } from './types.js';
import { minMax } from './../../utils/index.js';
export const Resizer = Draggable((settings) => {
    function onStart(resizerNode, ctx) {
        const draggedNode = resizerNode.closest('.snap-item');
        if (!draggedNode)
            return; // Returning true to signal early exit
        const { layout, cols, columnSize, rowSize, minCols, maxCols, minRows, maxRows } = settings;
        const dropzoneNode = Dropzone(draggedNode);
        const draggedItem = layout[+draggedNode.dataset.i];
        Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode });
        let [, , draggedWidth, draggedHeight] = draggedItem;
        let { offsetWidth: nodeWidth, offsetHeight: nodeHeight } = draggedNode;
        let sortedLayout = sortLayout(layout);
        const [xMargin, yMargin] = settings.margin;
        // TODO: recalc using raw settings.columnSize
        const minWidth = (settings.gridWidth / cols) * minCols - (xMargin / cols) * (cols - minCols);
        const minHeight = calcHeight(minRows, settings);
        function onEnd() {
            draggedNode.style.height = dropzoneNode.style.height;
            draggedNode.style.width = getWidth(draggedItem, settings);
        }
        function onMove() {
            const { xDiff, yDiff } = ctx;
            // TODO: Should X change include margin offset?
            const leftDiff = Math.round(xDiff / columnSize);
            const topDiff = Math.round(yDiff / (rowSize + yMargin));
            draggedNode.style.width = Math.max(nodeWidth + xDiff, minWidth) + 'px';
            draggedNode.style.height = Math.max(nodeHeight + yDiff, minHeight) + 'px';
            const width = minMax(draggedWidth + leftDiff, minCols, maxCols);
            const height = minMax(draggedHeight + topDiff, minRows, maxRows);
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
                nodeHeight = calcHeight(draggedHeight, settings); // TODO: Subtract diff to keep under mouse position
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
            updateGridContainerHeight(settings);
        }
        return { onEnd, onMove };
    }
    return onStart;
}, 'snap-item_resizing');
//# sourceMappingURL=resize.js.map