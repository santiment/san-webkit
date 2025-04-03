import { onMount } from 'svelte';
import { createCtx } from '../../utils/index.js';
import { ApiQuery } from '../../api/index.js';
import { Query } from '../../api/executor.js';
import { percentFormatter, usdFormatter } from '../../ui/app/Chart/ctx/formatters.js';
export const queryGetOrderedMetrics = ApiQuery(() => `{
  getOrderedMetrics {
    categories
    metrics {
      k:uiKey
      m:metric
      t:type
      ui:uiHumanReadableName
      c:categoryName
      g:groupName
      cs:chartStyle
      un:unit
      d:description
      a:args
      in:isNew
      do:displayOrder
    }
  }
}`, (gql) => {
    const { categories, metrics } = gql.getOrderedMetrics;
    const CategoryIndex = categories.reduce((acc, item, i) => Object.assign(acc, { [item]: i + 1 }), {});
    const MetricsRegistry = metrics
        .sort((a, b) => {
        const categoryDiff = CategoryIndex[a.c] - CategoryIndex[b.c];
        if (categoryDiff)
            return categoryDiff;
        else
            return a.do - b.do;
    })
        .reduce((acc, item) => {
        const key = item.k ?? item.m;
        return Object.assign(acc, {
            [key]: {
                key,
                queryKey: item.k ? item.m : undefined,
                label: item.ui || '',
                category: item.c || '',
                group: item.g || undefined,
                // enforce style check
                chartStyle: enforceCorrectChartStyle(item.cs),
                node: enforceCorrectChartStyle(item.cs), // LEGACY
                unit: item.un,
                formatter: getTooltipFormatterByUnit(item.un), // LEGACY
                meta: {
                    args: item.a,
                    isNew: item.in,
                    //type: item.t,
                    displayOrder: item.do,
                },
                reqMeta: item.a, // LEGACY
            },
        });
    }, {});
    return MetricsRegistry;
}, {
    cacheTime: undefined,
});
export const useMetricsRegistryCtx = createCtx('webkit_useMetricsRegistryCtx', () => {
    let MetricsRegistry = $state.raw({});
    onMount(() => {
        queryGetOrderedMetrics(Query)().then((data) => {
            MetricsRegistry = data;
        });
    });
    return {
        MetricsRegistry: {
            get $() {
                return MetricsRegistry;
            },
        },
    };
});
function getTooltipFormatterByUnit(unit) {
    switch (unit) {
        case 'usd':
            return usdFormatter;
        case 'percent':
            return percentFormatter;
    }
}
const ALLOWED_STYLES = new Set(['line', 'bar', 'greenRedBar', 'filledLine', 'gradientLine', 'area']);
function enforceCorrectChartStyle(chartStyle) {
    return ALLOWED_STYLES.has(chartStyle) ? chartStyle : 'line';
}
