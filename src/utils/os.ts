import { BROWSER } from 'esm-env'

export const isMac = BROWSER ? navigator.platform.toLowerCase().includes('mac') : false
export const CMD = isMac ? '⌘' : 'Ctrl'
