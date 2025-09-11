import { getDateFormats, getTimeFormats } from '../../../utils/dates/index.js';
import { applyHexColorOpacity, getBrowserCssVariable } from '../../utils/index.js';
import { calculatePercentageChange } from '../../../utils/formatters/index.js';
// TODO: Refactor and use native takeScreenshot
export async function downloadChartAsJpeg(title, metrics, chart) {
    const container = chart?.chartElement();
    if (!title || !container || !chart)
        return;
    const canvasElements = container.querySelectorAll('canvas');
    if (!canvasElements.length)
        return;
    const bounds = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement('canvas');
    canvas.width = bounds.width * dpr;
    canvas.height = bounds.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const black = getBrowserCssVariable('black');
    const whiteHex = getBrowserCssVariable('white');
    const badgeBg = applyHexColorOpacity(whiteHex, 'b0');
    ctx.fillStyle = whiteHex;
    ctx.fillRect(0, 0, bounds.width, bounds.height);
    canvasElements.forEach((item) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        ctx.drawImage(item, left - bounds.left, top - bounds.top, width, height);
    });
    const byPane = {};
    metrics.forEach((m) => {
        const i = m.pane?.$ ?? 0;
        (byPane[i] ||= []).push(m);
    });
    const lh = 18, ph = 6, pv = 4, gap = 6, rad = 4;
    ctx.font = '12px "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    ctx.textBaseline = 'middle';
    chart.panes().forEach((pane, i) => {
        const list = byPane[i];
        if (!list?.length)
            return;
        let paneElement;
        try {
            paneElement = pane.getHTMLElement();
        }
        catch {
            return;
        }
        const pr = paneElement.getBoundingClientRect();
        const x = pr.left - bounds.left + ph;
        let y = pr.top - bounds.top + pv + lh / 2;
        list.forEach((m) => {
            const label = m.label ?? m.apiMetricName;
            const firstValue = m.data.$.find((item) => item.value)?.value;
            const lastValue = m.data.$[m.data.$.length - 1].value;
            const formattedValue = m.ui.$$.tooltipFormatter
                ? m.ui.$$.tooltipFormatter(lastValue)
                : lastValue;
            const percentChange = firstValue
                ? ` (${calculatePercentageChange(firstValue, lastValue)})`
                : '';
            const labelText = `${label}: `;
            const valueText = `${formattedValue}${percentChange}`;
            const labelWidth = ctx.measureText(labelText).width;
            const valueWidth = ctx.measureText(valueText).width;
            const bw = labelWidth + gap + valueWidth + ph * 2;
            const bh = lh + pv * 2;
            ctx.globalAlpha = 0.7;
            ctx.fillStyle = badgeBg;
            ctx.beginPath();
            if (typeof ctx.roundRect === 'function') {
                ctx.roundRect(x - ph, y - lh / 2 - pv, bw, bh, rad);
            }
            else {
                ctx.moveTo(x, y);
            }
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.fillStyle = black;
            ctx.fillText(labelText, x, y);
            ctx.fillStyle = m.ui.$$.color || black;
            ctx.fillText(valueText, x + labelWidth + gap, y);
            y += bh + pv;
        });
    });
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = whiteHex;
    ctx.fillRect(0, 0, bounds.width, bounds.height);
    const url = canvas.toDataURL('image/jpeg', 0.9);
    const now = new Date();
    const { DD, MMM, YYYY } = getDateFormats(now);
    const { HH, mm, ss } = getTimeFormats(now);
    const a = document.createElement('a');
    a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].jpeg`;
    a.href = url;
    a.click();
}
