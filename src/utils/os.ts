export const isMac = process.browser ? navigator.platform.toLowerCase().includes('mac') : false
export const CMD = isMac ? '⌘' : 'Ctrl'
