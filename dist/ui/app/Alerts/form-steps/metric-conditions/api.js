import { ApiQuery } from '../../../../../api/index.js';
export const queryAvailableMetrics = ApiQuery((slug) => ({
    schema: `query($slug: String!) {
  projectBySlug(slug: $slug) { availableMetrics }
}`,
    variables: { slug },
}), (gql) => gql.projectBySlug.availableMetrics);
