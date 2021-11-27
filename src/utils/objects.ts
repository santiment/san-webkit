export const checkIsObject = (value: any): boolean =>
  value !== null && typeof value === 'object'

type Value = {
  [key: string]: null | number | string | Value | any[]
}

export const checkAreDiffObjects = (base: null | Value, target: null | Value) =>
  !checkIsSameObject(base, target)

export function checkIsSameObject(
  base: null | Value,
  target: null | Value,
): boolean {
  // null === null | ref === ref
  if (base === target) return true
  // !null->(true) !== !ref->(false)
  if (!base !== !target) return false

  const baseKeys = Object.keys(base as Value)
  const targetKeys = Object.keys(target as Value)

  if (baseKeys.length !== targetKeys.length) return false

  for (let i = 0; i < baseKeys.length; i++) {
    const baseKey = baseKeys[i]
    const baseValue = (base as Value)[baseKey]
    const targetValue = (target as Value)[baseKey]

    if (Array.isArray(baseValue) && Array.isArray(targetValue)) {
      if (checkIsObject(baseValue[0])) {
        for (let j = 0; j < baseValue.length; j++) {
          if (checkAreDiffObjects(baseValue[j], targetValue[j])) {
            return false
          }
        }
      } else if (JSON.stringify(baseValue) !== JSON.stringify(targetValue)) {
        return false
      }

      continue
    } else if (
      checkIsObject(baseValue) &&
      checkIsObject(targetValue) &&
      checkIsSameObject(baseValue as Value, targetValue as Value)
    ) {
      continue
    }

    if (baseValue !== targetValue) return false
  }

  return true
}
