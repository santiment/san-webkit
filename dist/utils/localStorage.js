export function parseJson(data) {
    try {
        return JSON.parse(data);
    }
    catch (e) {
        console.warn(e);
    }
}
export function saveValue(key, value) {
    window.localStorage.setItem(key, value);
}
export function getSavedValue(key) {
    return window.localStorage.getItem(key);
}
export function saveJson(key, value) {
    saveValue(key, JSON.stringify(value));
    return value;
}
export function getSavedJson(key) {
    const value = getSavedValue(key);
    if (!value)
        return undefined;
    return parseJson(value);
}
export function saveBoolean(key, value) {
    saveValue(key, value ? '+' : '');
}
export function getSavedBoolean(key) {
    const value = getSavedValue(key);
    if (value === null)
        return undefined;
    return !!value;
}
export function deleteSavedValue(key) {
    window.localStorage.removeItem(key);
}
