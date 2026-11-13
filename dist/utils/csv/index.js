import { getDateFormats, getTimeFormats } from '../dates/index.js';
import { downloadBlob } from '../download/index.js';
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
    const csvContent = rows.map((e) => e.join(',')).join('\n');
    const date = new Date();
    const { DD, MMM, YYYY } = getDateFormats(date);
    const { HH, mm, ss } = getTimeFormats(date);
    const blob = new Blob([
        //NOTE: This UTF‑8 BOM is needed for Excel to open the csv as UTF-8
        '\uFEFF',
        csvContent,
    ], { type: 'text/csv;charset=utf-8' });
    downloadBlob(blob, `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].csv`);
}
export function createMetricSeriesCsvHeaders(series) {
    return [
        {
            title: 'Date',
            format: (row) => new Date(row.time * 1000).toISOString(),
        },
    ].concat(series.map((metric) => {
        const key = metric.id;
        const prefix = metric.selectorLabel$ ? `${metric.selectorLabel$} - ` : '';
        return { title: prefix + metric.label, format: (row) => row[key] ?? '' };
    }));
}
export function mergeMetricSeriesData(series) {
    const data = {};
    for (const metric of series) {
        const key = metric.id;
        for (const { time, value } of metric.data.$) {
            const datePoint = (data[time] ??= { time });
            datePoint[key] = value;
        }
    }
    return Object.values(data).sort((a, b) => a.time - b.time);
}
