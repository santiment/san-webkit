import { ApiQuery } from '../../../../../../../api/index.js';
export const queryHistoricalTriggerPoints = ApiQuery((variables) => ({
    schema: `
      query historicalTriggerPoints($cooldown: String, $settings: json!) {
        historicalTriggerPoints(cooldown: $cooldown, settings: $settings)
      }
    `,
    variables: { ...variables, settings: JSON.stringify(variables.settings) },
}), (gql) => gql.historicalTriggerPoints);
export const queryAssetPriceUsd = ApiQuery((slug) => ({
    schema: `
    query projectPriceUsd($slug: String!){
      projectBySlug(slug: $slug) {
        priceUsd
      }
    }`,
    variables: { slug },
}), (gql) => gql.projectBySlug.priceUsd);
