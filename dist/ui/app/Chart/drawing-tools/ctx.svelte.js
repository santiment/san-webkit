import { createCtx } from '../../../../utils/index.js';
import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js';
export function importPrimitive(type) {
    switch (type) {
        case 'rectangle':
            return import('./rectangle/primitive.js');
        case 'fib_retracement':
            return import('./fib-retracement/primitive.js');
    }
}
export const useDrawingToolsCtx = createCtx('webkit_useDrawingToolsCtx', ({ drawings: defaultDrawings = [] } = {}) => {
    const chartCtx = useChartCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    let state = $state.raw({
        name: 'idle',
        payload: null,
    });
    const _drawings = $state.raw(defaultDrawings);
    const targetMetric = $derived(metricSeries.$[0]);
    function onDrawingToolSelect(type) {
        // Same tool pressed === cancel drawing
        if (state.name === 'drawing' && state.payload.type === type) {
            state = { name: 'idle', payload: null };
            return;
        }
        const chart = chartCtx.chart.$;
        if (!chart)
            return;
        state = {
            name: 'drawing',
            payload: { type, points: [], drawing: null, Primitive: importPrimitive(type) },
        };
    }
    function getMouseDrawingPoint(params) {
        if (!params.point || !params.time)
            return;
        const series = targetMetric.chartSeriesApi;
        const price = series.coordinateToPrice(params.point.y);
        if (!price)
            return;
        return { time: params.time, price };
    }
    function onChartClick(params) {
        if (state.name !== 'drawing')
            return;
        const point = getMouseDrawingPoint(params);
        if (!point)
            return;
        state.payload.Primitive?.then(({ default: Primitive }) => {
            if (state.name !== 'drawing')
                return;
            const series = targetMetric.chartSeriesApi;
            if (!state.payload.drawing) {
                const points = [point, point];
                const primitive = new Primitive(points);
                series.attachPrimitive(primitive);
                state.payload.drawing = primitive;
                state.payload.points = points;
            }
            else {
                state.payload.drawing.updateEndPoint(point);
                state = { name: 'idle', payload: null };
            }
        });
    }
    function onChartCrosshairMove(params) {
        if (state.name !== 'drawing')
            return;
        const point = getMouseDrawingPoint(params);
        if (!point)
            return;
        if (!state.payload.drawing)
            return;
        state.payload.drawing.updateEndPoint(point);
    }
    $effect(() => {
        const chart = chartCtx.chart.$;
        if (!chart)
            return;
        if (state.name !== 'drawing')
            return;
        chart.subscribeClick(onChartClick);
        chart.subscribeCrosshairMove(onChartCrosshairMove);
        return () => {
            chart.unsubscribeClick(onChartClick);
            chart.unsubscribeCrosshairMove(onChartCrosshairMove);
        };
    });
    return {
        drawingTools: {
            get drawing$() {
                return state.name === 'drawing' ? state.payload.type : '';
            },
            onSelect: onDrawingToolSelect,
        },
    };
});
