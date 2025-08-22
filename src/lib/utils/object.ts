import type { Prettify } from '@melt-ui/svelte/internal/types'

type Keyified<T, GKeyProp extends string = 'key'> = { [K in keyof T]: T[K] & Record<GKeyProp, K> }
export function keyify<T, GKeyProp extends string = 'key'>(
  object: T,
  keyName = 'key' as GKeyProp,
): Prettify<Keyified<T, GKeyProp>> {
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

export function mergeDeep<T1, T2, T3, T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4
export function mergeDeep<T1, T2, T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3
export function mergeDeep<T1, T2>(obj1: T1, obj2: T2): T1 & T2
export function mergeDeep(...objects: Record<string, any>[]) {
  const isObject = (obj: unknown): obj is object => !!obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}
