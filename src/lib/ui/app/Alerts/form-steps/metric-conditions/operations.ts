import { assertNever } from '$lib/utils/assert.js'
import { keyify } from '$lib/utils/object.js'

import { isNumericOperation, type TApiOperation } from '../../operations.js'

const SimpleOperations = keyify({
  above: {
    label: 'Above',
    describe: ([value]) => `is above ${value}`,
  },
  below: {
    label: 'Below',
    describe: ([value]) => `is below ${value}`,
  },
  inside_channel: {
    label: 'In range',
    describe: ([left, right]) => `is above ${left} and below ${right}`,
  },
  outside_channel: {
    label: 'Out of range',
    describe: ([left, right]) => `is below ${left} or above ${right}`,
  },
  percent_up: {
    label: 'Increase %',
    describe: ([value]) => `increased ${value} or more`,
  },
  percent_down: {
    label: 'Decrease %',
    describe: ([value]) => `decreased ${value} or more`,
  },
} as const satisfies Record<string, TOperationData>)

const CombinedOperations = keyify({
  percent_up_or_down: {
    label: 'Change %',
    describe: ([value]) => `changed ${value} or more`,
  },
} as const satisfies Record<string, TOperationData>)

type TOperationData = {
  label: string
  describe: (values: [string, string]) => string
}

export const Operations = { ...SimpleOperations, ...CombinedOperations }

type TSimpleOperationType = keyof typeof SimpleOperations
export type TOperationType = keyof typeof Operations

export function isSimpleOperationKey(key: string): key is TSimpleOperationType {
  return key in SimpleOperations
}

export type TOperation = { type: TOperationType; values: [number, number] }

export function getOperationFromApi(operation: TApiOperation | undefined): TOperation | null {
  if (!operation) return null

  const key = Object.keys(operation)[0]
  const stateKey = compatLegacyOperations(key)

  if (isSimpleOperationKey(stateKey)) {
    const value = operation[key]
    if (!isNumericOperation(value)) return null

    return { type: stateKey, values: Array.isArray(value) ? value : [value, value] }
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

function compatLegacyOperations(key: string): TSimpleOperationType | (string & {}) {
  switch (key) {
    case 'above_or_equal':
      return 'above'
    case 'below_or_equal':
      return 'below'
    default:
      return key
  }
}

const DUPLEX_OPERATIONS = new Set<TOperationType>(['inside_channel', 'outside_channel'])

export function isDuplexOperation(type: TOperationType) {
  return DUPLEX_OPERATIONS.has(type)
}

const COMPARISON_OPERATIONS = new Set<TOperationType>([
  'percent_up',
  'percent_down',
  'percent_up_or_down',
])

export const isComparisonOperation = (operation: TOperationType) =>
  COMPARISON_OPERATIONS.has(operation)

export function reduceOperationToApi({ type, values }: TOperation): TApiOperation {
  if (isSimpleOperationKey(type)) {
    return { [type]: isDuplexOperation(type) ? values : values[0] }
  }

  if (type === 'percent_up_or_down') {
    const [upValue, downValue] = isDuplexOperation(type) ? values : [values[0], values[0]]
    return { some_of: [{ percent_up: upValue }, { percent_down: downValue }] }
  }

  assertNever(type)
}
