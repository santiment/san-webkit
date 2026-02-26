import { getDateFormats, getTimeFormats } from '../dates/index.js';
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
export function createMetricSeriesCsvHeaders(series) {
    return [
        {
            title: 'Date',
            format: (row) => new Date(row.time * 1000).toISOString(),
        },
    ].concat(series.map((metric) => ({
        title: metric.label,
        format: (row) => row[metric.formula?.$.name || metric.apiMetricName] ?? '',
    })));
}
export function mergeMetricSeriesData(series) {
    const data = {};
    for (const metric of series) {
        const key = metric.formula?.$.name || metric.apiMetricName;
        for (const { time, value } of metric.data.$) {
            const datePoint = (data[time] ??= { time });
            datePoint[key] = value;
        }
    }
    return Object.values(data).sort((a, b) => a.time - b.time);
}
