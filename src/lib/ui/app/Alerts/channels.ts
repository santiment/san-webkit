import type { z } from 'zod'

export type TApiChannel = 'email' | 'telegram' | { telegram_channel: string } | { webhook: string }

type TSimpleChannels = Extract<TApiChannel, string>
type TComplexChannels = UnionToIntersection<Extract<TApiChannel, object>>

export type TChannel = z.util.flatten<Partial<Record<TSimpleChannels, boolean> & TComplexChannels>>

export function getChannelFromApi(channels: TApiChannel[] | undefined): TChannel | null {
  if (!channels) return null

  return channels.reduce(
    (prev, channel) =>
      typeof channel === 'string' ? { ...prev, [channel]: true } : { ...prev, ...channel },
    {} as TChannel,
  )
}

export function reduceChannelToApi(channels: TChannel) {
  return Object.entries(channels).reduce<TApiChannel[]>((prev, [key, value]) => {
    if (!value) return prev

    if (value === true) {
      const channel = key as TSimpleChannels
      return [...prev, channel]
    }

    return [...prev, { [key]: value } as TApiChannel]
  }, [])
}

export function formatChannels(channels: TChannel) {
  const keys = Object.keys(channels) as (keyof typeof channels)[]
  return keys.filter((channel) => channels[channel]).join(', ')
}
