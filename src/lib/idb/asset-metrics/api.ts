import { ApiQuery } from '$lib/api/index.js'

export const queryAvailableMetrics = ApiQuery(
  (slug: string) => ({
    schema: `query($slug: String!) {
  projectBySlug(slug: $slug) { availableMetrics }
}`,
    variables: { slug },
  }),
  (gql: { projectBySlug: { availableMetrics: string[] } }) => gql.projectBySlug.availableMetrics,
  { cacheTime: undefined },
)
