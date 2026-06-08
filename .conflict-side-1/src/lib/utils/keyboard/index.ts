import { onMount } from 'svelte'

import { CMD_EVENT_KEY } from '../platform/index.js'

const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA'])

const options = { capture: true }
export function useKeyboardShortcut(shortcut: string, clb: () => any, disableInputs = true) {
  onMount(() => {
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

    if (keys.length === 1) {
      targetKey = isAltKey
        ? 'ALT'
        : isShiftKey
          ? 'SHIFT'
          : isCmdKey
            ? CMD_EVENT_KEY.toUpperCase()
            : ''
    }

    function onKeyPress(e: KeyboardEvent) {
      if (e.repeat) {
        return
      }

      const { key, target, metaKey, ctrlKey, shiftKey, altKey } = e

      if (disableInputs && target) {
        const { isContentEditable, tagName } = target as HTMLElement
        if (isContentEditable || EDITABLE_TAGS.has(tagName)) return
      }

      // TODO: isSingleModKey prevent CMD+R when isCmdKey===true
      if (
        isCmdKey === (metaKey || ctrlKey) &&
        isAltKey === altKey &&
        isShiftKey === shiftKey &&
        targetKey === key.toUpperCase()
      ) {
        e.preventDefault()
        e.stopPropagation()
        clb()
      }
    }

    window.addEventListener('keydown', onKeyPress, options)

    return () => window.removeEventListener('keydown', onKeyPress, options)
  })
}
