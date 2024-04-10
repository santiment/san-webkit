import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { mutate } from './../api/index.js';
import { getSavedJson, saveJson } from './../utils/localStorage.js';
import { getSessionValue } from './utils.js';
import { BROWSER } from 'esm-env';
const TOGGLE_THEME_MUTATION = (isNightMode) => `
  mutation updateUserSettings {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }
`;
const CTX = 'UI$$';
export function UI$$(defaultValue = {}) {
    let store = Object.assign({ isNightMode: false, isLiteVersion: false }, defaultValue);
    if (BROWSER) {
        const { currentUser, theme } = getSessionValue();
        if (currentUser) {
            store.isNightMode = theme === 'night-mode' || theme === 'nightmode';
        }
        else {
            const saved = getSavedJson('ui', store);
            if (typeof saved.isNightMode === 'boolean') {
                store.isNightMode = saved.isNightMode;
            }
            else
                saveJson('ui', store);
        }
        document.body.classList.toggle('night-mode', store.isNightMode || false);
    }
    const ui$ = writable(store);
    return setContext(CTX, {
        ui$: Object.assign(Object.assign({}, ui$), { toggleNightMode() {
                const { currentUser } = getSessionValue();
                const isNightMode = document.body.classList.toggle('night-mode');
                if (currentUser) {
                    mutate(TOGGLE_THEME_MUTATION(isNightMode)).catch(console.error);
                }
                ui$.update((store) => {
                    const updated = Object.assign(Object.assign({}, store), { isNightMode });
                    saveJson('ui', updated);
                    return updated;
                });
            } }),
    });
}
export const getUI$Ctx = () => getContext(CTX);
// NOTE: For old imports compatibility [@vanguard | 11 May, 2023]
export const ui$ = writable({});
//# sourceMappingURL=ui.js.map