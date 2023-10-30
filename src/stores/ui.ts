import { getContext, setContext } from 'svelte'
import { get, writable } from 'svelte/store'
import { mutate } from '@/api'
import { getSavedBoolean, getSavedJson, saveBoolean, saveJson } from '@/utils/localStorage'
import { getSessionValue } from './utils'

const TOGGLE_THEME_MUTATION = (isNightMode) => `
  mutation updateUserSettings {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }
`

const CTX = 'UI$$'

const HALLOWEEN_PROMO_NIGHT_MODE = 'HALLOWEEN_PROMO_NIGHT_MODE'

export function UI$$(defaultValue = {} as Record<string, any>) {
  let store = { isNightMode: false, isLiteVersion: false, ...defaultValue }

  if (process.browser) {
    // const { currentUser, theme } = getSessionValue()

    // if (currentUser) {
    //   store.isNightMode = theme === 'night-mode' || theme === 'nightmode'
    // } else {
    const saved = getSavedJson<typeof store>('ui')
    const savedNightMode = getSavedBoolean(HALLOWEEN_PROMO_NIGHT_MODE, store.isNightMode)

    if (saved) {
      saved.isNightMode = savedNightMode
      store = saved
    }

    saveJson('ui', saved ?? store)
    // }

    document.body.classList.toggle('night-mode', store.isNightMode)
  }

  const ui$ = writable(store)

  return setContext(CTX, {
    ui$: {
      ...ui$,
      toggleNightMode() {
        const { currentUser } = getSessionValue()
        const store = get(ui$)
        store.isNightMode = document.body.classList.toggle('night-mode')

        if (currentUser) {
          mutate(TOGGLE_THEME_MUTATION(store.isNightMode)).catch(console.error)
        }

        saveJson('ui', store)
        saveBoolean(HALLOWEEN_PROMO_NIGHT_MODE, store.isNightMode)

        ui$.set(store)
      },
    },
  })
}

export const getUI$Ctx = () => getContext<ReturnType<typeof UI$$>>(CTX)

// NOTE: For old imports compatibility [@vanguard | 11 May, 2023]
export const ui$ = writable({})
