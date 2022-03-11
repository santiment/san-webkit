import { query } from '@/api'

const LAYOUTS_QUERY = (userId: number | string) => `{
  chartConfigurations(userId:${userId}) {
    id
    title
    metrics
  }
}`

type Query = SAN.API.Query<
  'chartConfigurations',
  {
    id: number
    title: string
    metrics: string[]
  }[]
>

const accessor = ({ chartConfigurations }: Query) => chartConfigurations
export const queryUserLayouts = (userId: number | string) =>
  query<Query>(LAYOUTS_QUERY(userId)).then(accessor)
