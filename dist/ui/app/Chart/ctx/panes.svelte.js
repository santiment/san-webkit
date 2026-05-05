import { SvelteMap } from 'svelte/reactivity';
import { createCtx } from '../../../../utils/index.js';
export const useChartPanesCtx = createCtx('webkit_useChartPanesCtx', () => {
    const state = new SvelteMap();
    return {
        panes: {
            get $() {
                return state;
            },
        },
        onPaneWidgetMount(paneWidget, pane) {
            state.set(pane, paneWidget._paneCell);
            return () => {
                state.delete(pane);
            };
        },
    };
});
