import { ApiQuery } from '../../../../api/index.js';
export const queryGetMetricSpikeExplanations = ApiQuery((variables) => ({
    schema: `query ($slug: String!) {
  getMetricSpikeExplanations(
    metric: "mentions_percentage_1h_total"    
    slug:$slug,
    from: "utc_now-60d"
    to: "utc_now"
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
