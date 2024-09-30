export function saveValue(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function getSavedValue(key: string, defaultValue?: string) {
  const data = window.localStorage.getItem(key)
  return data === null ? defaultValue : data
}

export const getSavedBoolean = (key: string, defaultValue?: boolean) =>
  !!getSavedValue(key, defaultValue as any)

export function saveBoolean(key: string, value: boolean) {
  saveValue(key, value ? '+' : '')
}

export function deleteSavedValue(key: string) {
  window.localStorage.removeItem(key)
}
