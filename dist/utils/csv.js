import { getDateFormats, getTimeFormats } from './dates/index.js';
const normalizeHeader = (title) => (title.includes(',') ? `"${title}"` : title);
export function downloadCsv(title, headers, data) {
    if (!headers.length || !data.length)
        return;
    const rows = [
        headers.map(({ title }) => normalizeHeader(title)),
        ...data.map((item) => headers.map(({ format }) => {
            const value = format(item);
            return typeof value === 'string' ? `"${value}"` : value;
        })),
    ];
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
