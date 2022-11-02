import { query } from '@/api'
import { QueryStore } from '@/stores/utils'

export const PUMPKINS_QUERY = `{
   pages:getPumpkins
   code:getPumpkinCode
}`

type Query = SAN.API.AdvancedQuery<{
  pages: string[]
  code: string | null
}>

const accessor = (data: Query) => ({
  pages: new Set(data.pages),
  code: data.code,
})
export const queryPumpkins = () => query<Query>(PUMPKINS_QUERY).then(accessor)

export type HalloweenData = {
  pages: Set<string>
  code: string | null
}

export const DEFAULT = {
  pages: new Set([]),
  code: null,
}

export const halloweenData$ = QueryStore<HalloweenData>(DEFAULT, queryPumpkins, PUMPKINS_QUERY)
