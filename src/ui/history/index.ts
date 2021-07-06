import type { Writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'
import { writable } from 'svelte/store'

export type HistoryEmitter = Writable<AppliedCommand | undefined>
export type Emitter = (appliedCommand: AppliedCommand | undefined) => void

export enum Action {
  Undo = 'Undo',
  Redo = 'Redo',
}

export type Command = {
  name: string
  undo: () => void
  redo: () => void
}

export type AppliedCommand = {
  action: Action
  name: string
}

export type History = ReturnType<typeof newHistory>

export function newHistory(emitter?: Emitter) {
  let history: Command[] = []
  let cursor = -1

  const emit = (action: Action, cmd: Command) =>
    emitter?.({ action, name: cmd.name })

  return {
    get() {
      return history
    },
    getCursor() {
      return cursor
    },
    add(name: string, undo: () => void, redo = undo) {
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
export const getHistoryContext = (): ReturnType<typeof newHistory> =>
  getContext(CONTEXT)

export const newHistoryEmitter = () => writable(undefined) as HistoryEmitter

export function newHistoryContext(emitter?: Emitter) {
  const history = newHistory(emitter)
  setContext(CONTEXT, history)
  return history
}

type Scrollable = { scrollIntoView: () => {} }
export const scroll = <T extends Scrollable>(target: T) =>
  target?.scrollIntoView()
export function withScroll<T extends Scrollable>(target: T, clb: () => void) {
  return () => {
    clb()
    scroll(target)
  }
}
