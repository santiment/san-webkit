import { getDateFormats, getTimeFormats } from './../utils/dates';
const normalizeHeader = (title) => (title.includes(',') ? `"${title}"` : title);
export function downloadCsv(title, headers, data) {
    const headersLength = headers.length;
    const { length } = data;
    const rows = new Array(length + 1);
    rows[0] = headers.map(({ title }) => normalizeHeader(title));
    for (let i = 0; i < length; i++) {
        const item = data[i];
        const row = new Array(headersLength);
        rows[i + 1] = row;
        for (let j = 0; j < headersLength; j++) {
            row[j] = headers[j].format(item);
        }
    }
    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n');
    const date = new Date();
    const { DD, MMM, YYYY } = getDateFormats(date);
    const { HH, mm, ss } = getTimeFormats(date);
    const a = document.createElement('a');
    a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].csv`;
    a.href = encodeURI(csvContent);
    a.click();
    a.remove();
}
//# sourceMappingURL=csv.js.map