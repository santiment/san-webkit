import { getSavedJson, saveJson } from '../../../utils/localStorage/index.js';
const asSavedTourId = (id) => 'Tour--' + id;
export function getSavedTourState(id) {
    let saved;
    try {
        saved = getSavedJson(asSavedTourId(id));
    }
    catch (e) {
        console.error(e);
    }
    return { id, recent: undefined, completed: new Set(saved?.completed) };
}
export function saveTourState(state) {
    saveJson(asSavedTourId(state.id), {
        id: state.id,
        recent: state.recent,
        completed: Array.from(state.completed),
    });
}
export function checkWasTourViewed(id) {
    return !!localStorage.getItem(asSavedTourId(id));
}
