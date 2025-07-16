import type { TConditionsState } from './schema.js'

import { parseRangeString } from '$lib/utils/dates/index.js'

import { TimeModifiers, type TTimeWindow } from '../../time.js'
import {
  isComparisonOperation,
  Operations,
  type TOperation,
  type TOperationType,
} from './operations.js'

function checkIsUsdMetric(metric: string) {
  return ['price_usd', 'marketcap_usd'].includes(metric)
}

export function getOperationSign(metric: string | null, operation: TOperationType): '' | '%' | '$' {
  if (operation.includes('percent')) return '%'

  if (metric && checkIsUsdMetric(metric)) return '$'

  return ''
}

export function describeConditions(metric: null | string, { operation, time }: TConditionsState) {
  return describeOperation(metric, operation) + describeOperationTime(operation.type, time)
}

function describeOperation(metric: string | null, operation: TOperation) {
  const sign = getOperationSign(metric, operation.type)

  return Operations[operation.type].describe(
    operation.values.map((v) => (v || 1) + sign) as [string, string],
  )
}

function describeOperationTime(operationType: TOperationType, time: TTimeWindow) {
  if (!isComparisonOperation(operationType)) return ''

  const { amount, modifier } = parseRangeString(time)

  return ` compared to ${amount || 1} ${TimeModifiers[modifier].label.toLowerCase()} ago`
}
