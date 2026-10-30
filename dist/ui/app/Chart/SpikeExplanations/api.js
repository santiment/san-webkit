import { ApiQuery } from '../../../../api/index.js';
export const queryGetMetricSpikeExplanations = ApiQuery((variables) => ({
    schema: `query ($slug: String!, $from: DateTime! = "utc_now-60d", $to: DateTime! = "utc_now") {
  getMetricSpikeExplanations(
    metric: "mentions_percentage_1h_total"    
    slug:$slug,
    from:$from
    to:$to
  ){
    ds:spikeStartDatetime
    de:spikeEndDatetime
    e:explanation
  }
}`,
    variables,
}), (gql) => gql.getMetricSpikeExplanations.map((item) => ({
    explanation: item.e,
    spikeStartDatetime: Math.floor(Date.parse(item.ds) / 1000),
    spikeEndDatetime: Math.floor(Date.parse(item.de) / 1000),
})), {
    cacheTime: undefined,
});
