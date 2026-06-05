import { ApiQuery } from '$lib/api/index.js'

export const queryTrendingWords = ApiQuery(
  () => `{
    getTrendingWords(size: 10, from:"utc_now-7d", to:"utc_now", interval:"4h") {
      topWords { word }
    }
  }`,
  (gql: { getTrendingWords: { topWords: { word: string }[] }[] }) =>
    Array.from(
      new Set(gql.getTrendingWords.flatMap(({ topWords }) => topWords).map(({ word }) => word)),
    ),
)
