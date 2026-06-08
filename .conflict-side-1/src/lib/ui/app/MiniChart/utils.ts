import type { TMiniChartProps } from './types.js'

export const getValue = (item: TMiniChartProps['data'][number], key?: string): number => {
  if (typeof item === 'object' && item !== null && key) {
    return item[key]
  }
  return item as number
}

export function getValueAt(data: TMiniChartProps['data'], offset: number, width: number) {
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
