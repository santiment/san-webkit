import { writable } from 'svelte/store';
import { mutate } from './../api';
import { getSavedJson, saveJson } from './../utils/localStorage';
import { getSessionValue } from './utils';
const TOGGLE_THEME_MUTATION = (isNightMode) => `
  mutation updateUserSettings {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }
`;
let store = { nightMode: false };
if (process.browser) {
    const { currentUser, theme } = getSessionValue();
    if (currentUser) {
        store.nightMode = theme === 'night-mode' || theme === 'nightmode';
    }
    else {
        const saved = getSavedJson('ui', store);
        if (typeof saved.nightMode === 'boolean')
            store = saved;
        else
            saveJson('ui', store);
    }
    document.body.classList.toggle('night-mode', store.nightMode || false);
}
const { subscribe, set } = writable(store);
export const ui$ = {
    subscribe,
    toggleNightMode() {
        const { currentUser } = getSessionValue();
        store.nightMode = document.body.classList.toggle('night-mode');
        if (currentUser) {
            mutate(TOGGLE_THEME_MUTATION(store.nightMode)).catch(console.error);
        }
        saveJson('ui', store);
        set(store);
    },
};
//# sourceMappingURL=ui.js.map