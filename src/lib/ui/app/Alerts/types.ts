export type TApiAlert<GSettings = any> = {
  id: number
  type: string

  description: null | string
  title: null | string

  cooldown: TTimeWindow

  isActive: boolean
  isFrozen: boolean
  isPublic: boolean
  isRepeating: boolean

  settings:
    | null
    | ({
        channel: ('email' | 'telegram')[]
      } & GSettings)
}

export type TTimeWindow = `${number}${'d' | 'h' | 'm'}`
