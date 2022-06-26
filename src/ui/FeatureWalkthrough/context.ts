import { writable } from 'svelte/store'

const { subscribe, set } = writable([])

export const FeatureWalkthrough$ = {
  timer: null,
  value: [],
  subscribe,
  show(walkthrough) {
    clearTimeout(this.timer)
    this.value.push(walkthrough)
    this.timer = setTimeout(() => set(this.value.slice()), 400)
  },
  clear() {
    clearTimeout(this.timer)
    this.value.length = 0
    set(this.value.slice())
  },
}
