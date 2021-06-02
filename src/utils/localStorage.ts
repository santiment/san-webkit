function parseJson<T>(data: string): T | undefined {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn(e)
  }
}

export function saveValue(key: string, value: string) {
  window.localStorage.setItem(key, value)
}
export function saveJson<T>(key: string, value: T) {
  saveValue(key, JSON.stringify(value))
}

export function getSavedValue(key: string, defaultValue?: string) {
  const data = window.localStorage.getItem(key)
  return data === null ? defaultValue : data
}

export function getSavedJson<T>(key: string, defaultValue?: T): T | undefined {
  const value = getSavedValue(key)
  return value ? parseJson<T>(value) : defaultValue
}
