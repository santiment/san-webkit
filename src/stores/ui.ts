import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { mutate } from '@/api'
import { getSavedBoolean, saveBoolean, getSavedJson, saveJson } from '@/utils/localStorage'
import { getSessionValue } from './utils'
import { BROWSER } from 'esm-env'

const TOGGLE_THEME_MUTATION = (isNightMode) => `
  mutation updateUserSettings {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }
`

const CTX = 'UI$$'

// TODO: Remove after halloween [@vekkele]
const HALLOWEEN_NIGHT_MODE = 'HALLOWEEN_NIGHT_MODE_2025'

export function UI$$(defaultValue = {} as Record<string, any>) {
  let store = { isNightMode: false, isLiteVersion: false, ...defaultValue }

  if (BROWSER) {
    const { currentUser, old_currentUser = currentUser, theme } = getSessionValue()

    if (old_currentUser) {
      store.isNightMode = theme === 'night-mode' || theme === 'nightmode'
    } else {
      const saved = getSavedJson('ui', store) as typeof store

      if (typeof saved.isNightMode === 'boolean') {
        store.isNightMode = saved.isNightMode
      } else saveJson('ui', store)
    }

    // TODO: Remove after halloween [@vekkele]
    store.isNightMode = getSavedBoolean(HALLOWEEN_NIGHT_MODE, true)

    document.body.classList.toggle('night-mode', store.isNightMode || false)
  }

  const ui$ = writable(store)

  return setContext(CTX, {
    ui$: {
      ...ui$,
      toggleNightMode() {
        const { currentUser, old_currentUser = currentUser } = getSessionValue()
        const isNightMode = document.body.classList.toggle('night-mode')

        // @ts-expect-error
        window.onNightModeToggle?.(isNightMode)

        if (old_currentUser) {
          mutate(TOGGLE_THEME_MUTATION(isNightMode)).catch(console.error)
        }

        ui$.update((store) => {
          const updated = { ...store, isNightMode }
          saveJson('ui', updated)

          // TODO: Remove after halloween [@vekkele]
          saveBoolean(HALLOWEEN_NIGHT_MODE, store.isNightMode)
          return updated
        })
      },
    },
  })
}

export const getUI$Ctx = () => getContext<ReturnType<typeof UI$$>>(CTX)

// NOTE: For old imports compatibility [@vanguard | 11 May, 2023]
export const ui$ = writable({})
