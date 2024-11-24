export function parseJson<T>(data: string): T | undefined {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn(e)
  }
}

export function saveValue(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function getSavedValue(key: string) {
  return window.localStorage.getItem(key)
}

export function saveJson<T>(key: string, value: T): T {
  saveValue(key, JSON.stringify(value))
  return value
}

export function getSavedJson<T>(key: string) {
  const value = getSavedValue(key)
  if (!value) return undefined

  return parseJson<T>(value)
}

export function saveBoolean(key: string, value: boolean) {
  saveValue(key, value ? '+' : '')
}

export function getSavedBoolean(key: string) {
  const value = getSavedValue(key)
  if (value === null) return undefined

  return !!value
}

export function deleteSavedValue(key: string) {
  window.localStorage.removeItem(key)
}
