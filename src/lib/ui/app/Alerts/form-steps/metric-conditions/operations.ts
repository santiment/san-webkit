import { keyify } from '$lib/utils/object.js'

import { isNumericOperation, type TApiOperation } from '../../operations.js'

export const SimpleOperations = keyify({
  above: {
    label: 'More than',
    describe: ([value]) => `above ${value}`,
  },
  above_or_equal: {
    label: 'More than or equal',
    describe: ([value]) => `above or equal ${value}`,
  },
  below: {
    label: 'Less than',
    describe: ([value]) => `below ${value}`,
  },
  below_or_equal: {
    label: 'Less than or equal',
    describe: ([value]) => `below or equal ${value}`,
  },
  inside_channel: {
    label: 'Entering channel',
    describe: ([left, right]) => `between ${left} and ${right}`,
  },
  outside_channel: {
    label: 'Outside channel',
    describe: ([left, right]) => `outside ${left} and ${right}`,
  },
  percent_up: {
    label: 'Moving up %',
    describe: ([value]) => `up ${value}`,
  },
  percent_down: {
    label: 'Moving down %',
    describe: ([value]) => `down ${value}`,
  },
} as const satisfies Record<string, TOperationData>)

export const CombinedOperations = keyify({
  percent_up_or_down: {
    label: 'Moving up or down %',
    describe: ([left, right]) => `up ${left} or moving down ${right}`,
  },
} as const satisfies Record<string, TOperationData>)

type TOperationData = {
  label: string
  describe: (values: [string, string]) => string
}

export const Operations = { ...SimpleOperations, ...CombinedOperations }

export type TSimpleOperationType = keyof typeof SimpleOperations
export type TCombinedOperationType = keyof typeof CombinedOperations
export type TOperationType = keyof typeof Operations

export function isSimpleOperationKey(key: string): key is TSimpleOperationType {
  return key in SimpleOperations
}

export type TOperation = { type: TOperationType; values: [number, number] }

export function getOperationFromApi(operation: TApiOperation | undefined): TOperation | null {
  if (!operation) return null

  const key = Object.keys(operation)[0]

  if (isSimpleOperationKey(key)) {
    const value = operation[key]
    if (!isNumericOperation(value)) return null

    return { type: key, values: Array.isArray(value) ? value : [value, value] }
  }

  if (operation.some_of && Array.isArray(operation.some_of)) {
    const [first, second] = operation.some_of
    if (typeof first === 'number' || typeof second === 'number') return null

    const percent_up = first.percent_up ?? second.percent_up
    const percent_down = first.percent_down ?? second.percent_down

    if (typeof percent_up !== 'number' || typeof percent_down !== 'number') return null

    return { type: 'percent_up_or_down', values: [percent_up, percent_down] }
  }

  return null
}

function isDuplexOperation(type: TOperationType) {
  const duplexTypes: TOperationType[] = ['inside_channel', 'outside_channel']

  return duplexTypes.includes(type)
}

function assertNever(_: never): never {
  throw new Error("Didn't expect to get here")
}

export function reduceOperationToApi({ type, values }: TOperation): TApiOperation {
  if (isSimpleOperationKey(type)) {
    return { [type]: isDuplexOperation(type) ? values : values[0] }
  }

  if (type === 'percent_up_or_down') {
    return { some_of: [{ percent_up: values[0] }, { percent_down: values[1] }] }
  }

  assertNever(type)
}
