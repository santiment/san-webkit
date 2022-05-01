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
export function saveJson<T>(key: string, value: T): T {
  saveValue(key, JSON.stringify(value))
  return value
}

export function getSavedValue(key: string, defaultValue?: string) {
  const data = window.localStorage.getItem(key)
  return data === null ? defaultValue : data
}

export function getSavedJson<T>(key: string, defaultValue?: T): T | undefined {
  const value = getSavedValue(key)
  return value ? parseJson<T>(value) : defaultValue
}

export function saveBoolean(key: string, value: boolean) {
  saveValue(key, value ? '+' : '')
}
export const getSavedBoolean = (key: string, defaultValue?: boolean) =>
  !!getSavedValue(key, defaultValue as any)

export function deleteSavedValue(key: string) {
  window.localStorage.removeItem(key)
}
