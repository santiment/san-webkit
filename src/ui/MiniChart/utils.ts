import type { Props } from './svelte'

export const getValue = (item: Props['data'][number], key?: string) =>
  (key ? item[key] : item) as number

export function getValueAt(data: Props['data'], offset: number, width: number) {
  const valueIndex = Math.round((offset / width) * (data.length - 1))
  return getValue(data[valueIndex])
}

type GetOffsetProps = {
  localOffset: number
  sharedOffset: number | undefined
  tooltipSyncKey: string
  storeSyncKey: string | undefined
}

export function getOffset({
  localOffset,
  sharedOffset,
  tooltipSyncKey,
  storeSyncKey,
}: GetOffsetProps) {
  const hasSharedOffset = !!sharedOffset && !!tooltipSyncKey && storeSyncKey === tooltipSyncKey
  return hasSharedOffset ? sharedOffset : localOffset
}
