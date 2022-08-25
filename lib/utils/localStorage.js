function parseJson(data) {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn(e)
  }
}
export function saveValue(key, value) {
  window.localStorage.setItem(key, value)
}
export function saveJson(key, value) {
  saveValue(key, JSON.stringify(value))
  return value
}
export function getSavedValue(key, defaultValue) {
  const data = window.localStorage.getItem(key)
  return data === null ? defaultValue : data
}
export function getSavedJson(key, defaultValue) {
  const value = getSavedValue(key)
  return value ? parseJson(value) : defaultValue
}
export function saveBoolean(key, value) {
  saveValue(key, value ? '+' : '')
}
export const getSavedBoolean = (key, defaultValue) => !!getSavedValue(key, defaultValue)
export function deleteSavedValue(key) {
  window.localStorage.removeItem(key)
}
//# sourceMappingURL=localStorage.js.map
