export type SS<T> = T extends { $: any } ? T : { $: T }

export type MaybeSS<GType> = GType | SS<GType>

/**
 * Assigning object with a same reference will NOT trigger an update
 */
export function ss<T>(value: T | { $: T }) {
  if (value && typeof value === 'object' && '$' in value) {
    return value
  }

  let state = $state.raw(value)

  return {
    get $() {
      return state
    },
    set $(value: T) {
      state = value
    },
  }
}
