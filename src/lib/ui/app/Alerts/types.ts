import type { TApiChannel } from './channels.js'
import type { TTimeWindow } from './time.js'

export type TApiAlert<GSettings = any> = {
  id: number
  type: string

  description: null | string
  title: string

  cooldown: TTimeWindow

  isActive: boolean
  isFrozen: boolean
  isPublic: boolean
  isRepeating: boolean

  settings:
    | null
    | ({
        channel: TApiChannel | TApiChannel[]
      } & GSettings)
}
