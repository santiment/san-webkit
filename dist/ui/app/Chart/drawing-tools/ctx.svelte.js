import { createCtx } from '../../../../utils/index.js';
import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js';
import { RenderHitTest } from './_core/renderer.js';
export function importPrimitive(type) {
    switch (type) {
        case 'trendline':
            return import('./trendline/primitive.js');
        case 'horizontal-line':
            return import('./horizontal-line/primitive.js');
        case 'vertical-line':
            return import('./vertical-line/primitive.js');
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
    let selectedPrimitive = null;
    function selectPrimitive(primitive) {
        if (primitive === selectedPrimitive)
            return;
        selectedPrimitive?.select(false);
        primitive?.select(true);
        selectedPrimitive = primitive;
    }
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
        const value = series.coordinateToPrice(params.point.y);
        if (value === null || !Number.isFinite(value)) {
            return;
        }
        return { time: params.time, price: value };
    }
    function onChartPointerDown(params) {
        const chart = chartCtx.chart.$;
        if (!chart) {
            return;
        }
        const hoveredObject = params.hoveredObjectId;
        const hoveredPrimitive = hoveredObject?.primitive ?? null;
        selectPrimitive(hoveredPrimitive);
        // NOTE: Preventing mouse drag-scroll when drawing or hovering over a primitive and then pressing the mouse button
        if (hoveredPrimitive || state.name === 'drawing') {
            const { handleScroll } = chart.options();
            const oldHandleScroll = typeof handleScroll === 'object' ? { ...handleScroll } : handleScroll;
            chart.applyOptions({ handleScroll: false });
            window.addEventListener('pointerup', () => {
                if (state.name !== 'drawing') {
                    state.payload?.drawing?.finalize();
                    state = { name: 'idle', payload: null };
                }
                chart.applyOptions({ handleScroll: oldHandleScroll });
            }, { once: true });
        }
        if (hoveredPrimitive && state.name === 'idle') {
            state = {
                name: 'moving',
                payload: {
                    drawing: hoveredPrimitive,
                    startPoint: params.point,
                    handleIndices: hoveredObject?.hit.type === RenderHitTest.HANDLE
                        ? hoveredObject.hit.indices
                        : undefined,
                },
            };
        }
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
                selectPrimitive(primitive);
                state.payload.drawing = primitive;
                state.payload.points = points;
            }
            else {
                state.payload.drawing.updateEndPoint(params.point);
                state.payload.drawing.finalize();
                state = { name: 'idle', payload: null };
            }
        });
    }
    function onChartCrosshairMove(params) {
        if (state.name === 'moving') {
            const { startPoint } = state.payload;
            if (!params.point)
                return;
            const { x, y } = params.point;
            const dx = x - startPoint.x;
            const dy = y - startPoint.y;
            // console.log({ dx, dy })
            state.payload.drawing.move([dx, dy], state.payload.handleIndices);
        }
        if (state.name !== 'drawing')
            return;
        // const point = getMouseDrawingPoint(params)
        // if (!point) return
        if (!state.payload.drawing)
            return;
        if (!params.point)
            return;
        state.payload.drawing.updateEndPoint(params.point);
    }
    $effect(() => {
        const chart = chartCtx.chart.$;
        if (!chart)
            return;
        chart.subscribePointerDown(onChartPointerDown);
        $effect(() => {
            if (state.name !== 'drawing' && state.name !== 'moving')
                return;
            chart.subscribeCrosshairMove(onChartCrosshairMove);
            return () => {
                chart.unsubscribeCrosshairMove(onChartCrosshairMove);
            };
        });
        return () => {
            chart.unsubscribePointerDown(onChartPointerDown);
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
