import { getSavedBoolean, saveBoolean } from '../../utils/localStorage/index.js';
const KEY = 'NIGHT_MODE_ENABLED';
export function getSavedNightMode() {
    return getSavedBoolean(KEY);
}
export function saveNightMode(value) {
    saveBoolean(KEY, value);
}
