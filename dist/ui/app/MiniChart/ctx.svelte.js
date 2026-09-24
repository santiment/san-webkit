import { createCtx } from '../../../utils/index.js';
export const useMiniChartTooltipCtx = createCtx('webkit_useMiniChartTooltipCtx', () => {
    const state = $state({
        offset: 0,
        syncKey: '',
    });
    return {
        tooltip: {
            get $() {
                return state;
            },
            updateOffset(value, key) {
                if (key) {
                    state.syncKey = key;
                }
                state.offset = value;
            },
        },
    };
});
