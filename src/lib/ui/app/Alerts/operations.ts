type WatchlistSelector = {
  selector: { watchlist_id: number }
}

type TApiOperationValue =
  | boolean
  | number
  | [number, number]
  | Record<string, number | [number, number] | undefined>[]
  | WatchlistSelector
  | undefined

export type TApiOperation = Record<string, TApiOperationValue>

export function isNumericOperation(value: TApiOperationValue): value is number | [number, number] {
  return typeof value === 'number' || (Array.isArray(value) && typeof value[0] === 'number')
}
