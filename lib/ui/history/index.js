import { setContext, getContext } from 'svelte'
import { writable } from 'svelte/store'
export var Action
;(function (Action) {
  Action['Undo'] = 'Undo'
  Action['Redo'] = 'Redo'
})(Action || (Action = {}))
export function newHistory(emitter) {
  let history = []
  let cursor = -1
  const emit = (action, cmd) =>
    emitter === null || emitter === void 0 ? void 0 : emitter({ action, name: cmd.name })
  return {
    get() {
      return history
    },
    getCursor() {
      return cursor
    },
    add(name, undo, redo = undo) {
      history = history.slice(-25).slice(0, cursor + 1)
      history.push({
        name,
        undo,
        redo,
      })
      cursor += 1
    },
    undo() {
      if (cursor < 0) return
      const cmd = history[cursor]
      if (cmd) {
        cmd.undo()
        cursor -= 1
        emit(Action.Undo, cmd)
      }
    },
    redo() {
      if (cursor >= history.length - 1) return
      const cmd = history[cursor + 1]
      if (cmd) {
        cmd.redo()
        cursor += 1
        emit(Action.Redo, cmd)
      }
    },
  }
}
export const CONTEXT = 'USER_COMMANDS_HISTORY'
export const getHistoryContext = () => getContext(CONTEXT)
export const newHistoryEmitter = () => writable(undefined)
export function newHistoryContext(emitter) {
  const history = newHistory(emitter)
  setContext(CONTEXT, history)
  return history
}
export const scroll = (target) =>
  target === null || target === void 0 ? void 0 : target.scrollIntoView()
export function withScroll(target, clb) {
  return () => {
    clb()
    scroll(target)
  }
}
//# sourceMappingURL=index.js.map
