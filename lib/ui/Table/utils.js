const COLUMN_PADDING = '<td></td>';
export function getMinRows(minRows, itemsLength, columnsLength) {
    if (!minRows)
        return '';
    const rowsAmount = minRows - itemsLength;
    if (rowsAmount <= 0)
        return '';
    const columnsPadding = ''.padStart(columnsLength * COLUMN_PADDING.length, COLUMN_PADDING);
    let rows = '';
    for (let i = 0; i < rowsAmount; i++) {
        rows += '<tr>' + columnsPadding + '</tr>';
    }
    return rows;
}
//# sourceMappingURL=utils.js.map