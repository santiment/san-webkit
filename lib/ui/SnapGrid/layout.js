import { Field } from './types.js';
/** Ascending sort - top-to-bottom & left-to-right */
export const sortLayout = (layout) => layout.slice().sort((a, b) => a[Field.TOP] - b[Field.TOP] || a[Field.LEFT] - b[Field.LEFT]);
export function Dropzone(draggedNode) {
    var _a;
    const dropzoneNode = document.createElement('div');
    dropzoneNode.setAttribute('style', draggedNode.getAttribute('style'));
    dropzoneNode.classList.add('snap-dropzone');
    (_a = draggedNode.parentNode) === null || _a === void 0 ? void 0 : _a.append(dropzoneNode);
    return dropzoneNode;
}
export function Grid() {
    const grid = [];
    return {
        getRow([iLeft, _, iWidth], iRight = iLeft + iWidth) {
            const numbers = grid.slice(iLeft, iRight);
            let max = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (max < numbers[i])
                    max = numbers[i];
            }
            return max;
        },
        place([iLeft, iTop, iWidth, iHeight], iRight = iLeft + iWidth, iBottom = iTop + iHeight) {
            for (let i = iLeft; i < iRight; i++)
                grid[i] = iBottom;
        },
    };
}
export function normalizeGrid(sortedLayout, changedItems, draggedItem, onDraggedItemNormalize) {
    const grid = Grid();
    for (let i = 0; i < sortedLayout.length; i++) {
        const item = sortedLayout[i];
        const [iLeft, iTop, iWidth] = item;
        const iRight = iLeft + iWidth;
        const top = grid.getRow(item, iRight);
        if (top !== iTop) {
            item[Field.TOP] = top;
            if (changedItems && item !== draggedItem)
                changedItems.add(item);
            else if (onDraggedItemNormalize)
                onDraggedItemNormalize(iTop, top);
        }
        grid.place(item, iRight, top + item[Field.HEIGHT]);
    }
}
export function resolveDraggedCollisions(sortedLayout, draggedItem, draggedStartBottom, isDraggingDown) {
    const [left, top, width, height] = draggedItem;
    const bottom = top + height;
    const right = left + width;
    const offset = isDraggingDown ? 0 : 1;
    let compacted = isDraggingDown && Grid();
    let changed = new Set();
    for (let i = 0; i < sortedLayout.length; i++) {
        const item = sortedLayout[i];
        if (draggedItem === item)
            continue;
        const [iLeft, iTop, iWidth, iHeight] = item;
        const iRight = iLeft + iWidth;
        const iBottom = iTop + iHeight;
        if (compacted && draggedStartBottom > iTop)
            compacted.place(item, iRight, iBottom);
        if (top >= iBottom)
            continue;
        if (bottom <= iTop)
            continue;
        if (left >= iRight)
            continue;
        if (right <= iLeft)
            continue;
        item[Field.TOP] += offset;
        changed.add(item);
    }
    if (compacted) {
        changed.forEach((item) => {
            const row = compacted.getRow(item);
            if (row + item[Field.HEIGHT] > top)
                return;
            item[Field.TOP] = row;
        });
    }
    return changed;
}
export function updateGridContainerHeight(settings) {
    const { layout } = settings;
    let bottom = 0;
    for (let i = 0; i < layout.length; i++) {
        const item = layout[i];
        const iBottom = item[Field.TOP] + item[Field.HEIGHT];
        if (bottom < iBottom)
            bottom = iBottom;
    }
    setGridContainerHeight(bottom, settings);
}
export function setGridContainerHeight(rows, { gridContainerNode, rowSize, margin }) {
    gridContainerNode.style.height = rows * (rowSize + margin[1]) + 'px';
}
//# sourceMappingURL=layout.js.map