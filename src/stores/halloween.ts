import { query } from '@/api'
import { QueryStore } from '@/stores/utils'

export const PUMPKINS_COUNT_QUERY = `{
  getPumpkins
}`

type Query = SAN.API.Query<'getPumpkins', string[]>

const accessor = ({ getPumpkins }: Query) => new Set([...getPumpkins])
export const queryPumpkinsCount = () => query<Query>(PUMPKINS_COUNT_QUERY).then(accessor)

export type HalloweenData = Set<string>

export const DEFAULT = new Set([])

export const halloweenData$ = QueryStore<HalloweenData>(
  DEFAULT,
  queryPumpkinsCount,
  PUMPKINS_COUNT_QUERY,
)
