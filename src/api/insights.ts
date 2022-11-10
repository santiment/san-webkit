import { query } from '@/api'

const INSIGHTS_QUERY = (searchTerm) => `{
    allInsightsBySearchTerm(searchTerm: "${searchTerm}") {
        id
        title
    }
}`

type Query = SAN.API.Query<
  'allInsightsBySearchTerm',
  {
    id: string
    title: string
  }[]
>

const accessor = ({ allInsightsBySearchTerm }: Query) => {
  return allInsightsBySearchTerm || ([] as any[])
}
export const queryInsights = (searchTerm) => query<Query>(INSIGHTS_QUERY(searchTerm)).then(accessor)
