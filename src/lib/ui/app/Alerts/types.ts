export type TApiAlert<GSettings = any> = {
  id: number
  type: string

  description: null | string
  title: null | string

  cooldown: `${number}d`

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
