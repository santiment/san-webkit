import { writable } from 'svelte/store'
import { getSavedBoolean, saveBoolean } from '@/utils/localStorage'

const { subscribe, set } = writable([] as SAN.Walkthrough[])

export const FeatureWalkthrough$ = {
  timer: null,
  value: [],
  subscribe,
  show(walkthrough: SAN.Walkthrough) {
    if (getSavedBoolean(walkthrough.id)) {
      return
    }

    clearTimeout(this.timer)
    this.value.push(walkthrough)
    this.timer = setTimeout(() => set(this.value.slice()), 250)
  },
  clear() {
    clearTimeout(this.timer)
    this.value.length = 0
    set(this.value.slice())
  },
  complete() {
    this.value.forEach(({ id }) => saveBoolean(id, true))
  },
}
