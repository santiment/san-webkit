import { onMount } from 'svelte';
import { createCtx } from '../../../../utils/index.js';
export const useHighlightedMetricCtx = createCtx('webkit_useHighlightedMetricCtx', () => {
    let timer;
    let highlighted = $state.raw(null);
    onMount(() => () => {
        window.clearTimeout(timer);
    });
    function hover(series) {
        highlighted = series;
    }
    function onMetricEnter(series) {
        window.clearTimeout(timer);
        if (highlighted) {
            return hover(series);
        }
        timer = window.setTimeout(() => hover(series), 120);
    }
    function onMetricLeave() {
        window.clearTimeout(timer);
        if (!highlighted) {
            return;
        }
        timer = window.setTimeout(() => hover(null), 100);
    }
    return {
        highlighted: {
            get $() {
                return highlighted;
            },
        },
        onMetricEnter,
        onMetricLeave,
    };
});
