import { query } from '@/api'

const PROJECT_FRAGMENT = 'slug name ticker'

type Project = {
  slug: string
  name: string
  ticker: string
}

type Query = SAN.API.Query<'projects', Project[]>

const accessor = ({ projects }: Query) => projects

export const queryProjects = () =>
  query<Query>(`{projects:allProjects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor)

export const queryErc20Projects = () =>
  query(`{projects:allErc20Projects(minVolume: 0) {
    ${PROJECT_FRAGMENT}
  }}`).then(accessor)
