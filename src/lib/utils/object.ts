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
