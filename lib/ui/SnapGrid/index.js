import { minMax } from './../../utils';
import { Field } from './types';
import { Draggable } from './event';
import { normalizeGrid, resolveDraggedCollisions, Dropzone, sortLayout } from './layout';
import { calcY, getTranslate, translateLayoutItem } from './style';
import './snap-grid.css';
export function getAbsolutePosition([left, top], settings) {
    const { columnSize, margin } = settings;
    const [xMargin] = margin;
    const xOffset = (xMargin / 2) * left;
    return [left * columnSize + xOffset, calcY(top, settings)];
}
export function SnapGrid(layout, settings) {
    const { cols, rowSize, gridWidth, maxCols = cols, minCols = 1, maxRows, minRows = 1, margin = [12, 12], } = settings;
    const [xMargin, yMargin = xMargin] = margin;
    const ctx = {
        layout,
        cols,
        columnSize: gridWidth || 0,
        rowSize,
        margin: [xMargin, yMargin],
        maxCols,
        minCols,
        maxRows,
        minRows,
        mount,
        resize,
    };
    Object.assign(ctx, ItemMover(layout, ctx));
    function mount(gridContainerNode) {
        resize(gridContainerNode.offsetWidth);
        Array.from(gridContainerNode.children).forEach((node, i) => {
            node.dataset.i = i.toString();
            layout[i][Field.NODE] = node;
        });
    }
    function resize(gridWidth) {
        const [xMargin] = ctx.margin;
        const margin = xMargin - (xMargin / settings.cols) * 2;
        ctx.columnSize = gridWidth / settings.cols - margin / 2;
    }
    return ctx;
}
const ItemMover = Draggable((layout, settings) => {
    function onStart(e, ctx) {
        const draggedNode = e.currentTarget;
        const draggedItem = layout[+draggedNode.dataset.i];
        const dropzoneNode = Dropzone(draggedNode);
        const { columnSize, rowSize } = settings;
        Object.assign(ctx, { draggedNode, draggedItem, dropzoneNode });
        const [startX, startY] = getAbsolutePosition(draggedItem, settings);
        let [startLeft, startTop, draggedWidth, draggedHeight] = draggedItem;
        let sortedLayout = sortLayout(layout);
        const [, yMargin] = settings.margin;
        function onMove(e) {
            const { xDiff, yDiff } = ctx;
            const x = startX + xDiff;
            const y = startY + yDiff;
            draggedNode.style.transform = getTranslate(x, y);
            const left = minMax(Math.round(x / columnSize), 0, settings.cols - draggedWidth);
            const top = Math.round(y / (rowSize + yMargin));
            if (startLeft === left && startTop === top)
                return;
            draggedItem[Field.LEFT] = left;
            draggedItem[Field.TOP] = top;
            const changed = resolveDraggedCollisions(sortedLayout, draggedItem, startTop + draggedHeight, e.movementY > 0);
            sortedLayout = sortLayout(layout);
            normalizeGrid(sortedLayout, changed, draggedItem);
            [startLeft, startTop] = draggedItem;
            sortedLayout = sortLayout(layout);
            translateLayoutItem(dropzoneNode, draggedItem, settings);
            changed.forEach((item) => {
                translateLayoutItem(item[Field.NODE], item, settings);
            });
        }
        return { onMove };
    }
    return onStart;
}, 'snap-item_dragged');
//# sourceMappingURL=index.js.map