import { createCtx } from '../../../../../utils/index.js';
export const useMetricInfoCtx = createCtx('chart_useMetricInfoCtx', (getOpenedMetric, onMetricInfoClick) => {
    return {
        onMetricInfoClick,
        openedMetric: {
            get $() {
                return getOpenedMetric();
            },
        },
    };
});
