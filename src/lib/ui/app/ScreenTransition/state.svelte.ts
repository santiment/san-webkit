import { createCtx } from '$lib/utils/index.js'

export const useScreenTransitionCtx = createCtx(
  'useScreenTransitionCtx',
  <T extends { name: string; backLabel?: string }>(
    screens: readonly T[],
    defaultValue: T = screens[0],
  ) => {
    const indices = new Map<T, number>()
    screens.forEach((value, i) => indices.set(value, i))

    let screen = $state.raw(defaultValue)
    let index = $state(indices.get(screen)!)

    return {
      screens,
      screen: {
        get $() {
          return screen
        },

        get index$() {
          return index
        },

        set $(value: T) {
          index = indices.get(value)!
          screen = value
        },
      },
    }
  },
)
