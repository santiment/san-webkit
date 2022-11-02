import { query } from '@/api'
import { QueryStore } from '@/stores/utils'

export const PUMPKINS_COUNT_QUERY = `{
  getPumpkins
}`

type Query = SAN.API.Query<'getPumpkins', string[]>

const accessor = ({ getPumpkins }: Query) => ({
  pages: new Set(getPumpkins),
  code: null,
})
export const queryPumpkinsCount = () => query<Query>(PUMPKINS_COUNT_QUERY).then(accessor)

export type HalloweenData = {
  pages: Set<string>
  code: string | null
}

export const DEFAULT = {
  pages: new Set([]),
  code: null,
}

export const halloweenData$ = QueryStore<HalloweenData>(
  DEFAULT,
  queryPumpkinsCount,
  PUMPKINS_COUNT_QUERY,
)
