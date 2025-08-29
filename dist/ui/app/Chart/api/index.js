import { ApiQuery } from '../../../../api/index.js';
export const queryGetMetric = ApiQuery(({ metric, selector, from, to, interval, transform, aggregation }) => ({
    schema: `
  query getMetric(
    $metric: String!
    $from: DateTime!
    $to: DateTime!
    $interval: interval
    $transform: TimeseriesMetricTransformInputObject
    $aggregation: Aggregation
    $includeIncompleteData: Boolean = true
    $selector: MetricTargetSelectorInputObject
  ) {
    getMetric(metric: $metric) {
      timeseriesDataJson(
        selector: $selector
        from: $from
        to: $to
        interval: $interval
        transform: $transform
        aggregation: $aggregation
        includeIncompleteData: $includeIncompleteData
        fields: {datetime: "d" ${aggregation === 'OHLC' ? 'valueOhlc: "v" open:"o" high:"h" close:"c" low:"l"' : 'value: "v"'} }
      ) 
    }
  }
`,
    variables: { metric, selector, from, to, interval, transform, aggregation },
}), (gql) => gql.getMetric.timeseriesDataJson.map((item) => ({
    time: (Date.parse(item.d) / 1000),
    ...mapPointData(item.v),
})), { cacheTime: undefined });
function mapPointData(value) {
    if (typeof value === 'number') {
        return { value };
    }
    return {
        value: value.c, // NOTE: Making it compatible with formulas
        open: value.o,
        high: value.h,
        low: value.l,
        close: value.c,
    };
}
