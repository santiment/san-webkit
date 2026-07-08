import { getSavedJson, saveJson } from '$lib/utils/localStorage/index.js'

export type TTourState = {
  id: string
  recent: undefined | string
  completed: Set<string>
}

type TSavedTourState = {
  id: string
  recent: undefined | string
  completed: string[]
}

const asSavedTourId = (id: string) => 'Tour--' + id

export function getSavedTourState(id: string): TTourState {
  let saved: undefined | TSavedTourState

  try {
    saved = getSavedJson<TSavedTourState>(asSavedTourId(id))
  } catch (e) {
    console.error(e)
  }

  return { id, recent: undefined, completed: new Set(saved?.completed) }
}

export function saveTourState(state: TTourState) {
  saveJson<TSavedTourState>(asSavedTourId(state.id), {
    id: state.id,
    recent: state.recent,
    completed: Array.from(state.completed),
  })
}

export function checkWasTourViewed(id: string): boolean {
  return !!localStorage.getItem(asSavedTourId(id))
}
