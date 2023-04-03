import { query } from '@/api'

const PROJECTS_QUERY = `{
  allProjects(minVolume: 0) {
    id
    slug
    name
    ticker
  }
}`

type Query = SAN.API.Query<
  'allProjects',
  {
    id: number
    slug: string
    name: string
    ticker: string
  }[]
>

export const queryProjects = () =>
  query<Query>(PROJECTS_QUERY).then(({ allProjects }) => allProjects)
