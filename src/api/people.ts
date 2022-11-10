import { query } from '@/api'

const PEOPLE_QUERY = `{
    popularInsightAuthors {
      id
      username
      avatarUrl
    }
}`

type Query = SAN.API.Query<
  'popularInsightAuthors',
  {
    id: string
    username: string
    avatarUrl: string
  }[]
>

const accessor = ({ popularInsightAuthors }: Query) => {
  return popularInsightAuthors || ([] as any[])
}
export const queryPeople = () => query<Query>(PEOPLE_QUERY).then(accessor)
