import { BROWSER } from 'esm-env'

const platform: string = BROWSER
  ? // @ts-ignore
    (navigator.userAgentData?.platform ?? navigator.platform)
  : ''

export const isMac = BROWSER ? platform.toLowerCase().includes('mac') : false
export const CMD = isMac ? '⌘' : 'Ctrl'

export const CMD_EVENT_KEY = isMac ? 'Meta' : 'Control'
