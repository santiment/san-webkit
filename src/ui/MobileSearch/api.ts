import { query } from '@/api'

const INSIGHTS_QUERY = (searchTerm) => `{
    allInsightsBySearchTerm(searchTerm: "${searchTerm}") {
        id
        title
    }
}`

type InsightsQuery = SAN.API.Query<
  'allInsightsBySearchTerm',
  {
    id: string
    title: string
  }[]
>

const insightsAccessor = ({ allInsightsBySearchTerm }: InsightsQuery) => {
  return allInsightsBySearchTerm || ([] as any[])
}
export const queryInsights = (searchTerm) =>
  query<InsightsQuery>(INSIGHTS_QUERY(searchTerm)).then(insightsAccessor)

const PEOPLE_QUERY = `{
    popularInsightAuthors {
      id
      username
      avatarUrl
    }
}`

type PeopleQuery = SAN.API.Query<
  'popularInsightAuthors',
  {
    id: string
    username: string
    avatarUrl: string
  }[]
>

const peopleAccessor = ({ popularInsightAuthors }: PeopleQuery) => {
  return popularInsightAuthors || ([] as any[])
}
export const queryPeople = () => query<PeopleQuery>(PEOPLE_QUERY).then(peopleAccessor)

const TRENDING_WORDS_QUERY = `{
    getTrendingWords(size: 50, from: "utc_now-1h", to: "utc_now") {
        topWords {
            word
        }
    }
}`

type TrendsQuery = SAN.API.Query<
  'getTrendingWords',
  {
    topWords: {
      word: string
    }[]
  }[]
>

const trendsAccessor = ({ getTrendingWords }: TrendsQuery) => {
  let trendingWords = [] as any[]
  const item = getTrendingWords[getTrendingWords.length - 1]

  if (item) {
    trendingWords = item.topWords
  }

  return trendingWords.map(({ word }) => word)
}
export const queryTrends = () => query<TrendsQuery>(TRENDING_WORDS_QUERY).then(trendsAccessor)
