import { ApiQuery } from '../../../../api/index.js';
export const queryGetMetric = ApiQuery(({ metric, selector, from, to, interval, transform }) => ({
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
      timeseriesData(
        selector: $selector
        from: $from
        to: $to
        interval: $interval
        transform: $transform
        aggregation: $aggregation
        includeIncompleteData: $includeIncompleteData
      ) {
        d: datetime
        v: value
      }
    }
  }
`,
    variables: { metric, selector, from, to, interval, transform },
}), (gql) => gql.getMetric.timeseriesData.map((item) => ({
    time: (Date.parse(item.d) / 1000),
    value: item.v,
})), { cacheTime: undefined });
