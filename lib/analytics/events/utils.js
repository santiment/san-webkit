import { getSavedJson, saveJson } from './../../utils/localStorage';
import { track } from '../index';
export function TrackCategory(category) {
    const data = (data) => (Object.assign(Object.assign({}, data), { category }));
    return (event, properties) => track.event(event, data(properties));
}
const LOGIN_METHOD = 'LOGIN_METHOD';
export function saveLoginMethod(method) {
    return saveJson(LOGIN_METHOD, { method, timestamp: Date.now() });
}
export function getSaveLoginMethod() {
    return getSavedJson(LOGIN_METHOD);
}
//# sourceMappingURL=utils.js.map