import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'
import { mutate } from '@/api'
import { getSavedJson, saveJson } from '@/utils/localStorage'
import { getSessionValue } from './utils'

const TOGGLE_THEME_MUTATION = (isNightMode) => `
  mutation updateUserSettings {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }
`

const CTX = 'UI$$'

export function UI$$(defaultValue = {} as Record<string, any>) {
  let store = { isNightMode: false, isLiteVersion: false, ...defaultValue }
  const ui$ = writable(store)

  if (process.browser) {
    const { currentUser, theme } = getSessionValue()

    if (currentUser) {
      store.isNightMode = theme === 'night-mode' || theme === 'nightmode'
    } else {
      const saved = getSavedJson('ui', store) as typeof store

      if (typeof saved.isNightMode === 'boolean') store = saved
      else saveJson('ui', store)
    }

    document.body.classList.toggle('night-mode', store.isNightMode || false)
  }

  return setContext(CTX, {
    ui$: {
      ...ui$,
      toggleNightMode() {
        const { currentUser } = getSessionValue()
        store.isNightMode = document.body.classList.toggle('night-mode')

        if (currentUser) {
          mutate(TOGGLE_THEME_MUTATION(store.isNightMode)).catch(console.error)
        }

        saveJson('ui', store)

        ui$.set(store)
      },
    },
  })
}

export const getUI$Ctx = () => getContext<ReturnType<typeof UI$$>>(CTX)

// NOTE: For old imports compatibility [@vanguard | 11 May, 2023]
export const ui$ = writable({})
