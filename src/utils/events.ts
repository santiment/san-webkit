const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA'])
export function newGlobalShortcut(shortcut: string, clb: () => any) {
  const keys = shortcut.split('+')

  let isCmdKey = false
  let isAltKey = false
  let isShiftKey = false
  let targetKey: undefined | string

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]

    if (key === 'CMD') isCmdKey = true
    else if (key === 'ALT') isAltKey = true
    else if (key === 'SHIFT') isShiftKey = true
    else targetKey = key
  }

  function onKeyPress(e: KeyboardEvent) {
    const { key, target, metaKey, ctrlKey, shiftKey, altKey } = e

    if (EDITABLE_TAGS.has((target as HTMLElement).tagName)) return

    if (isCmdKey && !(metaKey || ctrlKey)) return
    if (isAltKey && !altKey) return
    if (isShiftKey && !shiftKey) return
    if (targetKey !== key.toUpperCase()) return

    e.preventDefault()
    clb()
  }

  window.addEventListener('keydown', onKeyPress)

  return () => window.removeEventListener('keydown', onKeyPress)
}
