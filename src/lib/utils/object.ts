type Keyified<T, GKeyProp extends string = 'key'> = { [K in keyof T]: T[K] & Record<GKeyProp, K> }
export function keyify<T, GKeyProp extends string = 'key'>(
  object: T,
  keyName = 'key' as GKeyProp,
): Keyified<T, GKeyProp> {
  for (const key in object) {
    const value = object[key] as Record<GKeyProp, string>
    value[keyName] = key
  }
  return object as Keyified<T, GKeyProp>
}

export function exactObjectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof typeof obj)[]
}

export function createEnumMap<T extends string[]>(keys: T) {
  return keys.reduce((res, key) => ({ ...res, [key]: key }), {} as { [K in T[number]]: K })
}
